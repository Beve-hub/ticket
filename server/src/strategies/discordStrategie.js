const passport = require('passport');
const { Strategy } = require('passport-discord');
const DiscordUser = require('../models/DiscordUser');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await DiscordUser.findById(id);
        return user ?  done(null, user) : done(null, null);
    } catch (err) {
        done(err, null);
    } 
})
passport.use(
    new Strategy({
        clientID: process.env.DISCORD_CLIENTID,
        clientSecret: process.env.DISCOD_CLIENT_SECRET,
        callbackURL: 'https://ticket-7b2h.onrender.com/api/auth/discord/redirect',
        scope: ['identify', 'guilds']
    },
    async (accessToken, refreshToken, profile, done) => { 
        let findUser;
        try {
            findUser = await DiscordUser.findOne({ discordId: profile.id });
        } catch (err) {
            return done(err, null);
        }

        try {
            if (!findUser) {
                const newUser = new DiscordUser({
                    discordId: profile.id,
                    username: profile.username,
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

module.exports = passport;