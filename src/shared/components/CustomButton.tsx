import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors } from '../../theme/AppTheme';

interface Props {
    title   : string;
    onPress : () => void;
    style?  : StyleProp<ViewStyle>;
}

export const CustomButton = ( { title, onPress, style } : Props ) => {
    return (
        <TouchableOpacity
            onPress={ onPress }
            activeOpacity={0.9}
            style={ (style) ? style : { ...styles.button }}
        >
            <Text style={styles.buttonText}>{ title }</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button : {
        height: 50,
        width: 200,
        backgroundColor: colors.secondary,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },

    buttonText: {
        color: colors.white,
        fontSize: 18
    }
});