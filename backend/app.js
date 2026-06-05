const express = require("express");

const expenseRoutes = require("./src/routes/expenseRoutes");

const app = express();

app.use(express.json());

app.use("/api/expenses", expenseRoutes);

module.exports = app;