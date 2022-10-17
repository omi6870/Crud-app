const Item =require("../model/itemModel");
const asyncHandler = require("express-async-handler");


const getItems = asyncHandler(async(req,res)=>{
    const items =await Item.find({user:req.user._id});
    res.json(items);
})

// Create Item

const createItem = asyncHandler(async(req,res)=>{
    const {image , itemName , price} =req.body;
    if(!image || !itemName || !price){
        res.status(400)
        throw new Error("plese fill all feilds")
    }
    else{
    const item = new Item({user:req.user._id,image,itemName,price});
    const createItem =await item.save();
    res.status(201).json(createItem);
    }
})

// Get Item BY Id

const getItemById = asyncHandler(async(req,res)=>{
    const item =await Item.findById(req.params.id);

    if(item){
        res.json(item)
    }else{
        res.status(404).json({message:"item not found"});
    }
   })


//    Update Item

   const UpdateItem = asyncHandler(async(req,res)=>{
    const {image,itemName,price}=req.body;
    const item = await Item.findById(req.params.id)
   

    if(item.user.toString() !== req.user._id.toString()){
        res.status(401);
        throw new Error("you can't perform this action")
    }
    if(item){
        item.image=image;
        item.itemName=itemName;
        item.price=price;

        const updatetedItem=await item.save();
        res.json(updatetedItem)
    }else{
        res.status(404)
        throw new Error("note not found")
    }
   })

//    Delete Items

const DeleteItem = asyncHandler(async(req,res)=>{
    const item = await Item.findById(req.params.id)

    if(item.user.toString() !== req.user._id.toString()){
        res.status(401);
        throw new Error("you can't perform this action")
    }
    if(item){
        await item.remove();
        res.json({message:"item remove"})
    }else{
        res.status(404)
        throw new Error("note not found")
    }
})


module.exports= {getItems,createItem,getItemById,UpdateItem,DeleteItem};