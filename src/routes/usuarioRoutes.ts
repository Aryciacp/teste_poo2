import express from 'express';
import UsuarioController from '../controllers/usuarioController';

const router = express.Router();

router.post('/cadastrar', UsuarioController.cadastrarUsuario);

export default router;
