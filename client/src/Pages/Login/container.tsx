import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { createUser, getCounters } from "../../api";
import Login from ".";

interface LoginProps {
  setLoggedInAs: Dispatch<SetStateAction<string | undefined>>;
  setCounters: Dispatch<SetStateAction<Record<string, number>>>;
}

const LoginContainer: FC<LoginProps> = ({ setLoggedInAs, setCounters }) => {
  const login = (e: FormEvent<HTMLFormElement>, username: string): void => {
    e.preventDefault();
    createUser(username)
      .then((response) => setLoggedInAs(response.data.username))
      .then(() => fetchCounters())
      .catch(console.error);
  };

  const fetchCounters = (): void => {
    getCounters()
      .then((response) => setCounters(response.data.counters))
      .catch(console.error);
  };

  return <Login login={login} />;
};

export default LoginContainer;
