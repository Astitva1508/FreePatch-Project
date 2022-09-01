const {CustomAPIError} = require('../errors')

const customErrorHAndler = async(err,req,res,next)=>{
    if (err instanceof CustomAPIError){
        console.log(err.stack)
        return res.json({err:err.msg})
    }
    console.log(err.stack)
    res.status(500).json({msg:`Internal Server Error ${err}`})
}

module.exports=customErrorHAndler