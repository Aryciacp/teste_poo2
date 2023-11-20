import express from 'express';
import LeilaoController from '../controllers/leilaoController';

const router = express.Router();

router.post('/criar', LeilaoController.criarLeilao);
router.post('/fechar/:id', LeilaoController.fecharLeilao);

export default router;
