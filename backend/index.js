const mongoose = require('mongoose')
const { mongo_url } = require('./config')

mongoose.connect(mongo_url)
.then(()=>{
    console.log('Connected To MongoDB')
    require('./bot')
})

