const bcrypt = require('bcryptjs');

const express = require('express');

const router = express.Router();

const User = require('../models/user')

// POST Call ==== http://localhost:5000/api/user/adduser

router.post('/adduser', async(req, res) =>{
    try {
        const newUser = new User({
            user_name:  bcrypt.hashSync(req.body.user_name),
            user_email:  bcrypt.hashSync(req.body.user_email),
            user_dob:  req.body.user_dob,
            user_gender:  req.body.user_gender,
        })
        const saveUser = await newUser.save();
        res.json(saveUser);
    } catch (error) {
        res.status(500).json({'error': error})
    }
})

// GET CALL - http://localhost:5000/api/user/viewuser

router.get('/viewuser', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({'Error': error})
    }
})

// GET CALL Single User - http://localhost:5000/api/user/singleuser/userid

router.get('/singleuser/:userid', async(req, res) => {
    const uid = req.params.userid;
    try {
        const users = await User.findById(uid);
        res.json(users);
    } catch (error) {
        res.status(500).json({'Error' : error})
    }
})

// Update CALL Single User - http://localhost:5000/api/user/updateuser/userid
router.put('/updateuser/:userid', async(req, res)=>{
    const uid = req.params.userid;
    try {
        const users = await User.findByIdAndUpdate(
            uid,
            req.body, // Change whole Data
            //Change only Specific data {$set: req.body},
            {$set: req.body},
            {new: true}
        )
        res.json(users);
    } catch (error) {
        res.status(500).json({'Error': error})
    }
})

// Delete CALL Single User - http://localhost:5000/api/user/deleteuser/userid
router.delete('/deleteuser/:userid', async(req,res) => {
    const uid = req.params.userid;
    try {
        const users = await User.findByIdAndDelete(uid);
        res.status(200).json({'mesg': 'User has deleted successfully', 'sts': '1'})
    } catch (error) {
        res.status(500).json({'Error': error});
    }
})

module.exports = router;