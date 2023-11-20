import express from 'express';
import LanceController from '../controllers/lanceController';

const router = express.Router();

router.post('/criar', LanceController.criarLance);

export default router;