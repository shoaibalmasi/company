const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const usersRouter=require('./routers/users');
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

app.use('/users',usersRouter);
app.use('/companies', companiesRouter);


console.log(Date.now());




app.listen(8000);
console.log("listening on port 8000");



