const express=require('express')
const router=express.Router()
const {registeruser, login, getusers, getuserbyemail, updateuser}=require('../controller/usercontroller')    

router.post('/register',registeruser)
router.post('/login',login);
router.get('/getusers',getusers);
router.get('/getuserbyemail/:email',getuserbyemail);
router.put('/updateuser/:id',updateuser);

module.exports=router