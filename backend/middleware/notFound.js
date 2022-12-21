const {StatusCodes} = require('http-status-codes')

const notFound = async(req,res)=>{
    res.status(StatusCodes.NOT_FOUND).json({success:false,message:'Requested Route does not exist'})
}

module.exports = notFound