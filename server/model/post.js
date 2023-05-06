const mongoose=require('mongoose')

const postSchema=new mongoose.Schema(
    {
        title:String,
        message:String,
        creator:{type:String,default:"none"},
        tags:[String],
        selectedfile:{type:String,require:true},
        createdAt:
        {
            type:Date,
            default:new Date()
        }
    }
)

const Postmodel=mongoose.model('Posts',postSchema)

module.exports=Postmodel