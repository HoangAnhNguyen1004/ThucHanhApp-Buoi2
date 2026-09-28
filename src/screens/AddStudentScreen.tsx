import React, { useState } from 'react';

import {
    ScrollView,
    StyleSheet,
    Alert,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';

import { Student } from '../types/Student';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<
    RootStackParamList,
    'AddStudent'
> & {
    addStudent: (student: Student) => void;
};

const AddStudentScreen = ({
    navigation,
    addStudent,
}: Props) => {

    const [maSV, setMaSV] = useState('');
    const [hoTen, setHoTen] = useState('');
    const [ngaySinh, setNgaySinh] = useState('');
    const [gioiTinh, setGioiTinh] = useState('');
    const [email, setEmail] = useState('');
    const [soDienThoai, setSoDienThoai] =
        useState('');
    const [lop, setLop] = useState('');
    const [khoa, setKhoa] = useState('');
    const [gpa, setGpa] = useState('');

    const handleAdd = () => {

        if (!maSV.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập mã sinh viên',
            );
            return;
        }

        if (!hoTen.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập họ tên',
            );
            return;
        }

        if (!ngaySinh.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập ngày sinh',
            );
            return;
        }

        if (!gioiTinh.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập giới tính',
            );
            return;
        }

        if (!email.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập email',
            );
            return;
        }

        if (!soDienThoai.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập số điện thoại',
            );
            return;
        }

        if (!lop.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập lớp',
            );
            return;
        }

        if (!khoa.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập khoa',
            );
            return;
        }

        if (!gpa.trim()) {
            Alert.alert(
                'Lỗi',
                'Vui lòng nhập GPA',
            );
            return;
        }

        const diem = Number(gpa);

        if (
            Number.isNaN(diem) ||
            diem < 0 ||
            diem > 10
        ) {
            Alert.alert(
                'Lỗi',
                'GPA phải từ 0 đến 10',
            );
            return;
        }

        const newStudent: Student = {
            id: maSV.trim(),
            maSV: maSV.trim(),
            hoTen: hoTen.trim(),
            ngaySinh: ngaySinh.trim(),
            gioiTinh: gioiTinh.trim(),
            email: email.trim(),
            soDienThoai: soDienThoai.trim(),
            lop: lop.trim(),
            khoa: khoa.trim(),
            gpa: diem,
        };

        addStudent(newStudent);

        Alert.alert(
            'Thành công',
            'Đã thêm sinh viên',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.goBack(),
                },
            ],
        );
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}>

            <CustomInput
                label="Mã sinh viên"
                value={maSV}
                onChangeText={setMaSV}
                placeholder="Ví dụ: SV005"
            />

            <CustomInput
                label="Họ tên"
                value={hoTen}
                onChangeText={setHoTen}
                placeholder="Nhập họ tên"
            />

            <CustomInput
                label="Ngày sinh"
                value={ngaySinh}
                onChangeText={setNgaySinh}
                placeholder="DD/MM/YYYY"
            />

            <CustomInput
                label="Giới tính"
                value={gioiTinh}
                onChangeText={setGioiTinh}
                placeholder="Nam / Nữ"
            />

            <CustomInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
                keyboardType="email-address"
            />

            <CustomInput
                label="Số điện thoại"
                value={soDienThoai}
                onChangeText={setSoDienThoai}
                placeholder="Nhập số điện thoại"
                keyboardType="phone-pad"
            />

            <CustomInput
                label="Lớp"
                value={lop}
                onChangeText={setLop}
                placeholder="Ví dụ: CNTT01"
            />

            <CustomInput
                label="Khoa"
                value={khoa}
                onChangeText={setKhoa}
                placeholder="Ví dụ: Công nghệ thông tin"
            />

            <CustomInput
                label="GPA"
                value={gpa}
                onChangeText={setGpa}
                placeholder="0 - 10"
                keyboardType="decimal-pad"
            />

            <CustomButton
                title="Thêm sinh viên"
                onPress={handleAdd}
            />

        </ScrollView>
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
});

export default AddStudentScreen;