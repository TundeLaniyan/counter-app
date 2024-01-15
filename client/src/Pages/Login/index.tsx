import React, { FC, FormEvent, useState } from "react";
import "./login.css";

interface LoginProps {
  login: (e: FormEvent<HTMLFormElement>, username: string) => void;
}

const Login: FC<LoginProps> = ({ login }) => {
  const [username, setUsername] = useState<string>("");

  const handleUsernameChange = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setUsername(e.currentTarget.value);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome</h1>
      <div className="">
        <form className="login-form" onSubmit={(e) => login(e, username)}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
            className="login-input"
            required
          />
          <button type="submit" className="login-button" data-testid="login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
