import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from '../../components/container';
import { Form } from '../../components/form';

import { useContext, useEffect } from 'react';

import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from 'react-icons/hi';

import { Link, Navigate } from 'react-router-dom';

import styles from './styles.module.css';
import { SignupContext } from '../../contexts/signupContext';
import { FormProvider } from 'react-hook-form';

export function Signup() {
  const signupContext = SignupContext;
  const { registered, methods, onSubmit } = useContext(signupContext);

  useEffect(() => {
    methods.reset();
  }, []);

  if (registered) return <Navigate to="/" />;

  return (
    <Container>
      <h1>Crie a sua conta</h1>
      <FormProvider {...methods}>
        <Form onSubmit={onSubmit}>
          <label className={styles.label}>Nome de usuário</label>
          <Input
            fieldError="username"
            type="text"
            Icon={<HiOutlineUserCircle />}
            placeholder="usuario"
            inputName="username"
          />

          <label className={styles.label}>Endereço de e-mail</label>
          <Input
            fieldError="email"
            type="text"
            Icon={<HiOutlineMail />}
            placeholder="usuario@email.com"
            inputName="email"
          />

          <label className={styles.label}>Senha</label>
          <Input
            fieldError="password"
            type="password"
            Icon={<HiOutlineLockClosed />}
            placeholder="senha"
            inputName="password"
          />

          <Button text="cadastre-se" />
        </Form>
      </FormProvider>

      <span className={styles.signinLink}>
        Já possui uma conta ? <Link to="/">Fazer login</Link>
      </span>
    </Container>
  );
}
