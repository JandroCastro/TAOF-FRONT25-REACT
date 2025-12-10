import { createContext, useContext, useState } from "react";

const ReferralContext = createContext();

export function ReferralProvider({ children }) {
  const [referralCode, setReferralCode] = useState(null);

  return (
    <ReferralContext.Provider value={{ referralCode, setReferralCode }}>
      {children}
    </ReferralContext.Provider>
  );
}

export function useReferral() {
  return useContext(ReferralContext);
}
