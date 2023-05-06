const mongoose=require('mongoose')

const Connect=(url)=>
{
    mongoose.set('strictQuery',true)
    return mongoose.connect(url,console.log("database connected"))
}

module.exports=Connect