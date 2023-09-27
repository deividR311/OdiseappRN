import React from 'react';
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomSearchInput = () => {
    return (
        <View>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar destino'
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <Icon
                    name='search-outline'
                    color='gray'
                    size={30}
                />
            </View>
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
        fontSize: 18
    }
});