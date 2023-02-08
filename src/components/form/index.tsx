import { ReactNode, useContext } from 'react';
import { SignupContext } from '../../contexts/signupContext';
import styles from './styles.module.css';

interface FormProps {
  children: ReactNode;
}

export function Form({ children }: FormProps) {
  const signupContext = SignupContext;
  const { onSubmit, signupFormRef } = useContext(signupContext);
  return (
    <form
      className={styles.container__form}
      onSubmit={onSubmit}
      ref={signupFormRef}
    >
      {children}
    </form>
  );
}
