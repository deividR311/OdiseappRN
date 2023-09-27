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
        <View style={ style }>
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={0.9}
                style={{ ...styles.button }}
            >
                <Text style={styles.buttonText}>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    button : {
        zIndex: 9999,
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
        color: colors.tertiary,
        fontSize: 18,
        fontWeight: 'bold'
    }
});