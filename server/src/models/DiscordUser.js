const mongoose = require("mongoose");


const discordSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
   discordId: {
    type: String,
    required: true,
    unique: true
   },
});



module.exports = mongoose.model('DiscordUser', discordSchema);