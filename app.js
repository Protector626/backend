import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

let corsOptions = {
    origin: "http://localhost:5173"
};


//Create Express App    
const app = express();

app.use(express.json()); //Middleware to parse JSON request body sadas
app.use(cors(corsOptions)); //Enable CORS for all routes
// Define routes for book and student operations
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

// Start the server and listen on port 3000
try {
    const port = 3000; //Define port Variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}







