import Toast, { BaseToast } from 'react-native-toast-message';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/AppTheme';


export const useToast = () => {

    const toastConfig = {
        general: ({ text1 }: any) => (
            <View style={styles.toast}>
                <Text style={styles.text}>{text1}</Text>
            </View>
        ),
    }

    const showToast = (text1: string) => {
        Toast.show({
            type: 'general',
            text1: text1
        });
    }


    return { showToast, toastConfig }
}

const styles = StyleSheet.create({
    toast: {
        height: 50,
        width: '90%',
        backgroundColor: colors.secondary,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: colors.primary,
        fontWeight: 'bold'
    }
});