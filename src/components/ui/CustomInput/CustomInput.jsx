import s from './styles.module.scss';

export const CustomInput = ({
  name,
  placeholder,
  type = 'text',
  onChange,
  className,
  register,
  validation,
  errors,
}) => {
  return (
    <div className={s.input__container}>
      <input
        className={`${s.custom__input} ${className}`}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...(register ? register(name, validation) : {})}
      />
      {errors && errors[name] && (
        <span className={s.error__message}>{errors[name].message}</span>
      )}
    </div>
  );
};
