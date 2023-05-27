const mongoose = require('mongoose')

const companyschema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    companyLocation:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        Default:Date.now()
    }
    
})

module.exports = mongoose.model('company', companyschema)
