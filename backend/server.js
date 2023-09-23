const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleWare/errorMiddlware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3200;

//connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//for calls to main route
app.get("/", (req, res) => {
  res.send("welcome to bluh bluh");
});

//routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
