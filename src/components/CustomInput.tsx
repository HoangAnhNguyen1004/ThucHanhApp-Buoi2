import React from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardTypeOptions,
} from 'react-native';

interface CustomInputProps {
    label: string;
    value: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    editable?: boolean;
}

const CustomInput = ({
    label,
    value,
    placeholder,
    onChangeText,
    keyboardType = 'default',
    editable = true,
}: CustomInputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                editable={editable}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 14,
    },

    label: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 6,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});

export default CustomInput;