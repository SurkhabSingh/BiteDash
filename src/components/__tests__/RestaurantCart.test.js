import { render, screen } from "@testing-library/react";
import RestaurantCard, { withLabelCard } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardData.json";
import "@testing-library/jest-dom";

it("Should render restaurant card with data", () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("Should render restaurant card with highly acclaimed", () => {
  const HighlyAcclaimed = withLabelCard(RestaurantCard);
  render(<HighlyAcclaimed restaurant={MOCK_DATA} />);
  const tag = screen.getByText(/Highly Acclaimed/);
  expect(tag).toBeInTheDocument();
});
