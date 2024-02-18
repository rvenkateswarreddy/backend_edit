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
  attendance: [
    {
      date: { type: Date, required: true },
      isPresent: { type: Boolean, required: true },
    },
  ],
  fees: [
    {
      feeAmount: { type: Number, required: true },
      paymentDate: { type: Date, default: Date.now },
    },
  ],
  exam: [
    {
      Web_technology: {
        type: Number,
        required: true,
      },
      Software_Engineer: {
        type: Number,
        required: true,
      },
      Computer_graphics: {
        type: Number,
        required: true,
      },
      Big_data_analytics: {
        type: Number,
        required: true,
      },
      Artificial_intelligence: {
        type: Number,
        required: true,
      },
    },
  ],
});

const registerDetails = mongoose.model(
  "registerDetails",
  registerDetailsSchema
);

module.exports = registerDetails;
