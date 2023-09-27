import { Text, View, StyleSheet, Platform } from 'react-native';
import { CustomSearchInput } from '../../shared/components/sharedComponents';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const DestinySeekerScreen = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.container,
            top: (Platform.OS === 'ios') ? top : top + 10
        }}
        >
            <CustomSearchInput />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    }
});