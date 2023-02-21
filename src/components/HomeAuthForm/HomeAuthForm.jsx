import { Formik, Form } from 'formik';
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
} from './HomeAuthForm.styled';
import icon from 'images/icons-sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const HomeAuthForm = () => {
  const [showHidePassword, setShowHidePassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));

    resetForm();
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <AuthFormLabel htmlFor="Email">
            Email:
            <Input type="text" name="email" placeholder="your@email.com" />
          </AuthFormLabel>
          <AuthFormLabel htmlFor="password">
            Password:
            <EyeWrapper>
              <Input
                type={showHidePassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
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
          </AuthFormLabel>
          <ButtonContainer>
            <Button type={'submit'} color={'accent'} design={'home'}>
              LOG IN
            </Button>
            <Button type={'submit'} color={'grey'} design={'home'}>
              REGISTRATION
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
    </MainWrapper>
  );
};

export default HomeAuthForm;
