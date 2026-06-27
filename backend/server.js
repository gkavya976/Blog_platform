require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.error("❌ MongoDB Error:", err);
});
 
app.get("/", (req, res) => {
  res.send("Blog API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});