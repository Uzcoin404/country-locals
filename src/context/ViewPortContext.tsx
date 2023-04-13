import { createContext, useEffect, useState } from 'react';

interface ViewportContextInterface {
  width: number;
  height: number;
}

export const ViewportContext = createContext({} as ViewportContextInterface);

type ViewportProviderProps = {
  children: React.ReactNode;
};

export const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  let resizeID: ReturnType<typeof setTimeout>;

  const doneResizing = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const handleWindowResize = () => {
    clearTimeout(resizeID);
    resizeID = setTimeout(doneResizing, 10);
  };

  /* eslint react-hooks/exhaustive-deps: "off" */
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // Trigger on window resize function
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  /* eslint react/jsx-no-constructed-context-values: "off" */
  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};
