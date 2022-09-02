require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()



const authRoute=require('./routes/auth')

const errorHandlerMiddleware=require('./middleware/errorHandler')

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',(req,res)=>{
    res.send('I am an entreprenuer')
})

app.use('/api/v1/auth',authRoute)


app.use(errorHandlerMiddleware)



module.exports=app;
