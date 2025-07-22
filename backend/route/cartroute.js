const express=require('express')
const router=express.Router()
const {addtocart,getcartsofuser}=require('../controller/cartcontroller')

router.post('/addtocart/:userid/:productid/:quantity',addtocart)
router.get('/getcartsofuser/:id',getcartsofuser)
module.exports=router