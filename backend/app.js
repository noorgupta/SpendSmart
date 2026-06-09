const express = require("express");

const expenseRoutes = require("./src/routes/expenseRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);


module.exports = app;