import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(falses);
  const { dispatch } = useAuthContext();

  export const logout = async () => {
    setError(null);
    setIsLoading(true);

    // Sign user out
    try {
      await projectAuth.signOut();

      //   dispatch logout action
      dispatch({ type: "LOGOUT" });

      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { logout, error, isLoading };
};
