import { ReactNode } from 'react';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

interface FormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

export function Form({ children, onSubmit }: FormProps) {
  const methods = useFormContext();

  return (
    <form
      className={styles.container__form}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
}
