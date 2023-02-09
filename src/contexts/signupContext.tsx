import {
  createContext,
  ReactNode,
  RefObject,
  SyntheticEvent,
  useRef,
} from 'react';
import { api } from '../services/api';

interface SignUpContextType {
  signupFormRef: RefObject<HTMLFormElement>;
  onSubmit: (event: SyntheticEvent) => void;
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

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (signupFormRef.current) {
      const username = signupFormRef.current.username.value;
      const email = signupFormRef.current.email.value;
      const password = signupFormRef.current.password.value;

      api
        .post('/register', { username, email, password })
        .then((response) => alert(response.data.message))
        .catch((error) => alert(error.response.data.error));
    }
  }

  return (
    <SignupContext.Provider value={{ signupFormRef, onSubmit }}>
      {children}
    </SignupContext.Provider>
  );
}
