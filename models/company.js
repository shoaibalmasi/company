const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true
    },
    phoneNumber: String,
    cityName: String,
    provinceName:String,
});


module.exports = mongoose.model('Company', companySchema);

