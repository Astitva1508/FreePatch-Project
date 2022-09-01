const app = require('./index')
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 3000

const connectServer=async ()=>{
    
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>console.log(`Server Listening on PORT ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

connectServer();

process.on('unhandledRejection',(err)=>{
    console.log('Unhandled Rejection')
    console.log(err)
})
process.on('uncaughtException',(err)=>{
    console.log('Uncaught Exception')
    console.log(err)
})
