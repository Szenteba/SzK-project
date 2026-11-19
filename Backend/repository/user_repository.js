import mysql from 'mysql2/promise';
import 'dotenv/config';

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


export const userRepository = {
    getTicket: async (res) => {
        try {
            const [rows] = await db.query('SELECT * FROM Ticket');
            res.json(rows);
        } catch (error) {
            console.error('Error fetching ticket:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}