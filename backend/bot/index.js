const bot = require("./bot");

bot.launch(()=>{
    console.log('Bot is listening to Updates')
    require('./handlers')
})