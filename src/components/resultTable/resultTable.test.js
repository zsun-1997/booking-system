import { render, screen } from "@testing-library/react";
import ResultTable from "./index";
import AppContext, { useAppContext } from "../../context/appContext";

test("renders table with data", () => {
  const AppComp = () => {
    const { filterReservations } = useAppContext();
    const reservations = filterReservations();
    return <ResultTable rows={reservations} />;
  };

  const IndexComp = () => {
    return (
      <AppContext>
        <AppComp />
      </AppContext>
    );
  };

  render(<IndexComp />);

  const table = screen.getAllByRole("table");

  // There should be only one 1 table
  expect(table).toHaveLength(1);

  // There should be only three rows one for table head and two for data
  const rowsCount = screen.getAllByRole("row").length;
  expect(rowsCount).toBe(3);
});

test("renders table with filtered data", () => {
  const AppComp = () => {
    const { filterReservations } = useAppContext();
    const reservations = filterReservations("pm");
    return <ResultTable rows={reservations} />;
  };

  const IndexComp = () => {
    return (
      <AppContext>
        <AppComp />
      </AppContext>
    );
  };

  render(<IndexComp />);

  const table = screen.getAllByRole("table");

  // There should be only one 1 table
  expect(table).toHaveLength(1);

  // There should be only two rows one for table head and two for data
  const rowsCount = screen.getAllByRole("row").length;
  expect(rowsCount).toBe(2);
});
