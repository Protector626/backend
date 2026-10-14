import * as studentModel from '../models/studentModel.js';

// Fetch all students from the database
export const fetchAllStudents = async () => {
    const student = await studentModel.fetchAllStudents();
    return student;
}

// Create a new student in the database
export const insert = async (student) => {
    const studentId = await studentModel.insert(student);
    return studentId;
}

// Update an existing student in the database
export const updateStudent = async (student) => {
    const updateStudent = await studentModel.update(student);
    return updateStudent;
}

export const deleteStudent = async (id) => {
    const deleteStudent = await studentModel.remove(id);
    return deleteStudent;
}