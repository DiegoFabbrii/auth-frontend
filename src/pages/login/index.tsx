import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Form } from '../../components/form';
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import styles from './styles.module.css';
import { SignupContext } from '../../contexts/signupContext';

export function Login() {
  const authContext = AuthContext;
  const signupContext = SignupContext;

  const { authFormRef, onSubmit, signed, user } = useContext(authContext);
  const { userEmail } = useContext(signupContext);

  if (signed) {
    return <Navigate to={`/user/${user?.username}`} />;
  }

  return (
    <>
      <Container>
        <h1>Faça o seu login</h1>
        <Form formRef={authFormRef} onSubmit={onSubmit}>
          <label className={styles.label}>Endereço de e-mail</label>
          <Input
            placeholder="usuario@email.com"
            type="email"
            name="email"
            Icon={<HiOutlineMail />}
            inputValue={userEmail as string}
          />

          <label className={styles.label}>Senha</label>
          <Input
            placeholder="senha"
            type="password"
            name="password"
            Icon={<HiOutlineLockClosed />}
          />

          <Button text="Entrar" />
        </Form>

        <span className={styles.signupLink}>
          Não possui conta ? <Link to="/signup">cadastre-se</Link>
        </span>
      </Container>
    </>
  );
}
