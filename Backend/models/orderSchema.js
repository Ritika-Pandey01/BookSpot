const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true,
    },
    bookId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Book'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
    
        
});


module.exports = mongoose.model('Order', orderSchema);
