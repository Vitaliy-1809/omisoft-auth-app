import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import FormSchema from './FormSchema/FormSchema';
import { snackActions } from '../../utils/customHooks/useSnackBarUtils';
import CustomInput from '../../components/CustomInput/CustomInput';
import { Link } from 'react-router-dom';
import './Login.scss';
import { Box, Button } from '@mui/material';
import useAuth from '../../utils/customHooks/useAuth';

const Login = () => {
  const [serverResult, setServerResult] = useState(null)
  const { login } = useAuth()

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={FormSchema}
      onSubmit={async (values) => {
        try {
          await login(values)
        } catch (e) {
          setServerResult({ error: 'Wrong login or password' })
          // snackActions.warning('Wrong login or password')
          alert('Wrong login or password')
        }
      }}
    >
      {(formikProps) => {
        return (
          <Box className='form-container'>
            <Form noValidate
              className='form'
              onSubmit={formikProps.handleSubmit}
            >
              <h2>Member Login</h2>

              <Field
                component={CustomInput}
                label='Email'
                name="email"
                type="text"
              />
              <Field
                data-testid="password"
                component={CustomInput}
                label="Password"
                name="password"
                type="password"
              />

              {serverResult && serverResult.error && (
                <Box className='formStatusBlock'>
                  <p className=''>{serverResult.error}</p>
                </Box>
              )}

              {serverResult && serverResult.success && (
                <Box className='formStatusBlock'>
                  <p className='success'>{serverResult.success}</p>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type='submit'
                  variant="contained"
                  direction="form"
                  disabled={
                    !formikProps.isValid ||
                    formikProps.isSubmitting
                  }
                >
                  LOGIN
                </Button>
              </Box>

              <p className=''>
                Forgot <Link to="#">Username</Link> / <Link to="#">Password</Link> ?
              </p>

              <p className=''>
                <Link to="#">Create your Account</Link>
              </p>
            </Form>
          </Box>
        )
      }}
    </Formik>
  );
}

export default Login;
