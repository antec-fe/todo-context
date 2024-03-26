import { createContext, useReducer, useState } from "react";

export const ListContext = createContext();

function reducerFN(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email
        }
      ];

    case "DELETE":
        return state.filter((item)=> item.id !== action.payload)

    default:
      return state;
  }
}

export default function ProviderComponent({ children }) {
  const [state, dispatch] = useReducer(reducerFN, []);
  return (
    <ListContext.Provider value={{ state ,dispatch }}>
      {children}
    </ListContext.Provider>
  );
}