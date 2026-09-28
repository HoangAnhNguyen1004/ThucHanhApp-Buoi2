import React from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Alert,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';

import { getXepLoai } from '../utils/studentUtils';

import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<
    RootStackParamList,
    'StudentDetail'
> & {
    deleteStudent: (studentId: string) => void;
};

const StudentDetailScreen = ({
    navigation,
    route,
    deleteStudent,
}: Props) => {

    const { student } = route.params;

    const handleDelete = () => {
        Alert.alert(
            'Xác nhận xóa',
            `Bạn có chắc muốn xóa ${student.hoTen}?`,
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },

                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => {
                        deleteStudent(student.id);
                        navigation.popToTop();
                    },
                },
            ],
        );
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}>

            <View style={styles.card}>

                <Text style={styles.name}>
                    {student.hoTen}
                </Text>

                <InfoRow
                    label="Mã sinh viên"
                    value={student.maSV}
                />

                <InfoRow
                    label="Ngày sinh"
                    value={student.ngaySinh}
                />

                <InfoRow
                    label="Giới tính"
                    value={student.gioiTinh}
                />

                <InfoRow
                    label="Email"
                    value={student.email}
                />

                <InfoRow
                    label="Số điện thoại"
                    value={student.soDienThoai}
                />

                <InfoRow
                    label="Lớp"
                    value={student.lop}
                />

                <InfoRow
                    label="Khoa"
                    value={student.khoa}
                />

                <InfoRow
                    label="GPA"
                    value={student.gpa.toFixed(1)}
                />

                <InfoRow
                    label="Xếp loại"
                    value={getXepLoai(student.gpa)}
                />

            </View>

            <CustomButton
                title="Chỉnh sửa sinh viên"
                onPress={() =>
                    navigation.navigate(
                        'EditStudent',
                        {
                            student,
                        },
                    )
                }
            />

            <CustomButton
                title="Xóa sinh viên"
                onPress={handleDelete}
            />

        </ScrollView>
    );
};

interface InfoRowProps {
    label: string;
    value: string;
}

const InfoRow = ({
    label,
    value,
}: InfoRowProps) => {
    return (
        <View style={styles.row}>

            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={styles.value}>
                {value}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },

    content: {
        padding: 15,
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },

    row: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 12,
    },

    label: {
        fontSize: 14,
        color: '#777',
        marginBottom: 4,
    },

    value: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default StudentDetailScreen;