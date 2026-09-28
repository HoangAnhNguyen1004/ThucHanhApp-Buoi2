import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton = ({
    title,
    onPress,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1976D2',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 6,
    },

    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;