const express = require("express");
const router = express.Router();
const payrollController = require("../controllers/payrollController");
const { protect, managerOnly } = require("../middlewares/auth");

router.get("/", protect, payrollController.getAllPayrolls);
router.post("/", protect, managerOnly, payrollController.createPayroll);
router.put("/approve/:id", protect, managerOnly, payrollController.approvePayroll);
router.delete("/:id", protect, managerOnly, payrollController.deletePayroll);

module.exports = router;
