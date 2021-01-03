import React from "react";
import App from "./App";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  test("Input text in formik form passes but with act warning", () => {
    render(<App />);

    const firstNameInput = screen.getByTestId("firstName");

    userEvent.type(firstNameInput, "MyFirstName");

    expect(firstNameInput.value).toBe("MyFirstName");
  });

  test("Input text in formik form doesn't pass, but without act warning", () => {
    render(<App />);

    const firstNameInput = screen.getByTestId("firstName");

    act(() => {
      userEvent.type(firstNameInput, "MyFirstName");
    });

    expect(firstNameInput.value).toBe("MyFirstName");
  });
});
