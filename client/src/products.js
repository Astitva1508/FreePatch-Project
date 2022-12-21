import { v4 as uuidv4 } from 'uuid';
// var randomUrl = require('random-url');
 
const  products = [
    {
        product_id:uuidv4(),
        product_name:'Product 1',
        product_link:'asfivninvif',
        product_category:'Sports',
        product_image:{
            src:'',
            alt:'Image cannot be accessed right now'
        },
        product_platfrom:'Amazon',
        product_details:{
            isAvaliable:'Yes',
            quantityAvaliable:''
        },
        isOrderedBefore:'false',
        isAddedToCart:'false',
        isSavedForLater:'false',
        quantityAddedToCart:'1',
        quantityOrdered:'1'
    },
    {
        product_id:uuidv4(),
        product_name:'Product 2',
        product_link:'asfivninvif',
        product_category:'Cricket',
        product_image:{
            src:'',
            alt:'Image cannot be accessed right now'
        },
        product_platfrom:'Amazon',
        product_details:{
            isAvaliable:'Yes',
            quantityAvaliable:'5'
        },
        isOrderedBefore:'false',
        isAddedToCart:'false',
        isSavedForLater:'false',
        quantityAddedToCart:'1',
        quantiyOrdered:'1'
    },
    {
        product_id:uuidv4(),
        product_name:'Product 3',
        product_link:'asfivninvif',
        product_category:'Shoes',
        product_image:{
            src:'',
            alt:'Image cannot be accessed right now'
        },
        product_platfrom:'Flipkart',
        product_details:{
            isAvaliable:'Yes',
            quantityAvaliable:''
        },
        isOrderedBefore:'false',
        isAddedToCart:'false',
        isSavedForLater:'false',
        quantityAddedToCart:'1',
        quantiyOrdered:'1'
    }
]

export default products;

