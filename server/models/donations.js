const donationAdSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the donor
    title: { type: String, required: true }, // Item title
    description: { type: String }, 
    category: { type: String, required: true }, // 'Electronics', 'Furniture'
    status: { 
        type: String, 
        enum: ['no_contact', 'requested', 'donated'], 
        default: 'no_contact' 
    }, // Donation status
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DonationAd', donationAdSchema);
