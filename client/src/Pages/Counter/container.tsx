import React, { Dispatch, FC } from "react";
import { increaseCounter } from "../../api";
import Counter from ".";

interface CounterProps {
  loggedInAs: string;
  setLoggedInAs: Dispatch<React.SetStateAction<string | undefined>>;
  counters: Record<string, number>;
  setCounters: Dispatch<React.SetStateAction<Record<string, number>>>;
}

const CounterContainer: FC<CounterProps> = ({
  loggedInAs,
  setLoggedInAs,
  counters,
  setCounters,
}) => {
  const handleIncreaseCounter = (
    e: React.FormEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    increaseCounter(loggedInAs)
      .then((response) => setCounters(response.data.counters))
      .catch(console.error);
  };

  return (
    <Counter
      handleIncreaseCounter={handleIncreaseCounter}
      loggedInAs={loggedInAs}
      setLoggedInAs={setLoggedInAs}
      counters={counters}
    />
  );
};

export default CounterContainer;
