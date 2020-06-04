const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const employeesRouter=require('./routers/employees');
const companiesRouter=require('./routers/companies');



mongoose.connect(
    'mongodb://localhost:27017/companies'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({
    'extended': 'true'
})); 
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); 

app.use('/employees',employeesRouter);
app.use('/companies', companiesRouter);



app.listen(8000);
console.log("listening on port 8000");



