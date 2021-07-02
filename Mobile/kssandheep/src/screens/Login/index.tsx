import React, { ReactElement } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import { FormikProvider } from 'formik';
import useLogin from './hooks/useLogin';
import ErrorMessage from '../../components/ErrorMessage';
import { useSelector } from 'react-redux';

export default (): React.ReactElement => {
  const loginForm = useLogin();
  const loginError = useSelector((state: any) => state.user.loginError)

  const styles = useStyleSheet(themedStyles);

  const { errors, handleSubmit, setFieldValue } = loginForm;

  return (
    <FormikProvider value={loginForm}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            category='h1'
            status='control'>
            Login</Text>
        </View>
        <Layout
          style={styles.formContainer}
          level='1'>

          <View style={styles.input}>
            <Input
              placeholder='Email'
              onChangeText={(text) => setFieldValue("username", text)}

            />
            {errors && errors.username && <ErrorMessage error={errors.username} />}
          </View>
          <View style={styles.input}>
            <Input
              style={styles.passwordInput}
              placeholder='Password'
              onChangeText={(text) => setFieldValue("password", text)}
            />
            {errors && errors.password && <ErrorMessage error={errors.password} />}
          </View>
          {loginError && <ErrorMessage error={loginError} />}


        </Layout>

        <Button
          onPress={() => handleSubmit()}
          style={styles.signInButton}
          size='giant'>
          SIGN IN
        </Button>


      </View>
    </FormikProvider>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
    marginBottom: 16
  },
  passwordInput: {
    marginTop: 16,
  },
  input: {
    // display: 'flex',
    // flexDirection: 'row',
  },
  error: {
    color: 'red',
    flex: 1
  },
});