import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Form } from '../../components/form';
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export function Login() {
  const authContext = AuthContext;
  const { authFormRef, onSubmit, signed, user } = useContext(authContext);

  if (signed) {
    return <Navigate to={`/user/${user?.username}`} />;
  }

  return (
    <Container>
      <h1>Fazer login</h1>
      <Form formRef={authFormRef} onSubmit={onSubmit}>
        <Input
          placeholder="usuario@email.com"
          type="email"
          name="email"
          Icon={<HiOutlineMail />}
        />

        <Input
          placeholder="senha"
          type="password"
          name="password"
          Icon={<HiOutlineLockClosed />}
        />

        <Button text="Entrar" />
      </Form>
    </Container>
  );
}
