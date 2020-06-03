const express=require('express');
const app=express();
const mongoose=require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/Blog'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);






app.listen(3000);
console.log("listening on port 3000");



