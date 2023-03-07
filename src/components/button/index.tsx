import { Loader } from '../loader';
import styles from './styles.module.css';

interface ButtonProps {
  text: string;
  loading: boolean;
}

export function Button({ text, loading }: ButtonProps) {
  return (
    <button className={styles.button} type="submit">
      {loading ? <Loader /> : text}
    </button>
  );
}
