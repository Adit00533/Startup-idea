const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const { protect, managerOnly } = require("../middlewares/auth");

router.get("/", protect, employeeController.getAllEmployees);
router.post("/", protect, managerOnly, employeeController.createEmployee);
router.put("/:id", protect, managerOnly, employeeController.updateEmployee);
router.delete("/:id", protect, managerOnly, employeeController.deleteEmployee);

module.exports = router;
