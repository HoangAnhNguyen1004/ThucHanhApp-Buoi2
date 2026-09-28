import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Student } from '../types/Student';
import { getXepLoai } from '../utils/studentUtils';

interface StudentItemProps {
    student: Student;
    onPress: () => void;
}

const StudentItem = ({
    student,
    onPress,
}: StudentItemProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>

            <View style={styles.info}>
                <Text style={styles.name}>
                    {student.hoTen}
                </Text>

                <Text>
                    Mã SV: {student.maSV}
                </Text>

                <Text>
                    Lớp: {student.lop}
                </Text>

                <Text>
                    GPA: {student.gpa.toFixed(1)}
                </Text>
            </View>

            <View style={styles.rankContainer}>
                <Text style={styles.rank}>
                    {getXepLoai(student.gpa)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
    },

    info: {
        flex: 1,
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },

    rankContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },

    rank: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default StudentItem;