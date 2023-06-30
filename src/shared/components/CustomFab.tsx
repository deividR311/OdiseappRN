import React from 'react';
import { Text, View, StyleProp, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName : string;
    onPress  : () => void;
    style    : StyleProp<ViewStyle>
}

export const CustomFab = ({ iconName, onPress, style = {} } : Props) => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ onPress }
                style={styles.button}
            >
                <Icon
                    name={iconName}
                    color={colors.primary}
                    size={ sizes.buttonIcon }
                    style={{ left: 1 }}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    button : {
        zIndex: 9999,
        height: 50,
        width : 50,
        backgroundColor: colors.secondary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems : 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
});