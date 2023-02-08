import { ReactNode, RefObject, SyntheticEvent } from 'react';
import styles from './styles.module.css';

interface FormProps {
  children: ReactNode;
  onSubmit: (event: SyntheticEvent) => void;
  formRef: RefObject<HTMLFormElement>;
}

export function Form({ children, onSubmit, formRef }: FormProps) {
  return (
    <form className={styles.container__form} onSubmit={onSubmit} ref={formRef}>
      {children}
    </form>
  );
}
