const productmodel = require("../model/productmodel");
const usermodel = require("../model/usermodel");

const createproduct=async(req,res)=>{
    try {
        const userid=req.params.userid;
        const {productname,price,category,description,image,stock_available}=req.body;
        if(!userid || !productname || !price || !category || !description || !image || !stock_available){
            return res.status(400).json({ error: 'userid,productname,price,category,description,image,stock_available are required' })
        }
        let user=await usermodel.findById(userid);
        if(!user){
            return res.status(400).json({ error: 'user not found' })
        }

        if(user.isadmin!==true){
            return res.status(400).json({ error: 'user is not admin' })
        }
        let newproduct=new productmodel(req.body);
        await newproduct.save();
        return res.status(200).json({ message: "product created successfully", product: newproduct })
    }catch(error) {
       return res.status(500).json({ error: 'internal server error' }) 
    }
}

module.exports={createproduct}