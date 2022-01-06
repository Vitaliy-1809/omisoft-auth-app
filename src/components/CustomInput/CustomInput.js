import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import './CustomInput.scss'

const CustomInput = ({ field, form, ...rest }) => {
  const { name, placeholder } = field

  return (
    <div style={{ margin: '15px 0' }}>
      <TextField
        className='input'
        label={placeholder}
        {...rest}
        {...field}
        fullWidth={true}
      />
      <div>
        {form.touched[name] && form.errors[name] && (
          <div className='error'>{form.errors[name]}</div>
        )}
      </div>
    </div>
  )
}

CustomInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
}

export default CustomInput
