const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const { protect, managerOnly } = require("../middlewares/auth");

// employees or managers can view
router.get("/", protect, leaveController.getAllLeaves);
// employees can create
router.post("/", protect, leaveController.createLeave);
// only manager can update leave status
router.put("/:id", protect, managerOnly, leaveController.updateLeaveStatus);
// manager can delete
router.delete("/:id", protect, managerOnly, leaveController.deleteLeave);

module.exports = router;
