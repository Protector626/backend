import * as pool from '../models/bookModel.js';

export const fectchAllBooks = async () => {

    const books = await bookModel.fectchAllBooks();
    return books;
}