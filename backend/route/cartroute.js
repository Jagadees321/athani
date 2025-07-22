const express=require('express')
const router=express.Router()
const {addtocart}=require('../controller/cartcontroller')

router.post('/addtocart/:userid/:productid/:quantity',addtocart)

module.exports=router