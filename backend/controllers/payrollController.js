const Payroll = require("../models/Payroll");

exports.getAllPayrolls = async (req, res) => {
  try {
    const records = await Payroll.find().populate("employee").populate("approvedBy", "username role");
    res.json(records);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createPayroll = async (req, res) => {
  try {
    const { employee, month, baseSalary, bonuses, deductions } = req.body;
    const netSalary = baseSalary + bonuses - deductions;
    const payroll = new Payroll({
      employee,
      month,
      baseSalary,
      bonuses,
      deductions,
      netSalary,
      status: "Pending"
    });
    await payroll.save();
    res.json(payroll);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.approvePayroll = async (req, res) => {
  try {
    const record = await Payroll.findById(req.params.id);
    if (!record) return res.status(404).send("Not found");
    record.status = "Paid";
    record.approvedBy = req.user.id;
    await record.save();
    res.json(record);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deletePayroll = async (req, res) => {
  try {
    await Payroll.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
