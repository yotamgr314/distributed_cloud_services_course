const wishlistAdSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the requester
    items: [
        {
            name: { type: String, required: true }, // Item name
            description: { type: String }, // Optional description
            category: { type: String, required: true }, // Matching category
            status: { 
                type: String, 
                enum: ['no_contact', 'recived_offer', 'received'], 
                default: 'no_contact' 
            }, // Wishlist status
        }
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WishlistAd', wishlistAdSchema);
