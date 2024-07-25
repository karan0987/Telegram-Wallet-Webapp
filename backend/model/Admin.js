const { default: mongoose } = require("mongoose");

module.exports = mongoose.model('Admin', new mongoose.Schema({
    maintaince_mode: {
        bot: {
            default: false,
            type: Boolean,
        },
        app: {
            default: false,
            type: Boolean
        }
    },
    add_fund: {
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        },
        tax: {
            type: Number,
            default: 0
        }
    },
    withdraw: {
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        },
        tax: {
            type: Number,
            default: 0
        }
    },
    channels: {
        type: [{
            id: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true
            },
            invite_link: {
                type: String,
            }
        }],
        default: []
    },
    payout_api: {
        default: "",
        type: String
    }
}))