import * as bookService from '../services/bookService.js';

export const fetchAllBooks = async (request, response) => {
    const books = await bookService.fetchAllBooks();
    response.status(200).json(books);
}
// Create a new book in the database
export const createBook = async (req, res) =>{
    const {name, author} = req.body
    const book = {name, author};
// Call the bookService to insert the new book
    try{
        const bookId = await bookService.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}
// Update an existing book in the database
export const editBook = async (req, res) => {
    const {name, author} = req.body;
    const { id } = req.params;
    const book = {id: parseInt(id), name, author};

    try {
        const updatedBook = await bookService.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}


// Delete a book from the database
export const deleteBook = async (req, res) => {
    const { id } = req.params;


    try {
        const deletedBook = await bookService.deleteBook(id);
        res.status(200).json({
            success: true,
            message: deletedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
