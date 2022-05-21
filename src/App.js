import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "./components/search";
import ResultTable from "./components/resultTable";
import { useAppContext } from "./context/appContext";
import Confirmation from "./components/confirmationDialog";

function App() {
  const [query, setQuery] = useState("");

  const { filterReservations, selectedReservation } = useAppContext();

  const reservations = filterReservations(query);

  return (
    <>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          padding: "2em 0px",
        }}
      >
        <Container maxWidth="lg">
          <SearchBar value={query} onChange={(value) => setQuery(value)} />

          <Box
            sx={{
              marginTop: "2em",
            }}
          >
            <ResultTable rows={reservations} />
          </Box>

          <Confirmation selectedReservation={selectedReservation} />
        </Container>
      </Box>
    </>
  );
}

export default App;
