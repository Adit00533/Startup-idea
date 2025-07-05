const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");
const { protect, managerOnly } = require("../middlewares/auth");

router.get("/", protect, attendanceController.getAllAttendance);
router.post("/checkin", protect, attendanceController.checkIn);
router.put("/checkout/:id", protect, attendanceController.checkOut);
router.delete("/:id", protect, managerOnly, attendanceController.deleteAttendance);

module.exports = router;
