const {UnauthenticatedError}=require('../errors/index')
const {StatusCodes} = require('http-status-codes')
const {User} = require('../models/userModel')
const jwt=require('jsonwebtoken')

const authenticationMiddleware=async(req,res,next)=>{
    const headers = req.headers.authorization;
    if (!headers || !headers.startsWith('Bearer')){
        throw new UnauthenticatedError('Token Not Provided')
    }
    try {
        const token = headers.split(' ')[1]
        const {userID} = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(userID).select('_id displayName')
        
        if (!user) throw new UnauthenticatedError('No user with such details exist')

        req.user=user
        next()
    } catch (error) {
        throw new UnauthenticatedError(' Route not accessible, Please Login in to continue')
    }
}

module.exports = authenticationMiddleware