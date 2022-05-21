import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./index";

test("renders search input", () => {
  render(<Search />);
  const el = screen.getByPlaceholderText("Search here...");
  expect(el).toBeInTheDocument();
});

test("search value renders properly", () => {
  const value = "search word";
  render(<Search value={value} />);

  const el = screen.getByPlaceholderText("Search here...");

  expect(el.value).toBe(value);
});

test("search is updating value", () => {
  render(<Search onChange={() => {}} />);

  const el = screen.getByPlaceholderText("Search here...");

  fireEvent.change(el, { target: { value: "word" } });

  expect(el.value).toBe("word");
});
