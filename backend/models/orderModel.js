const mongoose = require('mongoose')
const AddressSchema = require('./address')

const OrderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required:true,
    },
    orderItems: [
			{
				qty: { type: Number, required: true, default: 0 },
				productId: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Product',
				},
			},
		],
    shippingAddress:AddressSchema,
    itemsPrice: {
			type: Number,
			required: true,
			default: 0.0,
	},
    isDelivered: {
			type: Boolean,
			default: false,
    },
    deliveredAt: {
			type: Date,
	},
},{ timestamps:true })