const express=require('express');
const { createorder } = require('../controller/orderscontroller');

const router=express.Router();

//endpoints
router.post('/order',createorder)
module.exports=router