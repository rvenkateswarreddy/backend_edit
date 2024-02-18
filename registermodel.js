const mongoose = require("mongoose");

const registerDetailsSchema = new mongoose.Schema({
  usertype: { type: String, required: true },
  secretkey: { type: String, required: false },
  fullname: { type: String, required: false },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
  gender: { type: String, required: false },
  permanentAddress: { type: String, required: false },
  course: { type: String, required: false },
  department: { type: String, required: false },
  hostelblock: { type: String, required: false },
  roomno: { type: String, required: false },
  yearOfStudy: { type: String, required: false },
  admissionNumber: { type: String, required: false },
  hostelMess: [
    {
      days: { type: Number, required: true },
      leaveDays: { type: Number, required: true },
      nonVegCharge: { type: Number, required: true },
      vegCharge: { type: Number, required: true },
      totalFoodCharge: { type: Number, required: true },
      noonVegCharge: { type: Number, required: true },
      roomCharge: { type: Number, required: true },
      totalAmount: { type: Number, required: true },
    },
  ],
  complaints: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      status: { type: String, default: "Pending" },
    },
  ],
  suggestions: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      status: { type: String, default: "Pending" },
      date: { type: Date, default: Date.now },
    },
  ],
});

const registerDetails = mongoose.model(
  "registerDetails",
  registerDetailsSchema
);

module.exports = registerDetails;
