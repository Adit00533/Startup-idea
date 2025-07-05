require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Example test route
app.get("/", (req, res) => res.send("WorkZen API running"));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const employeeRoutes = require("./routes/employees");
app.use("/api/employees", employeeRoutes);

const leaveRoutes = require("./routes/leaves");
app.use("/api/leaves", leaveRoutes);

const attendanceRoutes = require("./routes/attendance");
app.use("/api/attendance", attendanceRoutes);

const payrollRoutes = require("./routes/payroll");
app.use("/api/payroll", payrollRoutes);


// Add your routes (auth, employees etc) here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
