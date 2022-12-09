const{Router} = require("express");
const router = Router();
const LibrosCtrl = require("../controller/libros.controller")


router.get("/libros",LibrosCtrl.getLibros);
router.get("/libros2",LibrosCtrl.getLibros2);
router.post("/libros",LibrosCtrl.postLibros);
router.delete("/libros",LibrosCtrl.delLibros);
router.put("/libros",LibrosCtrl.putLibros);

module.exports = router;