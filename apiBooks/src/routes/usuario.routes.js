const{Router} = require("express");
const router = Router();
const UsuarioCtrl = require("../controller/usuario.controller")


router.post("/registro", UsuarioCtrl.registroUsuario);
router.post("/login",UsuarioCtrl.loginUsuario)


module.exports = router;