import { Formik, Form } from 'formik';
import { Button } from 'components/UI/Button/Button';
import { toast } from 'react-toastify';
import Spiner from 'components/UI/Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import icon from 'images/icons-sprite.svg';
import * as Yup from 'yup';
import axios from 'axios';

import {
  Input,
  AuthFormLabel,
  ErrorValidation,
} from '../HomeAuthForm/HomeAuthForm.styled';

import {
  ButtonBack,
  Text,
  Wrapper,
  ButtonContainer,
} from './ForgotModal.styled';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
});

const initialValues = {
  email: '',
};

const resetPassword = async email => {
  try {
    await axios.post('/users/refresh-password', email);
    return toast.info('Your new password successfully sent to your email');
  } catch (error) {
    if (error.message === 'Network Error') {
      toast.error('Something went wrong, please try again later');
    }
    const errNot = error.response.data.message;
    if (errNot.includes('Please confirm the mail')) {
      toast.warning('First you need to verify your email, check you email box');
    }
    if (errNot.includes('User with this email')) {
      toast.warning('No user with this email, please register');
    }
    return console.error(error);
  }
};

export const ForgotModal = ({ closeModal }) => {
  const { isLoading } = useAuth();
  return (
    <Wrapper>
      <ButtonBack onClick={() => closeModal(false)}>
        <svg>
          <use href={`${icon}#icon-arrow-back`}></use>
        </svg>
      </ButtonBack>
      <Text> Forgot your password? Please enter your email</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          resetPassword(values);
          closeModal(false);
        }}
        validationSchema={ValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <AuthFormLabel htmlFor="Email">
              Email:
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorValidation>
                {errors.email && touched.email && errors.email}
              </ErrorValidation>
            </AuthFormLabel>
            <ButtonContainer>
              <Button
                type={'submit'}
                color={'accent'}
                design={'home'}
                disabled={isSubmitting}
              >
                {isLoading ? <Spiner width={30} height={30} /> : 'Send'}
              </Button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
