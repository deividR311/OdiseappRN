import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';

import { colors } from '../../theme/AppTheme';
import AuthContext from '../../contexts/Auth/AuthContext';
import { LoginInterface } from '../../interfaces/LoginInterface';
import { useForm, useFormValidator, useI18n, useToast } from '../../shared/hooks';
import { CustomKeyBoard, CustomButton, CustomFormValidation, CustomInput } from '../../shared/components';


export const LoginScreen = () => {
    const { showToast } = useToast();
    const { t } = useI18n();
    const { login, logOut, authState } = useContext(AuthContext);
    const { error, message } = authState;
    const [formError, setFormError] = useState<boolean>(false);
    const [formErrorMessage, setFormErrorMessage] = useState<string>('');
    const { form, handleChange } = useForm<LoginInterface>({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (formError) {
            setFormError(false);
        }
    }, [form])

    useEffect(() => {
        if (error) {
            (message)
                ? showToast(message)
                : showToast(t('serverError'));

            logOut();
        }

    }, [error])


    const formValidation = () => {
        const { emailValidator } = useFormValidator();
        const isEmail = emailValidator(form.email);

        if (form.email.length === 0) {
            setFormError(true);
            setFormErrorMessage(t('mightToWriteEmail'));
            return;
        }
        if (!isEmail) {
            setFormError(true);
            setFormErrorMessage(t('mightToBeEmail'));
            return;
        }
        if (form.password.length === 0) {
            setFormError(true);
            setFormErrorMessage(t('mightToWritePassword'));
            return;
        }

        authLogin();
    }

    const authLogin = () => {
        login(form);
        Keyboard.dismiss();
    }

    const goToRegister = () => {
        console.log('goToRegister');
    }

    return (
        <View style={styles.loginView}>
            <CustomKeyBoard>
                <View>
                    <View style={styles.loginInput}>
                        <Text style={styles.formField}>{t('email')}</Text>
                        <CustomInput
                            value={form.email}
                            onChangeText={(value) => handleChange(value, 'email')}
                            placeHolder={t('email')}
                            keyboardType='email-address'
                            secureTextEntry={false}
                        />
                    </View>
                    <View style={styles.loginInput}>
                        <Text style={styles.formField}>{t('password')}</Text>
                        <CustomInput
                            value={form.password}
                            onChangeText={(value) => handleChange(value, 'password')}
                            placeHolder={t('password')}
                            secureTextEntry={true}
                        />
                    </View>
                    {formError && <CustomFormValidation message={formErrorMessage} />}
                    <View style={styles.loginButton}>
                        <CustomButton
                            title={t('login')}
                            onPress={formValidation}
                        />
                    </View>
                    <View style={styles.loginButton}>
                        <CustomButton
                            title={t('signup')}
                            onPress={goToRegister}
                        />
                    </View>
                </View>
            </CustomKeyBoard>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        justifyContent: 'center',
        height: 600
    },

    loginInput: {
        marginBottom: 10
    },

    loginButton: {
        alignItems: 'center',
        marginTop: 10
    },

    formField: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.secondary,
        marginBottom: 5
    }
});