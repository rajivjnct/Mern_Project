const mongoose = require('mongoose');

// Now Creating Schema
const userSchema = new mongoose.Schema({
    user_name:{
        type: String,
        required: true,
    },
    user_email:{
        type: String,
        rrquired: true,
    },
    user_dob:{
        type: Date,
        required: true
    },
    user_gender:{
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    }
})

module.exports = mongoose.model('mbs_user', userSchema);