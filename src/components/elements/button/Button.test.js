import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Button displays child as text", () => {
  render(<Button>Click Me</Button>);
  const childText = screen.getByText("Click Me");
  expect(childText).toBeInTheDocument();
});

test("Button onClick fires", () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock}>Click Me</Button>);

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});

test("Button is disabled when disabled prop is true", () => {
  render(<Button disabled>Disabled Button</Button>);
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});
