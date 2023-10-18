import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/AppTheme';

export const CustomLoading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={50}
                color={colors.secondary}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});