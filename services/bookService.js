import * as bookModel from '../models/bookModel.js';

// Fetch all books from the database
export const fetchAllBooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
}

// Create a new book in the database
export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}

// Update an existing book in the database
export const updateBook = async (book) => {
    const updateBook = await bookModel.update(book);
    return updateBook;
}

// Remove an existing book in the database
export const deleteBook = async (id) => {
    const deleteBook = await bookModel.remove(id);
    return deleteBook;
}

