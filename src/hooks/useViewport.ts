import { useContext } from 'react';
import { ViewportContext } from '../context/ViewPortContext';

const useViewport = () => {
  const { width, height } = useContext(ViewportContext);

  return { width, height };
};
export default useViewport;
