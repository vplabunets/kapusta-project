import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/UI/Button/Button';
import {
  MainWrapper,
  GoogleText,
  GoogleButton,
  LoginText,
  AuthFormLabel,
  Input,
  ButtonContainer,
  EyeWrapper,
  ErrorValidation,
} from './HomeAuthForm.styled';
import icon from 'images/icons-sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';
import { toast } from 'react-toastify';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
  password: Yup.string()
    .min(6, 'Password too short')
    .max(16, 'Password too long')
    .required('This is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

const HomeAuthForm = () => {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const dispatch = useDispatch();

  const onClick = (errors, values, handleReset) => {
    if (errors.email || errors.password)
      return toast.warning('Both fields must be valid', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });

    if (!values.email || !values.password)
      return toast.warning('Both fields must be filled', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });

    if (values.email && values.password) {
      dispatch(register(values));
      handleReset();
      return;
    }
  };

  return (
    <MainWrapper>
      <GoogleText>You can log in with your Google Account:</GoogleText>
      <GoogleButton type={'button'}>
        <svg>
          <use href={`${icon}#icon-google-icon`}></use>
        </svg>
        Google
      </GoogleButton>
      <LoginText>
        Or log in using an email and password, <br /> after registering:
      </LoginText>
      <Formik
        initialValues={initialValues}
        onSubmit={values => dispatch(logIn(values))}
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
          handleReset,
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
            <AuthFormLabel htmlFor="password">
              Password:
              <EyeWrapper>
                <Input
                  type={showHidePassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={() => setShowHidePassword(!showHidePassword)}
                >
                  <svg>
                    <use
                      href={
                        showHidePassword
                          ? `${icon}#icon-eye-closed`
                          : `${icon}#icon-eye`
                      }
                    ></use>
                  </svg>
                </button>
              </EyeWrapper>
              <ErrorValidation>
                {errors.password && touched.password && errors.password}
              </ErrorValidation>
            </AuthFormLabel>
            <ButtonContainer>
              <Button
                type={'submit'}
                color={'accent'}
                design={'home'}
                disabled={isSubmitting}
              >
                LOG IN
              </Button>
              <Button
                type={'button'}
                color={'grey'}
                design={'home'}
                disabled={isSubmitting}
                onClick={() => onClick(errors, values, handleReset)}
              >
                REGISTRATION
              </Button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </MainWrapper>
  );
};

export default HomeAuthForm;
