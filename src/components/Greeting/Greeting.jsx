import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton/CustomButton';
import s from './styles.module.scss';

export const Greeting = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/authorization');
  };

  return (
    <div className={s.greeting__container}>
      <div className={s.greeting__content}>
        <div className={s.greeting__title}>Ночлежка</div>
        <div className={s.greeting__description}>Игра для сотрудников</div>
        <CustomButton
          onClick={handleButtonClick}
          buttonText="Войти"
          className={s.greeting__btn}
        />
      </div>
    </div>
  );
};

