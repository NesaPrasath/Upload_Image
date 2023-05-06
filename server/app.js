const express=require('express')
const app=express()
const cors=require('cors')
const urlencoded=require('urlencoder')
require('dotenv').config()
const Connect=require('./config/db')
const post=require('./router/post')
const multer=require('multer')
const upload = multer({ dest: 'uploads/' })


app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cors())
app.use('/uploads',express.static('uploads'))
app.use('/api/post',post)

app.get('/',(req,res)=>
{
    res.send("home page")
})
const port=process.env.PORT||3000
const start=async ()=>
{
    try
    {
        await Connect(process.env.MONGO_URL)
        app.listen(port,console.log(`server started in ${port}`))
    }
    catch(err)
    {
        console.error(err);
    }
}

start()