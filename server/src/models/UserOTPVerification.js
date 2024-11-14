const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserOTPVerirficationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
});

const userOTPVerification = mongoose.model(
    "userOTPVerification",
    UserOTPVerirficationSchema
);

module.exports = userOTPVerification;