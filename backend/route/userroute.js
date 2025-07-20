const express=require('express')
const router=express.Router()
const {registeruser, login, getusers}=require('../controller/usercontroller')    

router.post('/register',registeruser)
router.post('/login',login);
router.get('/getusers',getusers)

module.exports=router