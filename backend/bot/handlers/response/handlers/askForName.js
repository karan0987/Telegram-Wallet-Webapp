const { checkTarget, deleteResponse } = require("..")
const bot = require("../../../bot")

exports.targetName = 'AskForName' //Target name


bot.on('message',async (ctx,next)=>{
    if(!checkTarget(ctx,this.targetName)) return next() //If this is not target handler for user then it will deliver update to next message handler
    await ctx.replyWithHTML(`ok so your name is: ${ctx.message.text}`)

    deleteResponse(ctx) //this Handler will no longer listen  to update
})