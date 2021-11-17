import { createContext, useReducer } from "react";

// Initialize context
export const AuthContext = createContext();

// Dispatch executor function
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  //   Provide dispatch executor to reducer
  const [state, dispatch] = useReducer(authReducer, { user: null });

  // return data that should be accessible to children components
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
