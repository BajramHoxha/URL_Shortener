import React from "react";
import Form from "./Form";

// Simple Unit Testing in our React Component
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

//Testing first if it renders the button within the Form Component
it("checkButtonRender", () => {
    const { queryByTitle } = render(<Form />);
    const btn = queryByTitle("submitButton");
    expect(btn).toBeTruthy();
});

test('Test the input', () => {
  const { getByLabelText, getByTestId } = render(<Form />);
  const input = getByLabelText("original_url");
});

describe("clickButton", () => {
    it("onClick", () => {
        const { queryByTitle } = render(<Form />);
        const btn = queryByTitle("submitButton");
        fireEvent.click(btn)
    });
})
