const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const employeesRouter=require('./routers/employees');
const companiesRouter=require('./routers/companies');
const otherInfo=require('./routers/otherInfo');


// mongoose connect
mongoose.connect(
    'mongodb://localhost:27017/companies'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

//use body-parser
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); 
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); 

//use routers
app.use('/employees',employeesRouter);
app.use('/companies', companiesRouter);
app.use('/info',otherInfo);



app.listen(8000);
console.log("listening on port 8000");



