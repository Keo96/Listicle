import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import villainData from '../data/villains.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(villainData)
})

router.get('/:villainId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/villain.html'))
})

export default router