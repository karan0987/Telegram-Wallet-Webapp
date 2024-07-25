const Admin = require('../../model/Admin')
let User = require('../../model/User')

module.exports = async (ctx, next) => {
    let user = await User.findOne({ userId: ctx.from.id })
    if (!user) {
        user = new User({ userId: ctx.from.id })
        await user.save()
    }
    if (user.is_banned) return await ctx.replyWithHTML(`<b>You are banned from using this bot.</b>`)
    let adminData = await Admin.findOne({})
    if (!adminData) {
        adminData = new Admin()
        adminData.save().then(()=>console.log('Admin default settings saved to database'))
    }
    if(adminData.maintaince_mode.bot) return await ctx.replyWithHTML(`<b>Bot is under maintaince now</b>`)
    next()
}