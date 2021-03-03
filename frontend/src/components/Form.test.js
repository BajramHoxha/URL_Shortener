import React from "react";
import Form from "./Form";

// Simple Unit Testing in our React Component
import { render, fireEvent, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

//Testing first if it renders the button within the Form Component
it("checkButtonRender", () => {
    const { queryByTitle } = render(<Form />);
    const btn = queryByTitle("submitButton");
    expect(btn).toBeTruthy();
});

test('Test the input field', async () => {
  const { getByLabelText, getByPlaceholderText, getByTestId, queryByTitle } = render(<Form />);
  const input = getByLabelText("original_url");
  const placeholder = getByPlaceholderText("Type url");
  expect(placeholder).toBeInTheDocument();
  const btn = queryByTitle("submitButton");
  expect(btn).toHaveAttribute('disabled');
});

// Test for events.
describe("clickButton", () => {
    it("onClick", () => {
        const { queryByTitle } = render(<Form />);
        const btn = queryByTitle("submitButton");
        fireEvent.click(btn);

        expect(container.firstChild).toHaveClass('foo')
    });
})
