const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    products:[{
      productId:{
        type:mongoose.Types.ObjectId,
        ref:'Product'
      },
      qty:{
        type:Number,
        required:function(){
          if (this.type==='Save For Later'){
            return false
          }return true
        },
        default:function(){
          if(this.type==='Save for Later'){
            return 0
          }
          return 1
        },
      },
      type:{
        type:String,
        required:true,
        default:'cart',
        enum:['Cart','WishList']
      } 
    },
]
})