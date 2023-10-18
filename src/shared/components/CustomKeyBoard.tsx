import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface Props {
    children?: ReactNode | null;
}

export const CustomKeyBoard = ({ children }: Props) => {
    return (
        <KeyboardAvoidingView
            behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
        >
            {children}
        </KeyboardAvoidingView>
    )
};