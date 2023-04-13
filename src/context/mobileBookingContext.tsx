import { createContext, useState } from 'react';

interface MobileBookingContextInterface {
  showMobileBooking: boolean;
  setShowMobileBooking: (value: boolean) => void;
}

export const MobileBookingContext = createContext(
  {} as MobileBookingContextInterface,
);

type MobileBookingProviderProps = {
  children: React.ReactNode;
};

export const MobileBookingProvider = ({
  children,
}: MobileBookingProviderProps) => {
  const [showMobileBooking, setShowMobileBooking] = useState(false);

  /* eslint react/jsx-no-constructed-context-values: "off" */
  return (
    <MobileBookingContext.Provider
      value={{ showMobileBooking, setShowMobileBooking }}
    >
      {children}
    </MobileBookingContext.Provider>
  );
};
