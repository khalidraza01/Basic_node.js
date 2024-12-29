const mongoose = require("mongoose");

// Define the Person Schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["Chef", "Waiter", "Manager"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  username:{
    type : String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

// Create Person Model
const Person = mongoose.model("person", PersonSchema);
module.exports = Person;
