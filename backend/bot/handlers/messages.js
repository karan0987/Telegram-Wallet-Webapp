const { frontend } = require("../../config");
const bot = require("../bot");

bot.on('message', async (ctx, next) => {
    await ctx.replyWithHTML(`<b>Web App</b>`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open', web_app: { url: frontend } }]
            ]
        }
    })
})