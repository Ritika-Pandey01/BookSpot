const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suggestionSchema = new mongoose.Schema({
    suggId: {
        type: Number,
        required: true,
    },
    bookId: {
        type:Schema.Types.ObjectId,
        required: true,
        ref:'Book'
    },
    userId: {
        type:Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
    
        
});


module.exports = mongoose.model('Suggestion', suggestionSchema);
