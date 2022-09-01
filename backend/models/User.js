const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    display_name:{
        type:String,
        required:[true,'first name must be provided'],
        minlength:3,
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true,'Email must be provided'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique:[true,'Email already exists'],
    },
    password:{
        type:String,
        trim:true,
        required:[true,'Password is required'],
    }
})

module.exports=mongoose.model('User',UserSchema)