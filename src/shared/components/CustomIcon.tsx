import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, sizes } from '../../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    iconName : string;
    style    : StyleProp<ViewStyle>;
    onPress  : () => void;
}

export const CustomIcon = ({ iconName, style, onPress } : Props) => {
return (
    <View style={style}>
        <Icon
            name={iconName}
            color={colors.secondary}
            size={ sizes.buttonIcon }
            style={{ left: 1 }}
            onPress={onPress}
        />
    </View>
)
};