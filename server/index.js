const mongoose=require('mongoose')
const dotenv =require('dotenv')
const express=require('express')
const router=require('./Routes/TodoRoute')
const cors=require('cors')
dotenv.config();
const PORT=process.env.PORT || 5000;
const app=express();


app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log("connected to mongodb..")}).catch((err)=>{
    console.log(err.message)
})
app.use(router)

app.listen(PORT,()=>{console.log("server started")})