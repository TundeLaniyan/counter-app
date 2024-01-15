import React, { Dispatch, FC, useState } from "react";
import "./counter.css";

interface CounterProps {
  loggedInAs: string;
  setLoggedInAs: Dispatch<React.SetStateAction<string | undefined>>;
  counters: Record<string, number>;
  handleIncreaseCounter: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Counter: FC<CounterProps> = ({
  loggedInAs,
  setLoggedInAs,
  counters,
  handleIncreaseCounter,
}) => {
  const PageLimit = 5;
  const [page, setPage] = useState(1);

  const handleLogout = (): void => {
    setLoggedInAs(undefined);
  };

  const reducePage = (): void => {
    setPage(page - 1);
  };
  const increasePage = (): void => {
    setPage(page + 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counters</h1>
      <div className="heading">
        <p className="user-info">
          Logged in as <span>{loggedInAs}</span>
        </p>
      </div>

      <div className="counters-list">
        <ul>
          {Object.keys(counters)
            .slice((page - 1) * PageLimit, page * PageLimit)
            .map((username) => (
              <li key={username} className="counter-item">
                {username}: {counters[username]}
              </li>
            ))}
        </ul>
      </div>
      <div className="pagination">
        <div className="container">
          <button
            className="pagination-button"
            disabled={page === 1}
            onClick={reducePage}
          >
            {"<"}
          </button>
          <button
            className="pagination-button increase-button"
            onClick={handleIncreaseCounter}
          >
            Click here!
          </button>
          <button
            className="pagination-button"
            disabled={
              page === Math.ceil(Object.keys(counters).length / PageLimit)
            }
            onClick={increasePage}
          >
            {">"}
          </button>
        </div>
        <button className="logout-button " onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Counter;
