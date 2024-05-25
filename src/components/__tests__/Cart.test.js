import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import Cart from "../Cart";
import appStore from "../../utils/appStore";
import MOCK_DATA from "./mocks/resMenuData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Premium Thalis (3)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  expect(screen.getByText("Cart - 0")).toBeInTheDocument();

  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  fireEvent.click(addButtons[1]);

  expect(screen.getByText("Cart - 2")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getByText("Cart - 2")).toBeInTheDocument();
});
