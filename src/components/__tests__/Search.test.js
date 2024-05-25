import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "./mocks/resListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Cards before and after searching Kwality", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Kwality" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should render Cards after Top Rated Restaurants is clicked", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

  fireEvent.click(topRatedButton);

  const cardsAfterTopRated = screen.getAllByTestId("resCard");

  expect(cardsAfterTopRated.length).toBe(5);
});
