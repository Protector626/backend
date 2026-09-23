import express from "express";
import bookRoutes from "./routes/bookRoutes.js";


//Create Express App    
const app = express();


/* Rouytes Implementation */
app.use('/books', bookRoutes);

try {
    const port = 3000; //Define port Variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}







