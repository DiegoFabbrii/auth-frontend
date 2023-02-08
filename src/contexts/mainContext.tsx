import { createContext, ReactNode } from 'react';
import { SignupContextProvider } from './signupContext';

const MainContext = createContext({});

interface MainContextProviderProps {
  children: ReactNode;
}

export function MainContextProvider({ children }: MainContextProviderProps) {
  return (
    <MainContext.Provider value={{}}>
      <SignupContextProvider>{children}</SignupContextProvider>
    </MainContext.Provider>
  );
}
