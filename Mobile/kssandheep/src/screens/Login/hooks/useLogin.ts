import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import * as yup from 'yup'
import { login } from '../../../redux/modules/user/actions';

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    // .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .required('Password is required'),
})

const useLogin = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: loginValidationSchema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  return formik;
};

export default useLogin;
