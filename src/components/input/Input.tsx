import { ReactNode } from 'react';
import styles from './styles.module.css';

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  Icon: ReactNode;
}

export function Input({ name, placeholder, type, Icon }: InputProps) {
  return (
    <div className={styles.container__input}>
      {Icon}

      <input
        className={styles.input}
        name={name}
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}
