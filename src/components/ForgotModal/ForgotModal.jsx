import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useAuth } from 'hooks/useAuth';
import { resetPassword } from 'redux/auth/operations';
import Spinner from 'components/UI/Loader/Loader';
import { Button } from 'components/UI/Button/Button';
import icon from 'images/icons-sprite.svg';

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

export const ForgotModal = ({ closeModal }) => {
  const { isLoading } = useAuth();
  const dispatch = useDispatch();

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
          dispatch(resetPassword(values));
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
                {isLoading ? <Spinner width={30} height={30} /> : 'Send'}
              </Button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ForgotModal.propTypes = {
  closeModal: PropTypes.func,
};
