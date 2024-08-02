import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './styles.module.scss';

export const HomePage = () => {
  const [showText, setShowText] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const textFadeOutTimeout = setTimeout(() => {
      setShowText(false);
      setShowProgressBar(true);
    }, 5000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(textFadeOutTimeout);
    };
  }, []);

  useEffect(() => {
    if (!showProgressBar) return;

    const totalDuration = 15000;
    const slideDuration = 3000;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 100 / (totalDuration / 20);
        if (newProgress >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => navigate('/authorization'), 500);
          return 100;
        }
        return newProgress;
      });
    }, 20);

    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 5);
    }, slideDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [showProgressBar, navigate]);

  const slideColors = ['#629F42', '#FFE74F', '#4f64ff', '#f400fd', '#696969'];

  return (
    <div className={s.home__container}>
      <div className={`${s.home__text} ${showText ? s.fadeIn : s.fadeOut}`}>
        Ночлежка
      </div>
      {showProgressBar && (
        <>
          <div className={s.home__slider}>
            {slideColors.map((color, index) => (
              <div
                key={index}
                className={`${s.home__slide} ${currentSlide === index ? s.fadeIn : s.fadeOut}`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div className={s.home__progressBar}>
            <div
              className={s.home__progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};
