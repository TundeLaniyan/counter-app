import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./index";

describe("Counter", () => {
  it("should render the component with the correct title and user information", () => {
    const loggedInAs = "John";
    const setLoggedInAs = jest.fn();
    const counters = { John: 5, Jane: 3 };
    const handleIncreaseCounter = jest.fn();

    render(
      <Counter
        loggedInAs={loggedInAs}
        setLoggedInAs={setLoggedInAs}
        counters={counters}
        handleIncreaseCounter={handleIncreaseCounter}
      />
    );

    expect(screen.getByText("Counters")).toBeInTheDocument();
    expect(screen.getByText(loggedInAs)).toBeInTheDocument();
  });

  it("should display the counters list with the correct usernames and values", () => {
    const loggedInAs = "John";
    const setLoggedInAs = jest.fn();
    const counters = { John: 5, Jane: 3 };
    const handleIncreaseCounter = jest.fn();

    render(
      <Counter
        loggedInAs={loggedInAs}
        setLoggedInAs={setLoggedInAs}
        counters={counters}
        handleIncreaseCounter={handleIncreaseCounter}
      />
    );

    expect(screen.getByText("John: 5")).toBeInTheDocument();
    expect(screen.getByText("Jane: 3")).toBeInTheDocument();
  });

  it("should handle pagination correctly, displaying the correct counters for each page", () => {
    const loggedInAs = "John";
    const setLoggedInAs = jest.fn();
    const counters = {
      John: 5,
      Jane: 3,
      Mark: 2,
      Sarah: 1,
      Mike: 4,
      Harry: 7,
      Aaron: 3,
    };
    const handleIncreaseCounter = jest.fn();

    render(
      <Counter
        loggedInAs={loggedInAs}
        setLoggedInAs={setLoggedInAs}
        counters={counters}
        handleIncreaseCounter={handleIncreaseCounter}
      />
    );

    expect(screen.queryByText("John: 5")).toBeInTheDocument();
    expect(screen.queryByText("Jane: 3")).toBeInTheDocument();
    expect(screen.queryByText("Mark: 2")).toBeInTheDocument();
    expect(screen.queryByText("Sarah: 1")).toBeInTheDocument();
    expect(screen.queryByText("Mike: 4")).toBeInTheDocument();
    expect(screen.queryByText("Harry: 7")).not.toBeInTheDocument();
    expect(screen.queryByText("Aaron: 3")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(">"));

    expect(screen.queryByText("John: 5")).not.toBeInTheDocument();
    expect(screen.queryByText("Jane: 3")).not.toBeInTheDocument();
    expect(screen.queryByText("Mark: 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Sarah: 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Mike: 4")).not.toBeInTheDocument();
    expect(screen.queryByText("Harry: 7")).toBeInTheDocument();
    expect(screen.queryByText("Aaron: 3")).toBeInTheDocument();
  });

  it("should handle logging out coorectly", () => {
    const loggedInAs = "John";
    const setLoggedInAs = jest.fn();
    const counters = { John: 5 };
    const handleIncreaseCounter = jest.fn();

    render(
      <Counter
        loggedInAs={loggedInAs}
        setLoggedInAs={setLoggedInAs}
        counters={counters}
        handleIncreaseCounter={handleIncreaseCounter}
      />
    );

    fireEvent.click(screen.getByText("logout"));

    expect(setLoggedInAs).toHaveBeenCalled();
    expect(setLoggedInAs).toHaveBeenCalledWith(undefined);
  });
});
