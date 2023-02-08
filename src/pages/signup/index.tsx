import { SyntheticEvent, useRef } from 'react';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from '../../components/container';
import { Form } from '../../components/form';
import { api } from '../../services/api';

import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from 'react-icons/hi';

export function Signup() {
  const signUpFormRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    if (signUpFormRef.current) {
      const username = signUpFormRef.current.username.value;
      const email = signUpFormRef.current.email.value;
      const password = signUpFormRef.current.password.value;

      api
        .post('/register', { username, email, password })
        .then((response) => {
          alert(response.data.message);

          if (signUpFormRef.current) {
            signUpFormRef.current.username.value = '';
            signUpFormRef.current.email.value = '';
            signUpFormRef.current.password.value = '';
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    }
  };

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form onSubmit={onSubmit} formRef={signUpFormRef}>
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
