const { default: mongoose } = require("mongoose");

module.exports = mongoose.model('User', new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    balance: {
        type: Number,
        default: 0,
    },
    refer: {
        type: Object,
        default: {},
    },
    is_banned:{
        type: Boolean,
        default:false,
    }
}, { strict: false }))

