const mongoose= require('mongoose')
const states = require('../data/states')

const AddressSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    pincode:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
        enum:states
    },
    isDefaultAddress:{
        type:Boolean,
        required:true
    },
    houseInfo:{
        type:String,
        required:true
    },
    regionInfo:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
    }
})

module.exports = AddressSchema