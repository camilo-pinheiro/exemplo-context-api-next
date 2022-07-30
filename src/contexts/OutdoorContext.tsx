import { createContext, ReactNode, useContext, useState } from 'react';

type OutdoorContextData = {
  outdoor: any;
  defineOutdoor: (outdoor) => void
}

const outdoorContext = createContext({} as OutdoorContextData);

interface OutdoorProviderProps {
  children: ReactNode
}

export function OutdoorProvider({ children }: OutdoorProviderProps) {

  const [outdoor, setOutdoor] = useState<any>(true);

  const defineOutdoor = (outdoor) => {
    setOutdoor(outdoor);
  }

  return (
    <outdoorContext.Provider value={ {outdoor, defineOutdoor} }>
      {children}
    </outdoorContext.Provider>
  )
}


export function useOutdoor() {
  const context = useContext(outdoorContext);
  return context;
}