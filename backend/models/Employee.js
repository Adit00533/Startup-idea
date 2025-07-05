const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, unique: true },
  department: String,
  designation: String,
  doj: Date,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  contact: {
    phone: String,
    email: String
  },
  address: String
});

module.exports = mongoose.model("Employee", employeeSchema);
