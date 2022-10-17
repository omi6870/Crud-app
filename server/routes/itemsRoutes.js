const express = require("express");
const { getItems, createItem, getItemById, UpdateItem, DeleteItem } = require("../controllers/itemController");
const protect = require("../middelwares/authMiddelware");



const router = express.Router()


router.route('/').get( protect,getItems)
router.route('/create').post(protect,createItem); 
router.route('/:id').get(getItemById)
.put(protect,UpdateItem)
.delete(protect,DeleteItem)


module.exports=router;