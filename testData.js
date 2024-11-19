const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myFirstDB')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Define a schema
const sampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  profession: String
});

// Create a model
const Sample = mongoose.model('Sample', sampleSchema);

// Create a new document
const newEntry = new Sample({
  name: "John Doe",
  age: 30,
  profession: "Engineer"
});

// Save the document to the database
newEntry.save()
  .then(() => {
    console.log("Data saved!");
    mongoose.connection.close(); // Close the connection once done
  })
  .catch((err) => {
    console.error("Failed to save data", err);
  });
