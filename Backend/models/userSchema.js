const  mongoose = require('mongoose');
const { use } = require('../controllers/books', '../controllers/user');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "",
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength:3,
        maxlength:1024,
        required: true
    },
    mobile:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:false
    },
    isadmin:{
        type:Boolean,
        default:false
    }
});


module.exports = mongoose.model('User', usersSchema);
