import { screen, render } from "@testing-library/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ConfirmationDialog from "./index";
import AppContext, { useAppContext } from "../../context/appContext";

test("render date of arrival", () => {
  const AppComp = () => {
    const { reservations } = useAppContext();

    return <ConfirmationDialog selectedReservation={reservations[0]} />;
  };

  const IndexComp = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AppContext>
          <AppComp />
        </AppContext>
      </LocalizationProvider>
    );
  };

  render(<IndexComp />);

  // Date of Arrival renders
  let el = screen.getByLabelText("Date of Arrival");
  expect(el).toBeInTheDocument();

  // Date of Departure renders
  el = screen.getByLabelText("Date of Departure");
  expect(el).toBeInTheDocument();

  // Room Size Renders
  el = screen.getByLabelText("Room Size");
  expect(el).toBeInTheDocument();

  // Room Quantity renders
  el = screen.getByLabelText("Room Quantity");
  expect(el).toBeInTheDocument();

  // First Name Renders
  el = screen.getByLabelText("First Name");
  expect(el).toBeInTheDocument();

  // Last Name Renders
  el = screen.getByLabelText("Last Name");
  expect(el).toBeInTheDocument();

  // E-Mail Renders
  el = screen.getByLabelText("E-mail");
  expect(el).toBeInTheDocument();

  // Phone Number Renders
  el = screen.getByLabelText("Phone Number");
  expect(el).toBeInTheDocument();

  // Street Name Renders
  el = screen.getByLabelText("Street Name");
  expect(el).toBeInTheDocument();

  // Street Number Renders
  el = screen.getByLabelText("Street Number");
  expect(el).toBeInTheDocument();

  // Zip Renders
  el = screen.getByLabelText("Zip");
  expect(el).toBeInTheDocument();

  // State Renders
  el = screen.getByLabelText("State");
  expect(el).toBeInTheDocument();

  // City Renders
  el = screen.getByLabelText("City");
  expect(el).toBeInTheDocument();

  // Credit Card Renders
  el = screen.getByLabelText("Credit Card");
  expect(el).toBeInTheDocument();

  // PayPal Renders
  el = screen.getByLabelText("PayPal");
  expect(el).toBeInTheDocument();

  // Cash Renders
  el = screen.getByLabelText("Cash");
  expect(el).toBeInTheDocument();

  // Bitcoin Renders
  el = screen.getByLabelText("Bitcoin");
  expect(el).toBeInTheDocument();

  // Personal Note Renders
  el = screen.getByLabelText("Personal Note");
  expect(el).toBeInTheDocument();

  // Tags Renders
  el = screen.getByLabelText("Tags");
  expect(el).toBeInTheDocument();

  // Send me a reminder Renders
  el = screen.getByLabelText("Send me a reminder");
  expect(el).toBeInTheDocument();

  // Subscribe to newsletter Renders
  el = screen.getByLabelText("Subscribe to newsletter");
  expect(el).toBeInTheDocument();

  // I confirm the information given above Renders
  el = screen.getByLabelText("I confirm the information given above");
  expect(el).toBeInTheDocument();
});
