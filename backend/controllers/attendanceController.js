const Attendance = require("../models/Attendance");

// Get all attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().populate("employee");
    res.json(records);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Employee check-in
exports.checkIn = async (req, res) => {
  try {
    const attendance = new Attendance({
      employee: req.body.employee,
      checkIn: new Date(),
      status: "Present"
    });
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Employee check-out
exports.checkOut = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);
    if (!attendance) return res.status(404).send("Record not found");
    attendance.checkOut = new Date();
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Delete
exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
