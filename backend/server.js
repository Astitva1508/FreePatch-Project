const app = require('./index')
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 3000

const connectServer=async ()=>{
    
    try {
        await connectDB('mongodb+srv://astitva:1234@nodeandexpressprojects.dh0qsg3.mongodb.net/FreePatch?retryWrites=true&w=majority')
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
