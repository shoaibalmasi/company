const express=require('express');
const router=express.Router();
const Company=require('../models/company')

router.post('/addCompany',(req, res)=>{
    const NEW_COMPANY= new Company({
        companyName:req.body.companyName,
        registrationNumber: req.body.registrationNumber,
        registrationDate:req.body.registrationDate,
        phoneNumber: req.body.phoneNumber,
        cityName: req.body.cityName,
        provinceName: req.body.provinceName,
    })

    NEW_COMPANY.save(function(err, newCompany) {        
        if (err) return res.status(500).send("Somthing went wrong");
        return res.json({
            newCompany,
            message: "User added successfully"
        })
    })
})









module.exports=router;