//setup data layer
// needed to track the basket

import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();


//building a provider to wrap the entire app inside of provider to give access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>
)

//This is how we use it inside of the component
export const useStateValue = () => useContext(StateContext);