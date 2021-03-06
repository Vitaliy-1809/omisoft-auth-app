import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ColorButton = styled(Button)(() => ({
  backgroundColor: '#5fb848',
  minWidth: 300,
  borderRadius: 50,
  marginTop: 30,
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: '#5fb848',
    opacity: 0.9,
  },
}))