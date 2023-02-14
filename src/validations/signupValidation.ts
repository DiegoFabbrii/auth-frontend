import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
