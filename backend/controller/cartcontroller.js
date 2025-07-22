const cartmodel=require('../model/cartmodel')
const productmodel=require('../model/productmodel') 
const usermodel=require('../model/usermodel')

const addtocart=async(req,res)=>{
    try {
        let userid=req.params.userid;
        let productid=req.params.productid;
        let quantity=req.params.quantity || 1;
        if(!userid ||!productid){
            return res.status(400).json({ error: 'userid,productid are required' })
        }
        let user=await usermodel.findById(userid);
        if(!user){
            return res.status(400).json({ error: 'user not found' })
        }

        let product=await productmodel.findById(productid);
        if(!product){
            return res.status(400).json({ error: 'product not found' })
        }
        let newcart=new cartmodel({userid,productid,quantity});
        await newcart.save();
        return res.status(200).json({ message: "product added to cart successfully", cart: newcart })
    } catch (error) {
        return res.status(500).json({ error: 'internal server error' })
    }
}

const getcartsofuser=async(req,res)=>{
    try {
        let userid=req.params.id;
        if(!userid){
            return res.status(400).json({ error: 'userid is required' })
        }
        let user=await usermodel.findById(userid);
        if(!user){
            return res.status(400).json({ error: 'user not found' })
        }
        let cart=await cartmodel.find({userid});
        if(!cart){
            return res.status(400).json({ error: 'cart not found' })
        }
        return res.status(200).json({ message: "cart fetched successfully", cart: cart })
        
    } catch (error) {
        return res.status(500).json({ error: 'internal server error' })
    }
}
module.exports={addtocart,getcartsofuser}