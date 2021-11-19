import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";
// Initialize context
export const AuthContext = createContext();

// Dispatch executor function
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  //   Provide dispatch executor to reducer
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: null,
  });

  // check if any user is logged in on load
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  // return data that should be accessible to children components
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
