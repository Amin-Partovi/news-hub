import { render, screen } from "@testing-library/react";
import { DatePicker } from "./DatePicker";

describe("DatePicker Component", () => {
  it("should display the selected date", () => {
    const initialValue = "2023-11-15";
    render(
      <DatePicker
        onChange={() => {}}
        placeholder="Select a date"
        initialValue={initialValue}
      />
    );

    const selectedDate = screen.getByText("November 15th, 2023");
    expect(selectedDate).toBeInTheDocument();
  });
});
