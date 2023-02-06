import { ReactNode } from 'react';
import styles from './styles.module.css';

interface FormProps {
  children: ReactNode;
}

export function Form({ children }: FormProps) {
  return <form className={styles.container__form}>{children}</form>;
}
