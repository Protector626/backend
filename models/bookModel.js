import pool from '../config/db.js';
//read
export const fetchAllBooks = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

//read to find duplicate book by name and author and to find book by id and check if the book already exists in the database and if the name and author is provided
export const findBookByNameAndAuthor = async (book) => {
    const [rows] = await pool.query("SELECT * FROM book WHERE name = ? AND author = ?", 
        [book.name, book.author]
    );
    return rows;
};

export const findBookById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM book WHERE id = ?", 
        [id]
    );
    return rows;
};

//insert
export const insert = async (book) =>{
    const [result] = await pool.query(
        "INSERT INTO book(name, author) VALUES (?,?)",
        [book.name, book.author]
    );

    return result.insertId;
};

//update
export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE book SET name = ?, author = ? WHERE id = ? ",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
};

//remove
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM book WHERE id = ? ", 
        [id]
    );
    return result.affectedRows;

}