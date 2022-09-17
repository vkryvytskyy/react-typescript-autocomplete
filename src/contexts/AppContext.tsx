import React, {
  createContext, useContext, PropsWithChildren,
  Dispatch, SetStateAction, useState,
} from 'react';
import { Person } from '../typedefs';

interface AppContextType {
  selectedPerson?: Person | null;
  setSelectedPerson?: Dispatch<SetStateAction<Person | null>>;
  query?: string;
  setQuery?: Dispatch<SetStateAction<string>>;
}

type AppContextHook = () => AppContextType;

const AppContext = createContext<AppContextType>({
  selectedPerson: null,
  setSelectedPerson: () => { },
  query: '',
  setQuery: () => { },
});

export const AppContextProvider: React.FC<PropsWithChildren<AppContextType>> = ({
  children,
  ...value
}) => {
  const [
    selectedPerson,
    setSelectedPerson,
  ] = useState<Person | null>(null);
  const [
    query,
    setQuery,
  ] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        ...value,
        selectedPerson,
        setSelectedPerson,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext: AppContextHook = () => (
  useContext(AppContext)
);
