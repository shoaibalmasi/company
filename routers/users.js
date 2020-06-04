const express = require('express');
const router = express.Router();
const User = require('../models/user')



router.post('/addUser', (req, res) => {

    const NEW_USER = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalCode: req.body.nationalCode,
        gender: req.body.gender,
        isManager: req.body.isManager,
        birthdayDate: req.body.birthdayDate,
        companyInfo: req.body.companyInfo

    })

    NEW_USER.save(function (err, newUser) {
        if (err) return res.status(500).send("Somthing went wrong");
        return res.json({
            newUser,
            message: "User added successfully"
        })
    })
})






module.exports = router;