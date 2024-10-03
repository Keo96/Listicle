import express from 'express';
import VillainsController from '../controllers/villains.js';

const router = express.Router();

router.get('/', VillainsController.getVillains);
router.get('/search/:name', VillainsController.getVillainByName);
router.get('/:villainId', VillainsController.getVillainById);

export default router;