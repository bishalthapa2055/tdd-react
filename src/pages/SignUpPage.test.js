import userEvent from "@testing-library/user-event";
import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import axios from "axios";

describe("inital render of signup page", () => {
  test("Initial Render", () => {
    render(<SignUpPage />);
    const header = screen.queryByRole("heading", { name: /sign up/i });
    expect(header).toBeInTheDocument();
  });
});

describe("Initital condition of sinnup page", () => {
  const renderFun = () => {
    render(<SignUpPage />);
  };
  test("should have h1 tag", () => {
    renderFun();
    const header = screen.queryByRole("heading", { name: /sign up/i });
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
  });
  test("should have username field", () => {
    renderFun();
    const username = screen.getByLabelText(/username/i);
    expect(username).toBeInTheDocument();
  });
  test("should have email field", () => {
    renderFun();
    const email = screen.queryByLabelText(/e-mail/i);
    expect(email).toBeInTheDocument();
  });
  test("should have password field", () => {
    renderFun();
    const password = screen.getByLabelText("Password");
    expect(password).toBeInTheDocument();
    expect(password).toHaveProperty("type", "password");
  });

  test("for repeat password", () => {
    renderFun();
    const repeat = screen.queryByLabelText("Password Repeat");
    expect(repeat).toBeInTheDocument();
    expect(repeat).toBeVisible();
    expect(repeat.type).toBe("password");
  });
  test("for button", () => {
    renderFun();
    const button = screen.queryByRole("button", { name: "Sign Up" });
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
  });

  test("inital condition of button", () => {
    renderFun();
    const button = screen.queryByRole("button", { name: /sign up/i });
    expect(button).toBeDisabled();
  });
});

describe("Interactions", () => {
  const renderFun = () => {
    render(<SignUpPage />);
  };
  test("After each input", async () => {
    renderFun();
    const password = screen.queryByLabelText("Password");
    const passwordRepeat = screen.queryByLabelText("Password Repeat");
    expect(password).toBeInTheDocument();
    expect(passwordRepeat).toBeInTheDocument();
    const button = screen.queryByRole("button", { name: /sign up/i });
    expect(button).toBeDisabled();

    await userEvent.type(password, "Bishal");
    await userEvent.type(passwordRepeat, "Bishal");
    expect(button).toBeEnabled();

    await userEvent.type(password, "hello there");
    await userEvent.type(passwordRepeat, "bishal");
    expect(button).toBeDisabled();
  });

  test("For an api call", async () => {
    renderFun();
    const username = screen.queryByLabelText("Username");
    const email = screen.queryByLabelText("E-mail");
    const password = screen.queryByLabelText("Password");
    const passwordRepeat = screen.queryByLabelText("Password Repeat");
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(passwordRepeat).toBeInTheDocument();

    const button = screen.queryByRole("button", { name: /sign up/i });
    expect(button).toBeDisabled();

    await userEvent.type(username, "Bishal");
    await userEvent.type(email, "admin@gmail.com");
    await userEvent.type(password, "Hello");
    await userEvent.type(passwordRepeat, "Hello");

    expect(button).toBeEnabled();

    const mockFn = jest.fn();
    axios.post = mockFn;

    await userEvent.click(button);
    const firstCallofMockFunction = mockFn.mock.calls[0];
    const body = firstCallofMockFunction[1];
    expect(body).toEqual({
      username: "Bishal",
      email: "admin@gmail.com",
      password: "Hello",
      passwordRepeat: "Hello",
    });
  });
});
