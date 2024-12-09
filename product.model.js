const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter the product name"]
        },
        quanitity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
           

        },
        image:{
            type:String,
            required:false
        },
    },
    {
        timestamps:true,
    }
);

const Product=mongoose.model("product",ProductSchema);
module.exports=Product;