const mongoose=require('mongoose')
const shortid=require('shortid')
const urlSchema=mongoose.Schema({

    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        default:shortid.generate

    }
})
const urlmodel=mongoose.model('urlshrink',urlSchema)
module.exports=urlmodel