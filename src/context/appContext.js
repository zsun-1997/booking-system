import React, { createContext, useState, useContext } from "react";
import data from "../data/reservations.json";

const AppContext = createContext();

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

  const filterReservations = (query) => {
    let reservations = [];

    if (query) {
      reservations = state.reservations.filter(
        (reservation) =>
          reservation.firstName.toLowerCase().includes(query.toLowerCase()) ||
          reservation.lastName.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      reservations = state.reservations;
    }

    return reservations;
  };

  const setSelctedReservation = (reservation) => {
    _setState({
      selectedReservation: reservation,
    });
  };

  const value = {
    reservations: state.reservations,
    selectedReservation: state.selectedReservation,
    setSelctedReservation,
    filterReservations,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const value = useContext(AppContext);

  return value;
};

export default AppContextProvider;
