import { useState, useEffect } from 'react';
import Dog1 from '../../assets/images/dog_1.svg';
import Dog2 from '../../assets/images/dog_2.svg';
import Dog3 from '../../assets/images/dog_3.svg';
import s from './styles.module.scss';

export const DogAnimation = ({ progress }) => {
  const [currentDog, setCurrentDog] = useState(0);

  useEffect(() => {
    const slideDuration = 3000;

    const dogInterval = setInterval(() => {
      setCurrentDog(prev => (prev + 1) % 3);
    }, slideDuration / 12);

    return () => {
      clearInterval(dogInterval);
    };
  }, []);

  const dogImages = [Dog1, Dog2, Dog1, Dog3];

  return (
    <img
      src={dogImages[currentDog]}
      alt="Dog"
      className={s.dog}
      style={{ left: `calc(10% + ${progress} * 0.75%)` }}
    />
  );
};
