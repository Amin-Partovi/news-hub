import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component", () => {
  it("should call onChange function and update the input value", () => {
    const handleChange = jest.fn();
    render(
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Type here"
        data-testid="test-input"
      />
    );

    const inputElement = screen.getByPlaceholderText("Type here");
    fireEvent.change(inputElement, { target: { value: "Test Input" } });

    expect(handleChange).toHaveBeenCalled();
    expect(inputElement.value).toBe("Test Input");
  });

  it("should disable the input when disabled prop is set", () => {
    render(<Input type="text" disabled placeholder="Type here" />);

    const inputElement = screen.getByPlaceholderText("Type here");

    expect(inputElement).toBeDisabled();
  });

  it("should not disable the input when disabled prop is not set", () => {
    render(<Input type="text" placeholder="Type here" />);

    const inputElement = screen.getByPlaceholderText("Type here");

    expect(inputElement).not.toBeDisabled();
  });
});
