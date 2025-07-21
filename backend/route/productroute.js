const express=require('express')
const router=express.Router()
const {createproduct, getproducts,getproductbyid}=require('../controller/productcontroller')

router.post('/product/:userid',createproduct) 
router.get('/product',getproducts);
router.get('/product/:id',getproductbyid);
module.exports=router