import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import './CustomInput.scss'

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&.Mui-focused .MuiInputBase-input': {
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
  },
})

const CustomInput = ({ field, form, ...rest }) => {
  const { name, placeholder } = field

  return (
    <div style={{ marginTop: 10 }}>
      <StyledTextField
        size="small"
        sx={{ width: 300, borderRadius: 50, background: '#E6e6e6' }}
        label={placeholder}
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