import React, { useContext } from 'react';
import { View } from 'react-native';
import { CustomButton } from '../../shared/components/CustomButton';
import AuthContext from '../../contexts/Auth/AuthContext';

export const HomeScreen = () => {

    const { logOut } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <CustomButton title='Log out' onPress={logOut} />
        </View>
    )
};