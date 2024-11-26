import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: [true, 'An item must have a category']
    },
    condition: {
        type: String,
        required: [true, 'An item must have a condition'],
        enum: ['New', 'Good', 'Fair', 'Needs Repair']
    },
    images: {
        type: [String]
    }
});

const Item = mongoose.model('Item', ItemSchema); /* Creating the itme model from the schema */

export default Item;
