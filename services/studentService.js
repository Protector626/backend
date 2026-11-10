import * as studentModel from '../models/studentModel.js';
import ValidationError from '../utils/ValidationError.js';

// Fetch all students from the database
export const fetchAllStudents = async () => {
    const student = await studentModel.fetchAllStudents();
    return student;
}

const doesStudentExist = async (student) => {
    let existing;
    if (Object.hasOwn(student, 'id')) {
        existing = await studentModel.findStudentById(student.id);
    }else{
        existing = await studentModel.findStudentByNameAndSrcodeAndProgram(student);
    }

    if (existing.length > 0) {
        return true;
    }
    return false;
}


// Create a new student in the database
export const insert = async (student) => {
    if (!student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, "Name, SR Code, and Program are required!");
    }

    const srCodePattern = /^\d{2}-\d{5}$/;// Regular expression pattern for SR Code format (e.g., 20-12345)


    if (!srCodePattern.test(student.srcode)) {
        throw new ValidationError(400, "Invalid SR Code format!");
    }

    const existing = await doesStudentExist(student);

    if (existing){
        throw new ValidationError(409, "Student already exists!");
    }
    const studentId = await studentModel.insert(student);
    return studentId;
}

// Update an existing student in the database
export const updateStudent = async (student) => {
    if (!student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, "Name, SR Code, and Program are required!");
    }


    const srCodePattern = /^\d{2}-\d{5}$/;// Regular expression pattern for SR Code format (e.g., 20-12345)


    if (!srCodePattern.test(student.srcode)) {
        throw new ValidationError(400, "Invalid SR Code format!");
    }

    const existing = await doesStudentExist(student);

    if (!existing){
        throw new ValidationError(404, "Student does not exist!");
    }
    
    const updateStudent = await studentModel.update(student);
    return updateStudent;
}

export const deleteStudent = async (id) => {
    const student = {id}
    const existing = await doesStudentExist(student);
    if (!existing) {
        throw new ValidationError(404, "Student does not exist!");
    }
    const deleteStudent = await studentModel.remove(id);
    return deleteStudent;
}