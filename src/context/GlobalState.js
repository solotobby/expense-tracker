import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
    transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 900 },
      { id: 3, text: 'Book', amount: -190 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
}
///creat global context
export const GlobalContext = createContext(initialState);

//Provider composent
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}