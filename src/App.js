import React, { useMemo } from "react";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "./components/search";
import ResultTable from "./components/resultTable";
import { useAppContext } from "./context/appContext";
import Confirmation from "./components/confirmationDialog";

function App() {
  const { stateWithPower$ } = useAppContext();
  const search$ = useMemo(() => new BehaviorSubject(""), []);

  const [filteredData] = useObservableState(
    () =>
      stateWithPower$.pipe(
        combineLatestWith(search$),
        map(([data, search]) =>
          data.filter((d) =>
            d.power.toLowerCase().includes(search.toLowerCase())
          )
        )
      ),
    []
  );
  const { selectedReservation } = useAppContext();

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
          <SearchBar
            value={search$.value}
            onChange={(value) => search$.next(value)}
          />
          <Box
            sx={{
              marginTop: "2em",
            }}
          >
            <ResultTable rows={filteredData} />
          </Box>

          <Confirmation selectedReservation={selectedReservation} />
        </Container>
      </Box>
    </>
  );
}

export default App;
