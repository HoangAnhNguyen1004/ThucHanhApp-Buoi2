import React, { useState } from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import AppNavigator from './src/navigation/AppNavigator';

import { initialStudents } from './src/data/studentData';

import { Student } from './src/types/Student';

const App = () => {

  const [students, setStudents] =
    useState<Student[]>(initialStudents);

  // THÊM
  const addStudent = (student: Student) => {
    setStudents(prevStudents => [
      ...prevStudents,
      student,
    ]);
  };

  // SỬA
  const updateStudent = (
    updatedStudent: Student,
  ) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student,
      ),
    );
  };

  // XÓA
  const deleteStudent = (
    studentId: string,
  ) => {
    setStudents(prevStudents =>
      prevStudents.filter(
        student => student.id !== studentId,
      ),
    );
  };

  return (
    <NavigationContainer>

      <AppNavigator
        students={students}
        addStudent={addStudent}
        updateStudent={updateStudent}
        deleteStudent={deleteStudent}
      />

    </NavigationContainer>
  );
};

export default App;