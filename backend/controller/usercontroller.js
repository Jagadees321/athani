const usermodel = require('../model/usermodel')
const bcrypt = require('bcryptjs')
const registeruser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'username,email,password are required' })
        }
        let user=await usermodel.findOne({email});
        if(user){
            return res.status(400).json({ error: 'user already exists' })
        }
        req.body.password=await bcrypt.hash(password,10);
        let newuser=new usermodel(req.body);
        await newuser.save();
        res.status(200).json({ message: "user registered successfully", user: newuser })
    }
    catch (error) {
        res.status(500).json({ error: 'internal server error' })
    }
}

const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({ error: 'email,password are required' })
        }
       let user=await usermodel.findOne({email});
       if(!user){
        return res.status(400).json({ error: 'user not found' });
       }
       const ismatch=await bcrypt.compare(password,user.password);
       if(!ismatch){
        return res.status(400).json({ error: 'password not match' });
       }
       res.status(200).json({ message: "user logged in successfully", user: user })
       
    } catch (error) {
        res.status(500).json({ error: 'internal server error' })
    }
}

module.exports = { registeruser,login }