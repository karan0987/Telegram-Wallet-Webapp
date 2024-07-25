const { Telegraf } = require("telegraf");
const { bot_token } = require("../config");
const checkUser = require("./middlewares/checkUser");

let bot = new Telegraf(bot_token)

bot.use(checkUser)

module.exports = bot