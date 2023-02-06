import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Form } from '../../components/form';

export function Login() {
  return (
    <Container>
      <h1>Fazer login</h1>
      <Form>
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
