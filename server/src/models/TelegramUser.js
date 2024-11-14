const mongoose = require("mongoose");


const teleSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
   teleId: {
    type: String,
    required: true,
    unique: true
   },
});



module.exports = mongoose.model('TelegramUser', teleSchema);