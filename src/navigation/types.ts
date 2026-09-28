import { Student } from '../types/Student';

export type RootStackParamList = {
    StudentList: undefined;

    StudentDetail: {
        student: Student;
    };

    AddStudent: undefined;

    EditStudent: {
        student: Student;
    };
};