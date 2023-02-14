import { createContext, ReactNode, useState, useEffect } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { api } from '../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '../validations/authValidation';

interface IAuthContext {
  onSubmit: SubmitHandler<FieldValues>;
  methods: UseFormReturn<IFormValues, any>;
  signed: boolean;
  user: IUser | null;
  logout(): ReactNode;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface IFormValues {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  username: string;
  email: string;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const methods = useForm<IFormValues>({ resolver: yupResolver(authSchema) });
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (() => {
      const userLoged = JSON.parse(
        localStorage.getItem('@Auth:user') as string
      );
      const tokenUser = localStorage.getItem('@Auth:token');

      if (userLoged && tokenUser) {
        setUser(userLoged);
      }
    })();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    api
      .post('/auth', data)
      .then((response) => {
        const { token, ...userData } = response.data;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser(userData);

        localStorage.setItem('@Auth:token', token);
        localStorage.setItem('@Auth:user', JSON.stringify(userData));
      })
      .catch((error) => alert(error.response.data.error));
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  };

  return (
    <AuthContext.Provider
      value={{ methods, onSubmit, signed: !!user, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
