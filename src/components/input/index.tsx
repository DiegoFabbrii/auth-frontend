import { ReactNode } from 'react';
import { Path, useFormContext } from 'react-hook-form';
import { IFormValues } from '../../contexts/signupContext';
import errorsJson from '../../utils/errors.json';

import styles from './styles.module.css';

interface InputProps {
  placeholder: string;
  type: string;
  Icon: ReactNode;
  inputName: Path<IFormValues>;
  fieldError: string;
}

export function Input({
  placeholder,
  type,
  Icon,
  inputName,
  fieldError,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className={styles.container__input}>
        {Icon}

        <input
          className={styles.input}
          placeholder={placeholder}
          {...register(inputName)}
          type={type}
          autoComplete="off"
        />
      </div>
      {errors[fieldError]?.type && (
        <small className={styles.messageError}>
          {/* @ts-expect-error */}
          {errorsJson[fieldError][errors[fieldError]?.type]}
        </small>
      )}
    </div>
  );
}
