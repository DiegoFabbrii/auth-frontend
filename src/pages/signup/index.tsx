import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from '../../components/container';
import { Form } from '../../components/form';

import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { SignupContext } from '../../contexts/signupContext';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import styles from './styles.module.css';

export function Signup() {
  const signupContext = SignupContext;
  const { onSubmit, signupFormRef, registered } = useContext(signupContext);

  if (registered) return <Navigate to="/" />;

  return (
    <Container>
      <h1>Crie a sua conta</h1>
      <Form onSubmit={onSubmit} formRef={signupFormRef}>
        <label className={styles.label}>Nome de usuário</label>
        <Input
          type="text"
          name="username"
          Icon={<HiOutlineUserCircle />}
          placeholder="usuario"
        />

        <label className={styles.label}>Endereço de e-mail</label>
        <Input
          type="email"
          name="email"
          Icon={<HiOutlineMail />}
          placeholder="usuario@email.com"
        />

        <label className={styles.label}>Senha</label>
        <Input
          type="password"
          name="password"
          Icon={<HiOutlineLockClosed />}
          placeholder="senha"
        />

        <Button text="cadastre-se" />
      </Form>

      <span className={styles.signinLink}>
        Já possui uma conta ? <Link to="/">Fazer login</Link>
      </span>
    </Container>
  );
}
