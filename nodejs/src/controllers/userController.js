
const User = require('../models/user')


module.exports ={

    async index(req,res){
        try {
            const users = await User.find();
            
            return res.json(users)
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
        
    },

    async store(req,res){
        const users = await User.create(req.body);
        console.log(users)

        return res.json(users)
    }
   
}

