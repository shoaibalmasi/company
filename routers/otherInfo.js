const express=require('express');
const router=express.Router();
const Company=require('../models/company');
const Employee = require('../models/employee');


//get google employees
router.get('/googleEmployees', (req,res)=>{
    Employee.find({}).populate('companyInfo').exec((err, employees)=>{
        if (err) return res.status(500).send("Something went wrong in get google's employees! \n" + err);
        employees=employees.filter(u => u.companyInfo.companyName == "google" );
        return res.json(employees)
    })
})

//get google manager
router.get('/googleManager', (req,res)=>{
    Employee.find({}).populate('companyInfo').exec((err, employees)=>{
        if (err) return res.status(500).send("Something went wrong in get google's manager! \n" + err);
        employees=employees.filter(u => u.companyInfo.companyName == "google" );
        let manager=employees.filter(u => u.isManager==true);
        return res.json(`${manager[0].firstName} ${manager[0].lastName} is google manager`)
    })
})

// get all managers
router.get('/allManagers', (req,res)=>{
    Employee.find({}).populate('companyInfo').exec((err, employees)=>{
        if (err) return res.status(500).send("Something went wrong in get managers! \n" + err);

        employees=employees.filter(u => u.isManager==true);
        return res.json(employees)
    })
})

//get all managers and companies
router.get('/allManagersAndCompanies', (req,res)=>{
    Employee.find({}).populate('companyInfo').exec((err, employees)=>{
        if (err) return res.status(500).send("Something went wrong in get managers! \n" + err);
        let list=[];
        employees=employees.filter(u => u.isManager==true);
        employees.forEach(element => {
            list.push(`${element.firstName} ${element.lastName} is ${element.companyInfo.companyName} manager`)  
        });

        return res.json(list)
    })
})

// get new companies
router.get('/newCompanies', (req,res)=>{

    Company.find({}, (err, companies) => {
        if (err) return res.status(500).send("Something went wrong in get new companies! \n" + err);
        let newComp=[];
        let today= new Date();
        companies.forEach(element => {
            let diffDays = parseInt((today - element.registrationDate) / (1000 * 60 * 60 * 24), 10);
            if(diffDays<365){
                newComp.push(element.companyName) 
            } 
        });    
        return res.json(newComp)
    })
})

//get young companies
router.get('/youngEmployees', (req,res)=>{

    Employee.find({}, (err, employees) => {
        if (err) return res.status(500).send("Something went wrong in get young employees! \n" + err);
        let youngEmployees=[];
        let today= new Date();
        employees.forEach(element => {
            let diffDays = parseInt((today - element.birthdayDate) / (1000 * 60 * 60 * 24), 10);
            if(diffDays<10950 && diffDays>7300){
                youngEmployees.push(element)
                  
            }  
        });    
        return res.json(youngEmployees)
    })
})


// update all cities and states
router.put('/updateAllCities', (req,res)=>{

    Company.updateMany({ cityName: 'tehran', provinceName:"tehran" }, (err, result)=>{
        if (err) return res.status(500).send("Something went wrong in update cities! \n" + err);
        Company.find({}, (err2, companies) => {
            if (err2) return res.status(500).send("Something went wrong in get all companies! \n" + err);
            return res.json(companies)
        })
    })
})



module.exports=router;