import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import App from "./App";
import AppContextProvider from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </LocalizationProvider>
);
