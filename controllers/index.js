const { validationResult } = require("express-validator");
module.exports = {
  register: (Req, res) => {
    const user = Req.session.user;
    return res.render("home", { user });
  },
  login: (Req, res) => {
    const user = Req.session.user;
    return res.render("login", { user });
  },
  mensaje: (Req, res) => {
    let errores = validationResult(Req);
    if (errores.isEmpty()) {
      Req.session.user = {
        ...Req.body, //pido todos los datos del user
      };
      if (Req.body.recordame) {
        res.cookie("userTp", Req.session.user, {
          httpOnly: true,
          expires: new Date(Date.now() + 60000),
        }); //si recordame esta en true, crea una cookie con el nombre usertp que guarda el user, y expira en una hora despues de crearlo
      }
      return res.redirect("/");
    } else {
      res.render("home", {
        mensajeDeError: errores.mapped(), //esto crea un objeto de errores
        old: Req.body,
      });
      //con old, dejamos los datos que si son correctos
    }
  },
  reset: (Req, res) => {
    Req.session.destroy();
    //destruye la session
    if (Req.cookies.userTp) {
      res.cookie("userTp", "", {
        expires: new Date(Date.now() - 10000),
      });//actualiza la cookie tp para que se muera ahora
    }
    res.redirect("/")
  },
};
