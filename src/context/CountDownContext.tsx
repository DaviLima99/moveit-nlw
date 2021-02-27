import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface ICountDownContextData {
  minutes: number;
  seconds: number;
  hasFineshed: boolean;
  active: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface ICountDownProviderProps {
  children: ReactNode;
}

export const CountDownContex = createContext({} as ICountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({children}: ICountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [hasFineshed, setHasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setActive(true);
  }

  function resetCountDown() {
    setActive(false);
    setHasFineshed(false);
    clearTimeout(countDownTimeout);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (active && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time === 0) {
      setHasFineshed(true);
      setActive(true);
      startNewChallenge();
    }
  }, [active, time])


  return(
    <CountDownContex.Provider 
      value={{
        minutes,
        seconds,
        hasFineshed,
        active,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountDownContex.Provider>
  );
};