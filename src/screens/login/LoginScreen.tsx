import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomInput } from '../../shared/components/CustomInput';
import { useForm, useI18n } from '../../shared/hooks';
import { LoginInterface } from '../../interfaces/LoginInterface';
import { CustomKeyBoard } from '../../shared/components/CustomKeyBoard';
import { CustomButton } from '../../shared/components/CustomButton';
import { colors } from '../../theme/AppTheme';
import loginService from '../../services/Login.service';
import { CustomFormValidation } from '../../shared/components/CustomFormValidation';
import { useFormValidator } from '../../shared/hooks/useFormValidator';

export const LoginScreen = () => {
    const { t } = useI18n();
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

        login();
    }

    const login = () => {
        loginService.login(form).then(
            res => {
                // async storage

                // go to tabs
            }
        ).catch(
            err => {
                console.log(err.response.data);
            }
        )
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