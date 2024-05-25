import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Checking out the contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Checking out if there are 2 input boxes", () => {
  render(<Contact />);
  const InputBoxes = screen.getAllByRole("textbox");

  //Assertion
  expect(InputBoxes.length).toBe(2);
});
