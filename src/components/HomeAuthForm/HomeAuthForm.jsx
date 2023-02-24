import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/UI/Button/Button';
import { ForgotModal } from 'components/ForgotModal/ForgotModal';
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
  ReminderButton,
} from './HomeAuthForm.styled';
import icon from 'images/icons-sprite.svg';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks/useAuth';
import Spiner from 'components/UI/Loader/Loader';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
  password: Yup.string()
    .min(6, 'Password too short')
    .max(50, 'Password too long')
    .required('This is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

const HomeAuthForm = () => {
  const [openForgotModal, setOpenForgotModal] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLoading } = useAuth();

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
      {!openForgotModal ? (
        <div>
          <GoogleText>{t('registration.Google Text')}:</GoogleText>
          <GoogleButton href="https://kapusta-project-back-production.up.railway.app/auth/google">
            <svg>
              <use href={`${icon}#icon-google-icon`}></use>
            </svg>
            Google
          </GoogleButton>
          <LoginText>
            {t('registration.loginText')}, <br /> {t('registration.after')}:
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
                  {t('registration.Password')}:
                  <EyeWrapper>
                    <Input
                      type={showHidePassword ? 'text' : 'password'}
                      name="password"
                      placeholder={t('registration.Password')}
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
                  <ReminderButton onClick={() => setOpenForgotModal(true)}>
                    Forgot your password?
                  </ReminderButton>
                </AuthFormLabel>
                <ButtonContainer>
                  <Button
                    type={'submit'}
                    color={'accent'}
                    design={'home'}
                    disabled={isSubmitting}
                  >
                    {isLoading ? (
                      <Spiner width={30} height={30} />
                    ) : (
                      t('registration.LOG IN')
                    )}
                  </Button>
                  <Button
                    type={'button'}
                    color={'grey'}
                    design={'home'}
                    disabled={isSubmitting}
                    onClick={() => onClick(errors, values, handleReset)}
                  >
                    {isLoading ? (
                      <Spiner width={25} height={25} />
                    ) : (
                      t('registration.REGISTRATION')
                    )}
                  </Button>
                </ButtonContainer>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <ForgotModal
          ValidationSchema={ValidationSchema.email}
          closeModal={setOpenForgotModal}
        />
      )}
    </MainWrapper>
  );
};

export default HomeAuthForm;
