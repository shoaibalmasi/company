const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nationalCode:{
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    isManager:{
        type: Boolean,
        required: true
    },
    birthdayDate:{
        type: Date,
        required:true
    },
    companyInfo:{
        type: Schema.Types.ObjectId,
        ref: "company"
    }
});


module.exports = mongoose.model('User', UserSchema);