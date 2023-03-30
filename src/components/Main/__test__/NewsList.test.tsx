import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import NewsList from "../NewsList";

const MockNewsList = () => {
  return (
    <Provider store={store}>
      <NewsList />
    </Provider>
  );
};

const changeView = () => {
  const toggleButton = screen.getByRole("checkbox");
  fireEvent.click(toggleButton);
};

describe("NewsList", () => {
  it("change view on news list", () => {
    render(<MockNewsList />);
    changeView();
    const newsContainer = screen.getByTestId("news-list");
    expect(newsContainer.className).toBe("tiles");
  });
});
