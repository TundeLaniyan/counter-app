import React, { useState } from "react";
import Login from "./Pages/Login/container";
import Counter from "./Pages/Counter/container";

const App: React.FC = () => {
  const [loggedInAs, setLoggedInAs] = useState<string | undefined>(undefined);
  const [counters, setCounters] = useState<Record<string, number>>({});

  return (
    <main className="App">
      {loggedInAs === undefined ? (
        <Login setLoggedInAs={setLoggedInAs} setCounters={setCounters} />
      ) : (
        <Counter
          loggedInAs={loggedInAs}
          setLoggedInAs={setLoggedInAs}
          counters={counters}
          setCounters={setCounters}
        />
      )}
    </main>
  );
};

export default App;

// Given more time I would had added web socket.IO for Live-refresh for simultaneous users
// I would had added a database for persiting the records for when the server is down
