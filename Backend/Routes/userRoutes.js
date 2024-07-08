const express = require("express");
const userController = require("../Controllers/userControllers");
const router = express.Router();
router.post("/createUser", userController.createUser);
router.get("/getUsers", userController.getUsers);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);
module.exports = router;