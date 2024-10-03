import { pool } from '../config/database.js'

const getVillains = async (req, res) => {
    try {
        const query = 'SELECT * FROM villains ORDER BY id ASC'
        const results = await pool.query(query)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getVillainByName = async (req, res) => {
    try {
        const { name } = req.params
        const query = 'SELECT * FROM villains WHERE LOWER(name) LIKE $1 ORDER BY id ASC';
        const params = [`%${name.toLowerCase()}%`]
        const results = await pool.query(query, params)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getVillainById = async (req, res) => {
    try {
        const { villainId } = req.params;
        const query = 'SELECT * FROM villains WHERE id = $1';
        const params = [villainId];
        const results = await pool.query(query, params);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getVillains,
    getVillainByName,
    getVillainById
  }