const { StatusCodes } = require('http-status-codes')
const {UnauthenticatedError} = require('../errors/')
const {User} = require('../models/userModel')

const login =async(req,res)=>{
    const {email,password}=req.body
    const user = await User.findOne({email})
    if (!user){
        throw new UnauthenticatedError('Invalid email ID')
    }
    
    const isPasswordCorrect = user.comparePassword(password)
    if (!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Login Credentials')
    }
    const token= user.createJWT()
    user.password=undefined
    res.status(StatusCodes.OK).json({success:true,msg:'logged In Successfully',user:user,jwt:token})
}

const register=async (req,res)=>{
    const {display_name,email,password}=req.body
    const user = new User({display_name,email,password})
    await user.save()
    user.password=undefined
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).status(200).json({success:'true',msg:'User Registration Succesful',user:user,jwt:token})
}

module.exports={login,register}