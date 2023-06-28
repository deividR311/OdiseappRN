import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppPermissionsContext from '../../contexts/AppPermissions/AppPermissionsContext';
import { CustomButton } from '../../shared/components/sharedComponents';
import { colors } from '../../theme/AppTheme';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext(AppPermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={styles.permissionTitle}>
                Permite a Odiseapp acceder a tu ubicación
            </Text>
            <Text style={styles.permissionSubtitle}>
                Odiseapp necesita tu ubicación precisa para aventurar.
            </Text>

            <CustomButton
                title='Permission'
                onPress={askLocationPermission}
            />

            <Text>
                { JSON.stringify(permissions, null, 5) }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    permissionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.secondary
    },

    permissionSubtitle: {
        // fontSize: 20,
        color: colors.secondary
    }
});