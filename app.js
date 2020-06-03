const express=require('express');
const app=express();
const mongoose=require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/companies'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);






app.listen(8000);
console.log("listening on port 8000");



