const User = require('../models/User')

const login =async(req,res)=>{
    const {user , email , password} = req.body
    if (!user || !email || !password){
        throw new Error("Fields must be provided")
    }
}

const register=async (req,res)=>{
    const user  = new User({...req.body})
    await user.save()
    res.json({success:true,msg:'User registered successfully',user})
}

module.exports={login,register}