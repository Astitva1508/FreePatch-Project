const mongoose=require('mongoose')
const addressSchema=require('./addressModel')
const crypto = require('crypto')
const options = {timestamps:true};
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    displayName:{
        type:String,
        required:[true,'Name must be provided'],
        minlength:3,
        maxlength:20,
        trim:true
    },
    // userType:{
    //     type:String,
    //     requied:true,
    //     default:'Guest',
    //     enum:['Admin','User','Guest']
    // },
    email:{
        type:String,
        required:[true,'Email must be provided'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique:[true,'Email already exists']
    },
    password:{
        type:String,
        trim:true,
        required:[true,'Password is required'],
    },
    salt:{
        type:String
    },
    emailNotify:{
        type:Boolean,
        required:true,
        default:true
    },
    isAnonymous:{
        type:Boolean,
        required:true,
        default:true
    },
    isConfirmed:{
        type:Boolean,
        required:true,
        default:false
    },
//Condition so that either googleId is filled or else password must be provided
    googleId:{
        type:String,
    },
//If GoogleId is provided
    avatar:{
        type:String,
    },
    address:[addressSchema],
    orders:[
    ]
},options)

UserSchema.pre('save',async function(){
    //Create a unique hash for a particular user
    const salt = crypto.randomBytes(16).toString('hex'); 
    this.salt=salt
    // Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
    const hash = crypto.pbkdf2Sync(this.password, salt, 1000, 64, 'sha512').toString('hex');
    this.password = hash
})

UserSchema.methods.createJWT=function(){
    return jwt.sign({userID:this._id,name:this.display_name},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword=function(candidatePassword){
    const hashCandidatePassword = crypto.pbkdf2Sync(candidatePassword, this.salt, 1000, 64, 'sha512').toString('hex');
    return (hashCandidatePassword===this.password)
}


const User  = mongoose.model('User',UserSchema)

module.exports={User}