import {
  createContext,
  ReactNode,
  RefObject,
  SyntheticEvent,
  useRef,
  useState,
  useEffect,
} from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../services/api';

interface IAuthContext {
  authFormRef: RefObject<HTMLFormElement>;
  onSubmit: (event: SyntheticEvent) => void;
  user: IUser | null;
  signed: boolean;
  logout: () => ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  username: string;
  email: string;
  token?: string;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const authFormRef = useRef<HTMLFormElement | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    function getLocalStorageData() {
      const tokenStorage = localStorage.getItem('@Auth:token');
      const userStorage = localStorage.getItem('@Auth:user');

      if (tokenStorage && userStorage) {
        setUser(JSON.parse(userStorage as string));
      }
    }

    getLocalStorageData();
  }, []);

  function onSubmit(event: SyntheticEvent): void {
    event.preventDefault();

    if (authFormRef.current) {
      const email = authFormRef.current.email.value;
      const password = authFormRef.current.password.value;

      api
        .post('/auth', { email, password })
        .then((response) => {
          const { token, ...userData }: IUser = response.data;

          setUser(userData);

          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          localStorage.setItem('@Auth:token', token as string);
          localStorage.setItem('@Auth:user', JSON.stringify(userData));
        })
        .catch((error) => alert(error.response.data.error));
    }
  }

  function logout(): ReactNode {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  return (
    <AuthContext.Provider
      value={{ authFormRef, onSubmit, user, signed: !!user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
