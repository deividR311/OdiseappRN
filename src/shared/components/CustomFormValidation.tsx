import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    message: string;
};

export const CustomFormValidation = ({ message }: Props) => {
    return (
        <View style={styles.validContainer}>
            <Text>
                {message}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    validContainer: {
        alignItems: 'center'
    }
});