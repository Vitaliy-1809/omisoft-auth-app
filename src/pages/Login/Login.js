import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import FormSchema from './FormSchema/FormSchema';
import { snackActions } from '../../utils/customHooks/useSnackBarUtils';
import CustomInput from '../../components/CustomInput/CustomInput';
import { Link } from 'react-router-dom';
import './Login.scss';
import { Box } from '@mui/material';
import useAuth from '../../utils/customHooks/useAuth';
import { ColorButton } from '../../components/Button/Button';

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
          snackActions.warning('Wrong login or password')
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
              <h2 className='form-title'>Member Login</h2>

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

              {/* <Field
                component={CustomInput}
                placeholder='Email'
                name="email"
                type="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize='small' />
                    </InputAdornment>
                  ),
                  classes: { notchedOutline: classes.noBorder }
                }}
              />
              <Field
                data-testid="password"
                component={CustomInput}
                placeholder="Password"
                name="password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon fontSize='small' />
                    </InputAdornment>
                  ),
                  classes: { notchedOutline: classes.noBorder }
                }}
              /> */}

              {serverResult && serverResult.error && (
                <Box className='formStatusBlock'>
                  <p className='error'>{serverResult.error}</p>
                </Box>
              )}

              {serverResult && serverResult.success && (
                <Box className='formStatusBlock'>
                  <p className='success'>{serverResult.success}</p>
                </Box>
              )}

              <ColorButton
                variant="contained"
                type='submit'
                direction="form"
                disabled={
                  !formikProps.isValid ||
                  formikProps.isSubmitting
                }
              >
                LOGIN
              </ColorButton>

              <div className='login-options'>
                <p className='user-info'>
                  Forgot <Link to="#" className='form-link'>Username</Link>
                  /
                  <Link to="#" className='form-link'>Password</Link> ?
                </p>
                <p className='create-account'>
                  <Link to="#" className='form-link'>Create your Account</Link>
                </p>
              </div>
            </Form>
          </Box>
        )
      }}
    </Formik>
  );
}

export default Login;
