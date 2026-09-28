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
    'EditStudent'
> & {
    updateStudent: (student: Student) => void;
};

const EditStudentScreen = ({
    navigation,
    route,
    updateStudent,
}: Props) => {

    const { student } = route.params;

    const [maSV] = useState(student.maSV);

    const [hoTen, setHoTen] =
        useState(student.hoTen);

    const [ngaySinh, setNgaySinh] =
        useState(student.ngaySinh);

    const [gioiTinh, setGioiTinh] =
        useState(student.gioiTinh);

    const [email, setEmail] =
        useState(student.email);

    const [soDienThoai, setSoDienThoai] =
        useState(student.soDienThoai);

    const [lop, setLop] =
        useState(student.lop);

    const [khoa, setKhoa] =
        useState(student.khoa);

    const [gpa, setGpa] =
        useState(String(student.gpa));

    const handleUpdate = () => {

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

        const updatedStudent: Student = {
            ...student,

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

        updateStudent(updatedStudent);

        Alert.alert(
            'Thành công',
            'Đã cập nhật sinh viên',
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
                onChangeText={() => { }}
                editable={false}
            />

            <CustomInput
                label="Họ tên"
                value={hoTen}
                onChangeText={setHoTen}
            />

            <CustomInput
                label="Ngày sinh"
                value={ngaySinh}
                onChangeText={setNgaySinh}
            />

            <CustomInput
                label="Giới tính"
                value={gioiTinh}
                onChangeText={setGioiTinh}
            />

            <CustomInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <CustomInput
                label="Số điện thoại"
                value={soDienThoai}
                onChangeText={setSoDienThoai}
                keyboardType="phone-pad"
            />

            <CustomInput
                label="Lớp"
                value={lop}
                onChangeText={setLop}
            />

            <CustomInput
                label="Khoa"
                value={khoa}
                onChangeText={setKhoa}
            />

            <CustomInput
                label="GPA"
                value={gpa}
                onChangeText={setGpa}
                keyboardType="decimal-pad"
            />

            <CustomButton
                title="Lưu thay đổi"
                onPress={handleUpdate}
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

export default EditStudentScreen;