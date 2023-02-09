import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

import styles from './styles.module.css';

export function User() {
  const authContext = AuthContext;
  const { user, logout } = useContext(authContext);
  return (
    <div className={styles.container}>
      <h1>Olá, {user?.username}, seja bem vindo (a) a sua conta.</h1>
      <button className={styles.button} onClick={logout}>
        Sair
      </button>
    </div>
  );
}
