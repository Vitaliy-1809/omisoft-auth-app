import * as Yup from 'yup';

const IS_REQUIRED = 'This field is required';
const IS_NOT_TRIMMED_ERROR = 'This field must have no spaces before and after';

const FormSchema = Yup.object().shape({
  email: Yup
    .string()
    .strict(true)
    .trim(IS_NOT_TRIMMED_ERROR)
    .required(IS_REQUIRED)
    .email('Enter correct email'),
  password: Yup
    .string()
    .required(IS_REQUIRED)
    .min(5, 'Password must be 5 digits minimum')
    .max(30, 'Password must be 30 digits maximum'),
})

export default FormSchema;