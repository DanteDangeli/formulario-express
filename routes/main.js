let express = require('express');
let router = express.Router();

let mainController = require('../controllers/mainController');
router.get('/', mainController.home);
router.get('/listar-usuarios', mainController.listarUsuarios);
router.delete('/eliminarUsuario', mainController.eliminarUsuario);


module.exports=router;