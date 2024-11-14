const mongoose = require("mongoose");


const googleSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
   googleId: {
    type: String,
    required: true,
    unique: true
   },
});



module.exports = mongoose.model('GoogleUser', googleSchema);