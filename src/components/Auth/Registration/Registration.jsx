import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomInput from '../../ui/CustomInput/CustomInput';
import s from './styles.module.scss';
import {
  mailRegExp,
  passwordRegExp,
} from '../Authorization/validations/validationAuth';

export const Registration = () => {
  // const dispatch = useDispatch(); // Удален useDispatch
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('Form data:', data); // Логируем данные формы
    // Имитация успешной регистрации
    setTimeout(() => {
      alert('Вы успешно зарегистрированы (моковые данные)');
      // console.log('Registration data:', data); // Логируем данные регистрации
    }, 1000);
    // dispatch(registerUser(data)).then(action => {
    //   if (action.type === 'auth/register/fulfilled') {
    //     alert('Вы успешно зарегистрированы');
    //   } else {
    //     console.error('Registration error:', action.error.message); // Логируем ошибку
    //     alert(`Ошибка регистрации: ${action.error.message}`);
    //   }
    // });
  };

  const handleAuthorizeClick = () => {
    navigate('/authorization');
  };

  return (
    <div className={s.registration__container}>
      <div className={s.registration__content}>
        <div className={s.registration__logo}>Регистрация</div>
        <form
          className={s.registration__form}
          onSubmit={handleSubmit(onSubmit)}
        >
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
            name="last_name"
            placeholder="Фамилия"
            register={register}
            validation={{ required: 'Фамилия обязательна' }}
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
          <CustomButton
            className={s.registration__btn}
            type="submit"
            buttonText="Зарегистрироваться"
            onClick={handleAuthorizeClick}
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
    </div>
  );
};
