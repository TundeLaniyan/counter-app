import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

describe("code snippet", () => {
  it("should render a login form with a username input and a login button", () => {
    render(<Login login={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("Username");
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(usernameInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should update the username state when the user types in the input field", () => {
    render(<Login login={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("Username");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    expect(usernameInput.value).toBe("testuser");
  });

  it("should render the login form with an empty username input by default", () => {
    render(<Login login={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("Username");

    expect(usernameInput.value).toBe("");
  });

  it("should call the login function passed as a prop when the user submits the form with a username", () => {
    const mockLogin = jest.fn();
    render(<Login login={mockLogin} />);
    const usernameInput = screen.getByPlaceholderText("Username");
    const loginButton = screen.getByTestId("login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.submit(loginButton);

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith(expect.anything(), "testuser");
  });
});
