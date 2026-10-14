import * as studentController from '../controllers/studentController.js';
import express from 'express';  

// Define routes for student operations
const studentRoutes = express.Router();
studentRoutes.get('/all', studentController.fetchAllStudents); 
studentRoutes.post('/', studentController.createStudent);
studentRoutes.put('/:id', studentController.editStudent);
studentRoutes.delete('/:id', studentController.deleteStudent);
export default studentRoutes;