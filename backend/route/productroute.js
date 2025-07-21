const express=require('express')
const router=express.Router()
const {createproduct}=require('../controller/productcontroller')

router.post('/createproduct/:userid',createproduct) 

module.exports=router