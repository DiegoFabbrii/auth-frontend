import styles from './styles.module.css';

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
}

export function Input({ name, placeholder, type }: InputProps) {
  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      type={type}
      required
    />
  );
}
