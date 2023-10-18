import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { Text, View } from 'react-native';

interface Props {
    value: any;
    onChangeText?: (value: any) => void | undefined;
    placeHolder: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    secureTextEntry: boolean;
}

export const CustomInput = ({ value, onChangeText, placeHolder, keyboardType, secureTextEntry }: Props) => {

    return (
        <View style={styles.textBackground}>
            <TextInput
                style={styles.textInput}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={value}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    textInput: {
        flex: 1,
        fontSize: 15
    }
});