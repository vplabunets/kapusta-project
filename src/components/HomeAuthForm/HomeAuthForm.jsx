import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useAuth } from 'hooks/useAuth';
import { logIn, register } from 'redux/auth/operations';

import { ForgotModal } from 'components/ForgotModal/ForgotModal';
import { Button } from 'components/UI/Button/Button';
import Spinner from 'components/UI/Loader/Loader';
import LanguageSwitcher from 'components/SettingsMenu/LanguageSwitcher';
import icon from 'images/icons-sprite.svg';
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
  const [loading, setLoading] = useState('');

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) setLoading('');
  }, [isLoading]);

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
      setLoading('click');
      return;
    }
  };

  const onSubmit = values => {
    dispatch(logIn(values));
    setLoading('submit');
    return;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <MainWrapper>
        {!openForgotModal ? (
          <div>
            <LanguageSwitcher position="header" />
            <GoogleText>{t('registration.GoogleText')}:</GoogleText>
            <GoogleButton href="https://kapusta-project-back.onrender.com/auth/google">
              <svg>
                <use href={`${icon}#icon-google-icon`}></use>
              </svg>
              Google
            </GoogleButton>
            <LoginText>
              {t('registration.loginText')}, {t('registration.after')}:
            </LoginText>
            <Formik
              initialValues={initialValues}
              onSubmit={values => onSubmit(values)}
              validationSchema={ValidationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
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
                    <ReminderButton
                      type="button"
                      onClick={() => setOpenForgotModal(true)}
                    >
                      {t('registration.Forgot your password')}?
                    </ReminderButton>
                  </AuthFormLabel>
                  <ButtonContainer>
                    <Button
                      type={'submit'}
                      color={'accent'}
                      design={'home'}
                      disabled={isLoading ? true : false}
                    >
                      {loading === 'submit' ? (
                        <Spinner width={30} height={30} />
                      ) : (
                        t('registration.LOG IN')
                      )}
                    </Button>
                    <Button
                      type={'button'}
                      color={'grey'}
                      design={'home'}
                      disabled={isLoading ? true : false}
                      onClick={() => onClick(errors, values, handleReset)}
                    >
                      {loading === 'click' ? (
                        <Spinner width={30} height={30} />
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
    </motion.div>
  );
};

export default HomeAuthForm;
