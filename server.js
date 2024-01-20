const express = require("express");
const database = require("./database/database");
const dotenv = require("dotenv").config();
const contactRouter = require("./route/contactRoute");
const userRouter = require("./route/userRoute");
const errorHandler = require("./middleware/errorHandler");
//const validateErrorHandler = require("./middleware/validateErrorHandler");
database();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);
//app.use(validateErrorHandler);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
