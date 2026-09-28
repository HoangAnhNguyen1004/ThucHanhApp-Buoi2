import React from 'react';

import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';

import StudentListScreen from '../screens/StudentListScreen';
import StudentDetailScreen from '../screens/StudentDetailScreen';
import AddStudentScreen from '../screens/AddStudentScreen';
import EditStudentScreen from '../screens/EditStudentScreen';

import { Student } from '../types/Student';

import { RootStackParamList } from './types';

const Stack =
    createNativeStackNavigator<RootStackParamList>();

interface AppNavigatorProps {
    students: Student[];

    addStudent: (student: Student) => void;

    updateStudent: (student: Student) => void;

    deleteStudent: (studentId: string) => void;
}

const AppNavigator = ({
    students,
    addStudent,
    updateStudent,
    deleteStudent,
}: AppNavigatorProps) => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="StudentList"
                options={{
                    title: 'Danh sách sinh viên',
                }}>
                {props => (
                    <StudentListScreen
                        {...props}
                        students={students}
                    />
                )}
            </Stack.Screen>

            <Stack.Screen
                name="StudentDetail"
                options={{
                    title: 'Chi tiết sinh viên',
                }}>
                {props => (
                    <StudentDetailScreen
                        {...props}
                        deleteStudent={deleteStudent}
                    />
                )}
            </Stack.Screen>

            <Stack.Screen
                name="AddStudent"
                options={{
                    title: 'Thêm sinh viên',
                }}>
                {props => (
                    <AddStudentScreen
                        {...props}
                        addStudent={addStudent}
                    />
                )}
            </Stack.Screen>

            <Stack.Screen
                name="EditStudent"
                options={{
                    title: 'Chỉnh sửa sinh viên',
                }}>
                {props => (
                    <EditStudentScreen
                        {...props}
                        updateStudent={updateStudent}
                    />
                )}
            </Stack.Screen>

        </Stack.Navigator>
    );
};

export default AppNavigator;