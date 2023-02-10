import { createContext, ReactNode } from 'react';
import { AuthContextProvider } from './authContext';
import { SignupContextProvider } from './signupContext';

const MainContext = createContext({});

interface MainContextProviderProps {
  children: ReactNode;
}

export function MainContextProvider({ children }: MainContextProviderProps) {
  return (
    <MainContext.Provider value={{}}>
      <SignupContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </SignupContextProvider>
    </MainContext.Provider>
  );
}
