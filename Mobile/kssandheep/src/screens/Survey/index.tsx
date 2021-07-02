import React, { useState, ReactElement } from 'react';
import {
  Button,
  Datepicker,
  Divider,
  Icon,
  Input,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { FormikProvider } from 'formik';

import useSurvey from './hooks/useSurvey';

export default ({ navigation }): ReactElement => {
  const surveyForm = useSurvey(navigation)

  const styles = useStyleSheet(themedStyles);

  const { handleSubmit, setFieldValue } = surveyForm;

  const onSave = (): void => {
    handleSubmit();
  };


  return (
    <FormikProvider value={surveyForm}>
      <Layout
        style={styles.form}
        level='1'>
        <Input
          style={styles.input}
          label='Name'
          placeholder='Enter Name'
          onChangeText={(text) => setFieldValue("name", text)}
        />
        <Input
          style={styles.input}
          label='Age'
          placeholder='Age'
          keyboardType='numeric'
          maxLength={19}
          onChangeText={(text) => setFieldValue("age", text)}
        />
        <Datepicker
          style={[styles.input, styles.date]}
          label='DOB'
          date={surveyForm.values.dob}
          onSelect={(text) => setFieldValue("dob", text)}
        />
        <Input
          style={styles.input}
          label='Mobile Number'
          placeholder='Mobile Number'
          keyboardType='numeric'
          maxLength={19}
          onChangeText={(text) => setFieldValue("mobile", text)}
        />
      </Layout>
      <Divider />
      <Button
        style={styles.addButton}
        size='giant'
        onPress={onSave}>
        SAVE
      </Button>
    </FormikProvider>

  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  form: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 24,
  },
  input: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  date: {
    width: 128,
  },
});