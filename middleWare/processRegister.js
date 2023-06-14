const { check } = require("express-validator");
const validateRegister = [
  check("nombre")
    .notEmpty()
    .withMessage("Debes completar el nombre")
    .bail()
    .isLength({ min: 4 })
    .withMessage("El nombre debe tener al menos 4 caracteres"),
  check("color")
    .notEmpty()
    .withMessage("Debes elegir un color"),
  check("email")
    .notEmpty()
    .withMessage("Debes completar el email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  check("edad")
    .notEmpty()
    .withMessage("Debes completar tu edad")
    .bail()
    .isNumeric()
    .withMessage("debes agregar un numero")
];
module.exports=validateRegister;
