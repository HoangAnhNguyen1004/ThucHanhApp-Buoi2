import React, { useMemo, useState } from 'react';

import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';
import { Student } from '../types/Student';
import StudentItem from '../components/StudentItem';

type Props = NativeStackScreenProps<
    RootStackParamList,
    'StudentList'
> & {
    students: Student[];
};

const StudentListScreen = ({
    navigation,
    students,
}: Props) => {

    const [searchText, setSearchText] =
        useState('');

    const filteredStudents = useMemo(() => {
        const keyword =
            searchText.trim().toLowerCase();

        if (!keyword) {
            return students;
        }

        return students.filter(student =>
            student.maSV
                .toLowerCase()
                .includes(keyword) ||
            student.hoTen
                .toLowerCase()
                .includes(keyword),
        );
    }, [students, searchText]);

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.search}
                placeholder="Tìm theo mã hoặc họ tên..."
                value={searchText}
                onChangeText={setSearchText}
            />

            <Text style={styles.total}>
                Có {filteredStudents.length} sinh viên
            </Text>

            <FlatList
                data={filteredStudents}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <StudentItem
                        student={item}
                        onPress={() =>
                            navigation.navigate(
                                'StudentDetail',
                                {
                                    student: item,
                                },
                            )
                        }
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.empty}>
                        Không tìm thấy sinh viên
                    </Text>
                }
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                    navigation.navigate('AddStudent')
                }>

                <Text style={styles.addButtonText}>
                    + Thêm sinh viên
                </Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        padding: 15,
    },

    search: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 11,
        fontSize: 16,
        marginBottom: 10,
    },

    total: {
        fontSize: 14,
        marginBottom: 10,
        color: '#555',
    },

    empty: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#777',
    },

    addButton: {
        backgroundColor: '#1976D2',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },

    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StudentListScreen;