import { ReactNode, RefObject, SyntheticEvent } from 'react';
import styles from './styles.module.css';

interface FormProps {
  children: ReactNode;
  formRef: RefObject<HTMLFormElement>;
  onSubmit: (event: SyntheticEvent) => void;
}

export function Form({ children, formRef, onSubmit }: FormProps) {
  return (
    <form className={styles.container__form} onSubmit={onSubmit} ref={formRef}>
      {children}
    </form>
  );
}
