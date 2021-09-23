import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
    transactions: [
        { id: 1, text: "Salary", amount: 35000 },
        { id: 2, text: "Rent", amount: 5000 },
        { id: 3, text: "Food", amount: 3000 },
        { id: 4, text: "Saving", amount: 10000 },
    ]
}

// Creating context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}