const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/contact", require("./Routes/contactRoutes"));
app.use("/api/resource", require("./Routes/resourceRoutes"));
app.use("/api/jobapplication", require("./Routes/jobApplicationRoutes"));
app.use("/api/inquiries", require("./Routes/inquiryRoutes"));
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
