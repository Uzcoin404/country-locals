import { createContext, useState } from 'react';

interface OverflowContextInterface {
  globalOverflow: boolean;
  setGlobalOverflow: (value: boolean) => void;
}

export const OverflowContext = createContext({} as OverflowContextInterface);

type OverflowProviderProps = {
  children: React.ReactNode;
};

export const OverflowProvider = ({ children }: OverflowProviderProps) => {
  const [globalOverflow, setGlobalOverflow] = useState(false);

  /* eslint react/jsx-no-constructed-context-values: "off" */
  return (
    <OverflowContext.Provider value={{ globalOverflow, setGlobalOverflow }}>
      {children}
    </OverflowContext.Provider>
  );
};
