const router = require("express").Router();
const adminController = require("../controllers/adminControllers");

router.get("/dashboard", adminController.viewDashboard);

module.exports = router;
