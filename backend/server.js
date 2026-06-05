require("dotenv").config();

const app = require("./app");

const connectDB = require('./src/config/db');

connectDB();

app.get('/', (req,res) => {
    res.send("Welcome to SpendSmart API")
});

app.get("/api/health", (req,res) => {
    res.json({
        status: "success",
        message: "SpendSmart API is running"
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});