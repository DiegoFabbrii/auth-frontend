import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Form } from '../../components/form';
import { AuthContext } from '../../contexts/authContext';
import { useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import styles from './styles.module.css';

import { FormProvider } from 'react-hook-form';

export function Login() {
  const authContext = AuthContext;

  const { methods, onSubmit, signed, user, loading } = useContext(authContext);

  useEffect(() => {
    methods.reset();
  }, []);

  if (signed) return <Navigate to={`/user/${user?.username}`} />;

  return (
    <>
      <Container>
        <h1>Faça o seu login</h1>
        <FormProvider {...methods}>
          <Form onSubmit={onSubmit}>
            <label className={styles.label}>Endereço de e-mail</label>
            <Input
              fieldError="email"
              type="text"
              placeholder="usuario@email.com"
              Icon={<HiOutlineMail />}
              inputName="email"
            />

            <label className={styles.label}>Senha</label>
            <Input
              fieldError="password"
              placeholder="senha"
              type="password"
              Icon={<HiOutlineLockClosed />}
              inputName="password"
            />

            <Button text="Entrar" loading={loading} />
          </Form>
        </FormProvider>

        <span className={styles.signupLink}>
          Não possui conta ? <Link to="/signup">cadastre-se</Link>
        </span>
      </Container>
    </>
  );
}
