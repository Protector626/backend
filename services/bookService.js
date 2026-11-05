import * as bookModel from '../models/bookModel.js';
import ValidationError from '../utils/ValidationError.js';

// Fetch all books from the database
export const fetchAllBooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
}

//Identify if a book already exists in the database by name and author
const doesBookExist = async (book) => {
    let existing;
    if (Object.hasOwn(book, 'id')) {
        existing = await bookModel.findBookById(book.id);
    }else{
        existing = await bookModel.findBookByNameAndAuthor(book);
    }

    if (existing.length > 0) {
        return true;
    }
    return false;
}


// Create a new book in the database and check if the book already exists and if the name and author is provided 
export const createBook = async (book) => {
    if (!book.name || !book.author) {
        throw new ValidationError(404, "Name and author is required!");
    }

    const existing = await doesBookExist(book);

    if (existing){
        throw new ValidationError(409, "Book already exists!");
    }
    const bookId = await bookModel.insert(book);
    return bookId;
}

// Update an existing book in the database and check if the book already exists and if the name and author is provided
export const updateBook = async (book) => {

    if (!book.name || !book.author) {
        throw new ValidationError(404, "Name and author is required!");
    }

    const existing = await doesBookExist(book);

    if (!existing){
        throw new ValidationError(404, "Book does not exist!");
    }
    
    const updateBook = await bookModel.update(book);
    return updateBook;
}

// Remove an existing book in the database
export const deleteBook = async (id) => {
    const book = {id}
    const existing = await doesBookExist(book);
    if (!existing) {
        throw new ValidationError(404, "Book does not exist!");
    }
    
    const deleteBook = await bookModel.remove(id);
    return deleteBook;
}

