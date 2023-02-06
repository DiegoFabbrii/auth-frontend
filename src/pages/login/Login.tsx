import styles from './styles.module.css';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Input } from '../../components/input/Input';

export function Login() {
  return (
    <div className={styles.container}>
      <h1>Fazer login</h1>
      <form className={styles.container__form}>
        <div className={styles.container__input}>
          <HiOutlineMail color="#7e868c" />
          <Input placeholder="usuario@email.com" type="email" name="email" />
        </div>

        <div className={styles.container__input}>
          <HiOutlineLockClosed color="#7e868c" />
          <Input placeholder="senha" type="password" name="password" />
        </div>
        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
