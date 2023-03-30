import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header, { sum } from "../Header";
import store from "../../../store";
import NewsList from "../../Main/NewsList";

const MockHeader = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe("Header", () => {
  it("Header should be rendered", () => {
    render(<MockHeader />);
    const headerElements = screen.getAllByRole("heading");
    headerElements.map((headerElement) => {
      expect(headerElement).toBeInTheDocument();
    });
  });

  it("Toggle button should be rendered", () => {
    render(<MockHeader />);
    const toggleButton = screen.getByRole("checkbox");
    expect(toggleButton).toBeInTheDocument();
  });
});
