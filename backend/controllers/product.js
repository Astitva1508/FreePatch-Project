const Product = require('../models/productModel')
const axios = require('axios')
const cheerio = require('cheerio')
const {StatusCodes} = require('http-status-codes')
const { default: mongoose } = require('mongoose')


const getAllProducts=async(req,res)=>{
    const {user:{_id:userID}}=req
    const product = await Product.find({searchedBy:userID}).select('-paassword')
    res.status(StatusCodes.OK).json({success:true,data:product})
}

const getSingleProduct=async(req,res)=>{
    
}

const createProduct=async(req,res)=>{
    const {body:{isPayOnDelivery,productCategory,productName,priceHistory}} = req;
    const product = new Product({isPayOnDelivery,productName,productCategory})
    product.productPriceHistory.push({...priceHistory})
    await product.save()
    res.json({product})
}

const deleteProduct=async(req,res)=>{

}

const updateProduct=async(req,res)=>{
    const {user:{_id:userId},params:{id:productId}} = req;
    const product =await Product.findOne({_id:productId}).where('views').in({_id:userId})

    console.log(product instanceof mongoose.Document)
    console.log(product instanceof mongoose.Query)

    // if (!product){
    //     const product =await Product.findOneAndUpdate(
    //         {_id:productId},
    //         {$push:{views:{viewedBy:userId}},$inc:{totalViews:1}},
    //         {new:true,runValidators:true}  
    //     )
    //     return res.json(product)
    // }
    res.json({product})
    // res.json(product)
}

module.exports={getAllProducts,getSingleProduct,createProduct,deleteProduct,updateProduct}

// const {product_link} = req.body;
//     const {data:html} = await axios.get(product_link)
//     const $=cheerio.load(html)
//     let title=''
//     $('.yhB1nd',html).each(function(){
//         title = $(this).text()
//     })
//     res.status(200).json({Heading:title})