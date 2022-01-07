import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import './Login.scss';
import FormSchema from './FormSchema/FormSchema';
import { snackActions } from '../../utils/customHooks/useSnackBarUtils';
import CustomInput from '../../components/CustomInput/CustomInput';
import { Link } from 'react-router-dom';
import { Box, InputAdornment } from '@mui/material';
import useAuth from '../../utils/customHooks/useAuth';
import { ColorButton } from '../../components/Button/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FormAvatar from '../../components/FormAvatar/FormAvatar';

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
          <div className='page-positioning'>
            <Box className='form-container'>
              <FormAvatar />
              <Form noValidate
                className='form'
                onSubmit={formikProps.handleSubmit}
              >
                <h2 className='form-title'>Member Login</h2>

                <Field
                  component={CustomInput}
                  placeholder='Email'
                  name="email"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon fontSize='small' />
                      </InputAdornment>
                    )
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
                    )
                  }}
                />

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
                  Login
                </ColorButton>

                <div className='login-options'>
                  <p className='user-info'>
                    Forgot <Link to="#" className='form-link'>Username</Link>
                    /
                    <Link to="#" className='form-link'>Password</Link> ?
                  </p>
                  <p className='create-account'>
                    <Link to="#" className='form-link flex'>
                      Create your Account
                      <ArrowRightAltIcon fontSize='small' />
                    </Link>
                  </p>
                </div>
              </Form>
            </Box>
          </div>
        )
      }}
    </Formik>
  );
}

export default Login;