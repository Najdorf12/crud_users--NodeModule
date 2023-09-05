const catchError = require('../utils/catchError');
const User = require('../models/User');


const getAll = catchError(async(req, res) => { 
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError (async (req, res) =>{
    const {first_name,last_name, email,password, birthday} = req.body;
    const user = await User.create({
        first_name, 
        last_name,
        email,
        password,
        birthday
    });
   
    return res.status(201).json(user);
});

const remove = catchError(async (req,res) =>{
    console.log("estamos aca erro");
    const { id } = req.params;
    await User.destroy({ where: { id } });
   
    return res.sendStatus(204);
})

const update = catchError(async (req,res) =>{
    const { id } = req.params;
    const { first_name,last_name,email,password,birthday} = req.body;
    const product = await User.update({
        first_name, 
        last_name,
        email,
        password,
        birthday
    },{ where: { id } })
    
    return res.json(product);
})

module.exports = {
    getAll,
    create,
    remove,
    update
}