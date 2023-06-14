var express = require("express");
var validateRegister=require("../middleWare/processRegister")

var router = express.Router();
var controller=require("../controllers")
router.get("/",controller.register)
router.post("/",validateRegister,controller.mensaje)
router.post("/reset",controller.reset)
router.get("/login",controller.login)
module.exports = router;
