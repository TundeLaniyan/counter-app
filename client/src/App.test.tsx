import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Counter", () => {
  test("it should render the Login component", () => {
    const { getByText } = render(<App />);
    expect(getByText("Login")).toBeInTheDocument();
  });
});
