require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')


const authRoute=require('./routes/auth')
const productRoute=require('./routes/products')

const errorHandlerMiddleware=require('./middleware/errorHandler')
const authenticationMiddleware=require('./middleware/authentication')
const notFoundMiddleware=require('./middleware/notFound.js')


app.use(cors())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('I am an entreprenuer')
})

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/products',authenticationMiddleware,productRoute)


app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)


module.exports=app;
