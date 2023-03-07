import { createContext, ReactNode, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { api } from '../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../validations/signupValidation';

interface ISignupContext {
  onSubmit: SubmitHandler<FieldValues>;
  userEmail: string | null;
  registered: boolean;
  methods: UseFormReturn<IFormValues, any>;
  loading: boolean;
}

export interface IFormValues {
  username: string;
  email: string;
  password: string;
}

interface SignupContextProviderProps {
  children: ReactNode;
}

export const SignupContext = createContext({} as ISignupContext);

export function SignupContextProvider({
  children,
}: SignupContextProviderProps) {
  const methods = useForm<IFormValues>({ resolver: yupResolver(signupSchema) });
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [registered, setRegistered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setLoading(true);
    api
      .post('/register', data)
      .then(() => {
        setUserEmail(data.email);
        setRegistered(true);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.error);
        setLoading(false);
      });
  };
  return (
    <SignupContext.Provider
      value={{ onSubmit, methods, userEmail, registered, loading }}
    >
      {children}
    </SignupContext.Provider>
  );
}
