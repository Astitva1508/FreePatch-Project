const app = require('./index')
const connectDB = require('./db/connect')
const PORT = process.env.PORT ||3000

const connectServer=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        const server = app.listen(PORT,()=>console.log(`Server Listening on PORT ${PORT}`));
        console.log('Connected to Database')
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

const cleanup = require('./utlis/exit-handler').Cleanup(myCleanup);

function myCleanup() {
  console.log('App specific cleanup code...');
};



connectServer()