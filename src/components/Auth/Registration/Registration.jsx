import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../ui/CustomButton';
import { CustomInput } from '../../ui/CustomInput';
import logo_small from '../../../assets/images/logo_auth.svg';
import s from './styles.module.scss';
import {
  mailRegExp,
  passwordRegExp,
} from '../Authorization/validations/validationAuth';

export const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const onSubmit = data => {
    console.log('Form data:', data);
    setTimeout(() => {
      alert('Вы успешно зарегистрированы (моковые данные)');
      setIsSubmitted(true);
    }, 1000);
  };

  useEffect(() => {
    setValue('first_name', 'Иван');
    setValue('last_name', 'Иванов');
    setValue('phone', '1234567890');
    setValue('email', 'ivan@example.com');
    setValue('login', 'ivan123');
    setValue('password', 'Password1!');
    setValue('repeat_password', 'Password1!');
  }, [setValue]);

  const handleAuthorizeClick = () => {
    navigate('/authorization');
  };

  return (
    <div className={s.registration__container}>
      {isSubmitted ? (
        <div className={s.thankyou__content}>
          <h2>Спасибо!</h2>
          <p>Проверьте вашу почту</p>
          <CustomButton
            className={s.thankyou__btn}
            onClick={handleAuthorizeClick}
            buttonText="Главная / вход"
          />
        </div>
      ) : (
        <div className={s.registration__content}>
          <img
            src={logo_small}
            alt={'logo'}
            className={s.authorization__logo}
          />
          <h2 className={s.registration__logo}>Регистрация</h2>
          <form
            className={s.registration__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={s.registration__form__main}>
              <CustomInput
                className={s.registration__input}
                name="first_name"
                placeholder="Имя"
                register={register}
                validation={{ required: 'Имя обязательно' }}
                errors={errors}
              />
              <CustomInput
                className={s.registration__input}
                name="login"
                placeholder="Логин"
                register={register}
                validation={{ required: 'Логин обязателен' }}
                errors={errors}
              />
              <CustomInput
                className={s.registration__input}
                name="last_name"
                placeholder="Фамилия"
                register={register}
                validation={{ required: 'Фамилия обязательна' }}
                errors={errors}
              />
              <CustomInput
                className={s.registration__input}
                name="password"
                type="password"
                placeholder="Пароль"
                register={register}
                validation={{
                  required: 'Пароль обязателен',
                  pattern: {
                    value: passwordRegExp,
                    message:
                      'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
                  },
                }}
                errors={errors}
              />
              <CustomInput
                className={s.registration__input}
                name="phone"
                placeholder="Телефон"
                register={register}
                validation={{ required: 'Телефон обязателен' }}
                errors={errors}
              />
              <CustomInput
                className={s.registration__input}
                name="repeat_password"
                type="password"
                placeholder="Повторите пароль"
                register={register}
                validation={{
                  required: 'Повторите пароль',
                  validate: value =>
                    value === watch('password') || 'Пароли не совпадают',
                }}
                errors={errors}
              />
              <CustomInput
                className={s.registration__input}
                name="email"
                placeholder="Email"
                register={register}
                validation={{
                  required: 'Email обязателен',
                  pattern: {
                    value: mailRegExp,
                    message: 'Неверный формат email',
                  },
                }}
                errors={errors}
              />
            </div>
            <CustomButton
              className={s.registration__btn}
              type="submit"
              buttonText="Зарегистрироваться"
            />
            <div className={s.error__container}>
              {errors.first_name && (
                <span className={s.error__message}>
                  {errors.first_name.message}
                </span>
              )}
              {errors.last_name && (
                <span className={s.error__message}>
                  {errors.last_name.message}
                </span>
              )}
              {errors.phone && (
                <span className={s.error__message}>{errors.phone.message}</span>
              )}
              {errors.email && (
                <span className={s.error__message}>{errors.email.message}</span>
              )}
              {errors.password && (
                <span className={s.error__message}>
                  {errors.password.message}
                </span>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
