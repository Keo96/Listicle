import { pool } from './database.js'
import './dotenv.js'
import villainData from '../data/villains.js'

const createVillainsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS villains;

        CREATE TABLE IF NOT EXISTS villains (
            "id" SERIAL PRIMARY KEY,
            "name" VARCHAR(255) NOT NULL,
            "location" VARCHAR(255) NOT NULL,
            "type" VARCHAR(255) NOT NULL,
            "description" TEXT NOT NULL,
            "image" VARCHAR(255) NOT NULL,
            "rewards" VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 villains table created successfully')
    } catch (err) {
        console.error('⚠️ error creating villains table', err)
    }
}

const seedVillainsTable = async () => {
    await createVillainsTable()

    villainData.forEach((villain) => {
        const insertQuery = {
            text: 'INSERT INTO villains ("name", "location", "type", "description", "image", "rewards") VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            villain.name,
            villain.location,
            villain.type,
            villain.description,
            villain.image,
            villain.rewards
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting villain', err)
                return
            }

            console.log(`✅ ${villain.name} added successfully`)
        })
    })
}

seedVillainsTable()
