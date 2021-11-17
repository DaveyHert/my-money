import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { useEffect } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
