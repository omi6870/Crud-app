const mongoose = require("mongoose");


const itemSchema =mongoose.Schema(
    {
        image:{
            type:String,
            required:true
        },
        itemName:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
    },
    {
        timestamps:true,
    }
);

const Item = mongoose.model("Item", itemSchema);
module.exports= Item;