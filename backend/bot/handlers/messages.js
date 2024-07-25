const bot = require("../bot");

bot.on('message',(ctx,next)=>{
    ctx.reply(`Replied to: ${ctx.message.text}`)
})