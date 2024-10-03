import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import VillainsController from '../controllers/villains.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', VillainsController.getVillains)

router.get('/search', VillainsController.getVillainByName)

router.get('/:villainId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/villain.html'))
})

export default router