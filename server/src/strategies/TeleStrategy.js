const telegramPassport = require('passport');
const { Strategy } = require('passport-telegram');
const TelegramUser = require('../models/TelegramUser');


telegramPassport.serializeUser((user, done) => {
    done(null, user.id);
});

telegramPassport.deserializeUser(async (id, done) => {
    try {
        const user = await TelegramUser.findById(id);
        return user ?  done(null, user) : done(null, null);
    } catch (err) {
        done(err, null);
    } 
})
telegramPassport.use(
    new Strategy({
        clientID: process.env.TELEGRAM_CLIENTID,
        clientSecret: process.env.TELEGRAM_CLIENT_SECRET,       
        callbackURL: 'https://ticket-7b2h.onrender.com/api/auth/telegra/redirect',
    },
    async ( accessToken, refreshToken, profile, done) => { 
        let findUser;
        try {
            findUser = await TelegramUser.findOne({ googleId: profile.id });
        } catch (err) {
            return done(err, null);
        }

        try {
            if (!findUser) {
                const newUser = new TelegramUser({
                    googleId: profile.id,
                    username: profile.displayname,
                });
                const newSavedUser = await newUser.save();
                return done(null, newSavedUser);
            }
            return done(null, findUser);
        } catch (err) {
            console.error(err);
            return done(err, null);
        }
    })
);

module.exports = telegramPassport;  