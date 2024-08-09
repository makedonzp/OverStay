import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../components/ui/CustomInput';
import { CustomButton } from '../../components/ui/CustomButton';
import s from './styles.module.scss';
import femaleCharacter from '../../assets/images/woman.svg';
import maleCharacter from '../../assets/images/man.svg';
import logo_small from '../../assets/images/logo_auth.svg';

export const CharacterPage = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleGenderChange = selectedGender => {
    setGender(selectedGender);
  };

  const handlePlay = () => {
    if (name && gender) {
      // Логика для начала игры
      navigate('/training');
    } else {
      alert('Пожалуйста, введите имя и выберите пол.');
    }
  };

  return (
    <div className={s.characterPage__container}>
      <img
        src={femaleCharacter}
        alt="Female Character"
        className={s.characterPage__image}
      />
      <div className={s.characterPage__content}>
        <img src={logo_small} alt={'logo'} className={s.characterPage__logo} />
        <h2 className={s.characterPage__title}>Выбор персонажа</h2>
        <CustomInput
          className={s.characterPage__input}
          name="name"
          placeholder="Имя"
          onChange={handleNameChange}
        />
        <div className={s.characterPage__buttons}>
          <CustomButton
            className={`${s.characterPage__button} ${gender === 'female' ? s.selected : ''}`}
            onClick={() => handleGenderChange('female')}
            buttonText="Женский"
          />
          <CustomButton
            className={`${s.characterPage__button} ${gender === 'male' ? s.selected : ''}`}
            onClick={() => handleGenderChange('male')}
            buttonText="Мужской"
          />
        </div>
        <CustomButton
          className={s.characterPage__playButton}
          onClick={handlePlay}
          buttonText="Играть"
        />
      </div>
      <img
        src={maleCharacter}
        alt="Male Character"
        className={s.characterPage__image}
      />
    </div>
  );
};
