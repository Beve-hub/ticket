const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GoogleUser = require('../models/GoogleUser');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await GoogleUser.findById(id);
        return user ? done(null, user) : done(null, null);
    } catch (err) {
        done(err, null);
    }
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'https://ticket-7b2h.onrender.com/api/auth/google/redirect',
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {
            let findUser;
            try {
                findUser = await GoogleUser.findOne({ googleId: profile.id });
            } catch (err) {
                return done(err, null);
            }

            try {
                if (!findUser) {
                    const newUser = new GoogleUser({
                        googleId: profile.id,
                        username: profile.displayName, // Change profile.username to profile.displayName if needed
                    });
                    const newSavedUser = await newUser.save();
                    return done(null, newSavedUser);
                }
                return done(null, findUser);
            } catch (err) {
                console.error(err);
                return done(err, null);
            }
        }
    )
);

module.exports = passport;