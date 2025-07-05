const Leave = require("../models/Leave");

// get all leaves
exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employee").populate("reviewedBy", "username role");
    res.json(leaves);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// create leave
exports.createLeave = async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.json(leave);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// approve/reject leave
exports.updateLeaveStatus = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) return res.status(404).send("Leave not found");
    leave.status = req.body.status;
    leave.reviewedBy = req.user.id;
    await leave.save();
    res.json(leave);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// delete leave
exports.deleteLeave = async (req, res) => {
  try {
    await Leave.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
