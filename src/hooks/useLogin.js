import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigator = useNavigate();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    // Login user
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // check for error
      if (!res) {
        setIsLoading(false);
        throw new Error("Failed to login");
      }

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      //   check if component is still mounted before updating
      if (!isCancelled) {
        setError(null);
        setIsLoading(false);
        navigator("/");
      }
    } catch (err) {
      // check if component is still mounted
      if (!isCancelled) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  //   Cleanup function to prevent updating when component is unmounted
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isLoading };
};
