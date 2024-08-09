import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../ui/CustomInput';
import { CustomButton } from '../../ui/CustomButton';
import logo_small from '../../../assets/images/logo_auth.svg';
import s from './styles.module.scss';

export const ChangePassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleCodeChange = e => {
    setCode(e.target.value);
  };

  const handleNewPasswordChange = e => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmitEmail = () => {
    if (email) {
      setMessage('');
      setStep(2);
    } else {
      setMessage('Пожалуйста, введите ваш email.');
    }
  };

  const handleSubmitCode = () => {
    if (code) {
      setMessage('');
      setStep(3);
    } else {
      setMessage('Пожалуйста, введите код.');
    }
  };

  const handleSubmitNewPassword = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setMessage('Пароль успешно изменен.');
      setTimeout(() => {
        navigate('/authorization');
      }, 2000); // Переход через 2 секунды после успешного изменения пароля
    } else {
      setMessage('Пароли не совпадают или пусты.');
    }
  };

  return (
    <div className={s.changepassword__container}>
      <div className={s.changepassword__content}>
        <img src={logo_small} alt={'logo'} className={s.changepassword__logo} />
        <h2 className={s.changepassword__title}>Восстановление пароля</h2>
        {step === 1 && (
          <>
            <p>
              Введите адрес Вашей электронной почты, на него мы вышлем код для
              сброса пароля
            </p>
            <CustomInput
              className={s.changepassword__input}
              name="email"
              placeholder="Почта"
              onChange={handleEmailChange}
            />
            <CustomButton
              className={s.changepassword__btn}
              onClick={handleSubmitEmail}
              buttonText="Отправить"
            />
          </>
        )}
        {step === 2 && (
          <>
            <p>Введите 6-значный код, который мы отправили на почту {email}</p>
            <CustomInput
              className={s.changepassword__input}
              name="code"
              placeholder="Код"
              onChange={handleCodeChange}
            />
            <CustomButton
              className={s.changepassword__btn}
              onClick={handleSubmitCode}
              buttonText="Подтвердить"
            />
          </>
        )}
        {step === 3 && (
          <>
            <p>Придумайте новый пароль</p>
            <CustomInput
              className={s.changepassword__input}
              name="newPassword"
              type="password"
              placeholder="Новый пароль"
              onChange={handleNewPasswordChange}
            />
            <CustomInput
              className={s.changepassword__input}
              name="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
              onChange={handleConfirmPasswordChange}
            />
            <CustomButton
              className={s.changepassword__btn}
              onClick={handleSubmitNewPassword}
              buttonText="Сохранить"
            />
          </>
        )}
        <div className={s.message__container}>
          {message && <div className={s.message}>{message}</div>}
        </div>
      </div>
    </div>
  );
};
