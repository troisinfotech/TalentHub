import { useEffect } from 'react';
import { useFormik } from 'formik';
import database from '@react-native-firebase/database';
import moment from "moment";

import * as yup from 'yup'

const surveyValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is Required'),
  age: yup
    .string()
    .required('Age is required'),
  dob: yup
    .string()
    .required('DOB is required'),
  mobile: yup
    .string()
    .required('Mobile is required'),
})

const useSurvey = (navigation: any) => {

  const formik = useFormik({
    validationSchema: surveyValidationSchema,
    initialValues: {
      name: '',
      age: '',
      dob: '',
      mobile: '',
    },
    onSubmit: (values: any) => {
      const reference = database().ref('/survey').push();

      console.log(`values`, values)

      reference
        .set({
          ...values,
          dob: values.dob ? moment(values.dob).format("DD-MM-YYYY") : ''
        })
        .then(() => navigation && navigation.navigate('SurveyHistory'));
    },
  });

  return formik;
};

export default useSurvey;
