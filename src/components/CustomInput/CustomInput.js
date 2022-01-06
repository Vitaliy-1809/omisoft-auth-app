import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import './CustomInput.scss'

const useStyles = makeStyles(() => ({
  noBorder: {
    border: 'none',
  },
}));

const CustomInput = ({ field, form, ...rest }) => {
  const { name, placeholder } = field
  const classes = useStyles();

  return (
    <div style={{ marginTop: 10 }}>
      <TextField
        size="small"
        sx={{ width: 300, borderRadius: 50, background: '#E6e6e6' }}
        label={placeholder}
        fullWidth={true}
        InputProps={{
          classes: { notchedOutline: classes.noBorder }
        }}
        {...rest}
        {...field}
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
