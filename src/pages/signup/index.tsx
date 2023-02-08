import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from '../../components/container';
import { Form } from '../../components/form';

import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from 'react-icons/hi';

export function Signup() {
  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form>
        <Input
          type="text"
          name="username"
          Icon={<HiOutlineUserCircle />}
          placeholder="nome de usuário"
        />

        <Input
          type="email"
          name="email"
          Icon={<HiOutlineMail />}
          placeholder="usuario@email.com"
        />
        <Input
          type="password"
          name="password"
          Icon={<HiOutlineLockClosed />}
          placeholder="senha"
        />
        <Button text="cadastre-se" />
      </Form>
    </Container>
  );
}
