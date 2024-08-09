import s from './styles.module.scss';

const CustomButton = ({ onClick, buttonText, className }) => {
  return (
    <button className={`${s.custom__btn} ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
