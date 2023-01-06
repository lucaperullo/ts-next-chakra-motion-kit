import React, { createContext, useContext, useReducer } from "react";


// Prepares the data layer
type StateType = {
  locale: string;
  user:any;
  isLoading: boolean;
};

export const StateContext = createContext<StateType|any>({
  locale:  "",
  user:null,
  isLoading: false,
});


// We wrap our app and provide the Data layer
export const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer: any;

  initialState: any;
  children: any;
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);