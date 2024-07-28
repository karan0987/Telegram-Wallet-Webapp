const fs = require('fs')
const path = require('path')

const data = {}

exports.createResponse = (ctx, target, payload) => data[ctx.from.id] = { target, payload }

exports.deleteResponse = (ctx) => delete data[ctx.from.id]

exports.getResponse = (ctx) => { return data[ctx.from.id] }

exports.checkTarget = (ctx,target) =>{return data[ctx.from.id]?.target == target }



//Activating all response handlers
let folder = fs.readdirSync(path.join(__dirname, 'handlers'))
folder.forEach(ele => require(path.join(__dirname,'handlers' ,ele)))