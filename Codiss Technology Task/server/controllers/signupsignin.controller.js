import User from "../models/signupsignin.model.js";
import hash from '../middleware/hashpassword.js';
import token from '../middleware/token.js';

const register = async(req,res) =>{
    try {
            const existUser=await User.findOne({email: req.body.email})
            if(!existUser)
            {
                let hashPassword=await hash.hashGenerater(req.body.password)
                let user=new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:hashPassword,
                    picture:req.body.picture
                })
                const result=await user.save()
                console.log(result);
                const token1 =token.tokenGenrater(result)
                return res.send({ token1, status : 1 })
            } 
            else{    
                return res.status(400).send("User Exist")
    }
        } 
        catch(error)
        {
            res.status(500).send({register : error.message})
        }
}


const login=async(req,res) => {
    try {
    const email=req.body.email
    const password=req.body.password

    const user=await User.findOne({email:email})
    if(user){
        const hashValue=await hash.hashValidater(password,user.password)
        if(!hashValue){
            return res
            .send({ status : 0 })
        }
        else{
            const token1 = token.tokenGenrater(user)
            res.send({token1 ,status : 1})
            }
            }
    else{
        return res.send("login d")
    }
        } 
        catch(error)
        {
        res.status(500).send({register : error.message})
        }
}

export default {register,login}