const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controller/userController");
const validateErrorHandler = require("../middleware/validateErrorHandler");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateErrorHandler, currentUser);

module.exports = router;
