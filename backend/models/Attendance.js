const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  checkIn: { type: Date, required: true },
  checkOut: Date,
  status: { type: String, enum: ["Present", "Absent"], default: "Present" }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
