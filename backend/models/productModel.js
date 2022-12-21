const mongoose=require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true,
    },
    productCategory:{
        type:String,
        required:[true,'Product Category must be provided'],
    },
    views:[{
        viewedBy:{
            type:mongoose.Types.ObjectId,
            ref:'User',
            required:true,
            unique:true
        },
        RecentDateSearched:{
            default:Date.now,
            type:Date
        },
        noOfViews:{
            type:Number,
            default:1,
        }
    }],
    totalViews:{
        type:Number,
        default:0
    },
    // mostRecentView:{
        
    // },
    productPrice:{
        type:Number,
        default:0,
        required:true,
    },
    productImage:{
        type:Buffer,
        // required:true,
    },
    isPayOnDelivery:{
        type:Boolean,
        default:false,
        required:true
    },
    productPriceHistory:[
        {
            price:{type:Number,default:0,required:true},
            discount:{type:String,default:0,required:true},
            dateUpdated:{type:Date,default:Date.now}
        }
    ]
},{timestamps:true})






module.exports=mongoose.model('Product',ProductSchema)

//Most Recent View
//Do we need to store the changes in price