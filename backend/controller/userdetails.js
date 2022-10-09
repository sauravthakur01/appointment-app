const User = require('../model/user');

exports.postAddUser = async(req,res,next)=>{
    try {
        let name = req.body.name 
        let email = req.body.email
        let phoneNumber = req.body.phonenumber 

        if(!phoneNumber){
            throw new Error('Please enter phone number');
        }

        const data = await User.create({
            name:name,
            email:email,
            phoneNumber:phoneNumber
        })

        res.status(201).json({userdetails: data});

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error})
    }
}

exports.getAllUsers = async(req,res,next)=>{
    try {
        const data = await User.findAll()
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
}

exports.deleteUser = async(req,res,next)=>{
    try {
        let userId = req.params.userId ;
        if(!userId){
           return res.status(400).json({error:'id is missing'})
        }
        await User.destroy({where:{id:userId}})
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).json('error occured')
    }
} 