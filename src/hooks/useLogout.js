import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    // Sign user out
    try {
      await projectAuth.signOut();

      //   dispatch logout action
      dispatch({ type: "LOGOUT" });

      //update state if component is not unmounted/aborted
      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  // cleanup function to prevent update of component if unmounted
  useEffect(() => {
    return () => setIsCancelled(true);
  });

  return { logout, error, isLoading };
};
