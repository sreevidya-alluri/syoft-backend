const express = require("express");
const app =express();
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes  = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const port=process.env.PORT || 5000;
app.use(express.json());

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);

app.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})