import {
  createContext,
  ReactNode,
  RefObject,
  SyntheticEvent,
  useRef,
  useState,
} from 'react';

import { api } from '../services/api';

interface SignUpContextType {
  signupFormRef: RefObject<HTMLFormElement>;
  onSubmit: (event: SyntheticEvent) => void;
  registered: boolean;
  userEmail: string | null;
  setUserEmail: (value: string | null) => void;
}

interface SignUpContextProviderProps {
  children: ReactNode;
}

export const SignupContext = createContext<SignUpContextType>(
  {} as SignUpContextType
);

export function SignupContextProvider({
  children,
}: SignUpContextProviderProps) {
  const signupFormRef = useRef<HTMLFormElement | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [registered, setRegistered] = useState<boolean>(false);

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (signupFormRef.current) {
      const username = signupFormRef.current.username.value;
      const email = signupFormRef.current.email.value;
      const password = signupFormRef.current.password.value;

      api
        .post('/register', { username, email, password })
        .then((response) => {
          setRegistered(true);
          setUserEmail(email);
        })
        .catch((error) => alert(error.response.data.error));
    }
  }

  return (
    <SignupContext.Provider
      value={{ signupFormRef, onSubmit, registered, userEmail, setUserEmail }}
    >
      {children}
    </SignupContext.Provider>
  );
}
