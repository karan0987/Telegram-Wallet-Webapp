const bot = require("../bot");
const { createResponse } = require("./response");
const askForName = require("./response/handlers/askForName");

bot.command('start',async ctx=>{
    await ctx.reply(`What's your name?`)
    createResponse(ctx,askForName.targetName) //Next message will be handled by askForName handler
})