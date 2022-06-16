import React, { createContext, useState, useContext } from "react";
import { BehaviorSubject, map } from "rxjs";
import data from "../data/reservations.json";

export const state$ = new BehaviorSubject([]);

state$.next(data);

export const stateWithPower$ = state$.pipe(
  map((data) =>
    data.map((d) => ({
      ...d,
      power: d.lastName + d.firstName,
    }))
  )
);

const AppContext = createContext();

export const useData = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    reservations: data,
    selectedReservation: null,
  });

  const _setState = (newState) => {
    setState((oldState) => ({
      ...oldState,
      ...newState,
    }));
  };
  const setSelctedReservation = (reservation) => {
    _setState({
      selectedReservation: reservation,
    });
  };

  const value = {
    reservations: state.reservations,
    selectedReservation: state.selectedReservation,
    stateWithPower$,
    setSelctedReservation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const value = useContext(AppContext);

  return value;
};

export default AppContextProvider;
