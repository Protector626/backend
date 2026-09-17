import pool from '../config/db';

export const fectchAllBooks = async () => {

    const [rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
}