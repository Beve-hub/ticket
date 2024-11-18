const { Router } = require('express');
const passport = require('./../strategies/discordStrategie');
const googlePassport = require('./../strategies/googleStrategy');
const telePassport = require('./../strategies/TeleStrategy');
const User = require('../models/User');
const { hashPassword, comparePasswords } = require('../utils/helper');
const UserOTPVerification = require('../models/UserOTPVerification');
const { transporter, sendVerifiedEmail } = require('../utils/nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = Router();


// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }
        if (!/^[a-zA-Z\s]*$/.test(name)) {
            return res.status(400).json({ message: 'Invalid name format' });
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            return res.status(400).json({ message: 'Password must meet complexity requirements' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password and create the user
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ name, email, password: hashedPassword, verified: false });
        await newUser.save();

        // Send OTP verification email
        await sendOTPVerification(newUser, res);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.header('auth-token', token);
        return res.json({ message: 'User logged in successfully', token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});


// Verify the code
router.post('/verifyOTP', async (req, res) => {
    try {
        const { userId, otp } = req.body;
        if (!userId || !otp) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            const UserOTPVerificationRecords = await UserOTPVerification.find({ userId });
            if (UserOTPVerificationRecords.length <= 0) {
                return res.status(404).json({ message: "Account record doesn't exist or has been verified already. Please register or login." });
            } else {
                const { expiresAt } = UserOTPVerificationRecords[0];
                const hashedOTP = UserOTPVerificationRecords[0].otp;
                
                if (expiresAt < Date.now()) {
                    // OTP has expired
                    await UserOTPVerification.deleteMany({ userId });
                    return res.status(404).json({ message: 'Code has expired. Please request again.' });
                } else {
                    const validOTP = await bcrypt.compare(otp, hashedOTP);

                    if (!validOTP) {
                        return res.status(404).json({ message: 'Invalid code passed. Check your inbox.' });
                    } else {
                        // Success
                        await User.updateOne({ _id: userId }, { verified: true });
                        await UserOTPVerification.deleteMany({ userId });
                        res.json({
                            message: 'Email verified successfully',
                            status: 'User email verified successfully'
                        });
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error verifying code:', error);
        res.status(500).json({ message: 'Error verifying code' });
    }
});



// resend verificcation
router.post("/resendOTPVerifiication", async (req, res) => {
    try {
        const { userId, email} = req.body;

        if (!userId || !email) {
            return res.status(400).json({ message: 'Please provide user id and email' });
        } else {
            // delete existing records and resend
            await UserOTPVerification.deleteMany({ userId });
            sendOTPVerification({ _id: userId,email}, res);
        }
    } catch (error) {
        console.error('Error resending verification:', error);
        res.status(500).json({ message: 'Error resending verification' });
    }
});

// Send OTP verification email
const sendOTPVerification = async (user, res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const mailOptions = {
            from: 'nexcelgloba@gmail.com',
            to: user.email,
            subject: 'OTP Verification',
            html: `<p>Thank you for choosing TicketHub. Use this OTP to complete your Sign Up procedures and verify your account on ticketHub.</p> 
<p>Remember, Never share this OTP with anyone. <br/> This code <b>expires in 15 minutes.</b> <br/> <h2  style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;"><b>${otp}</b></h2> <p style="font-size:15px;">Regards,<br />Team TicketHub</p></p>`
        };

        const hashedOTP = await bcrypt.hash(otp, 10);
        const newOTPVerification = new UserOTPVerification({
            userId: user._id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 15 * 60 * 1000
        });

        await newOTPVerification.save();
        await transporter.sendMail(mailOptions);

        res.json({ status: "PENDING", message: "Verification OTP email sent", data: { userId: user._id, email: user.email } });
    } catch (error) {
        console.error('Error sending OTP verification email:', error);
        res.status(500).json({ message: 'Error sending OTP verification email' });
    }
};


// Request password reset
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Please provide your email' });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a secure reset token
        const resetToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

        // Send reset email
        const resetLink = `http://your-app-url/reset-password?token=${resetToken}`;
        const mailOptions = {
            from: 'nexcelgloba@gmail.com',
            to: email,
            subject: 'Password Reset',
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expires in 15 minutes.</p>`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Password reset link sent to your email.' });
    } catch (error) {
        console.error('Error requesting password reset:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Reset password
router.post('/reset-password', async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        if (!token || !newPassword) {
            return res.status(400).json({ message: 'Token and new password are required' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded._id;

        // Validate new password
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)) {
            return res.status(400).json({ message: 'Password must meet complexity requirements' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        await User.updateOne({ _id: userId }, { password: hashedPassword });

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Update password
router.post('/change-password', async (req, res) => {
    try {
        const { userId, oldPassword, newPassword } = req.body;

        if (!userId || !oldPassword || !newPassword) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify old password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Old password is incorrect' });
        }

        // Validate new password
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)) {
            return res.status(400).json({ message: 'Password must meet complexity requirements' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Discord OAuth
router.get('/discord', passport.authenticate('discord'));
router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.sendStatus(200)
});


// Google OAuth
router.get(
    '/google', googlePassport.authenticate('google', { scope: ['email','profile'] })
);
router.get(
    '/google/redirect', googlePassport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.sendStatus(200);
}
);

// Telegram OAuh
router.get('/telegram', telePassport.authenticate('telegram'));

router.get('/telegram/redirect', telePassport.authenticate('telegram', { 
    failureRedirect: '/' 
}), (req, res) => {
    res.redirect('/dashboard'); // Redirect after successful authentication

})

module.exports = router;