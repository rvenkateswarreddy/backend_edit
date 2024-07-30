const mongoose = require("mongoose");

const registerDetailsSchema = new mongoose.Schema({
  usertype: { type: String, required: true },
  secretkey: { type: String, required: false },
  fullname: { type: String, required: false },
  email: { type: String, required: true },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Ensure phone number is exactly 10 digits
        return /^\d{10}$/.test(value);
      },
      message: "Phone number must be exactly 10 digits long",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  confirmpassword: {
    type: String,
    required: true,
    minlength: [6, "Confirm password must be at least 6 characters long"],
  },
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
      rollno: { type: Number, required: true },
      isPresent: { type: Boolean, required: true },
    },
  ],
  fees: [
    {
      feeAmount: { type: Number, required: true },
      paymentDate: { type: Date, default: Date.now },
    },
  ],
  exam: {
    fixedSubjects: {
      Web_technology: { type: Number, required: false },
      Software_Engineer: { type: Number, required: false },
      Computer_graphics: { type: Number, required: false },
    },
    selectableSubjects: {
      list1: {
        type: {
          type: String,
          enum: [
            "Artificial_intelligence",
            "System_programming",
            "Datamining_data_warehouse",
          ],
          required: false,
        },
        score: { type: Number, required: false },
      },
      list2: {
        type: {
          type: String,
          enum: ["Cryptography", "Big_data_analytics", "Mobile_development"],
          required: false,
        },
        score: { type: Number, required: false },
      },
      list3: {
        type: {
          type: String,
          enum: ["English", "Mathematics", "Political"],
          required: false,
        },
        score: { type: Number, required: false },
      },
    },
  },
});

const registerDetails = mongoose.model(
  "registerDetails",
  registerDetailsSchema
);

module.exports = registerDetails;
