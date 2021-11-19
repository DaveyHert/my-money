import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);
    try {
      // Signup
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      // check if signup was unsuccesful
      if (!res) throw new Error("Signup could not be completed");

      // Add display name
      await res.user.updateProfile({ displayName });

      // dispatch login action with returned user info
      dispatch({ type: "LOGIN", payload: res.user });

      // update state if component is still mounted
      if (!isCancelled) {
        setError(null);
        setIsLoading(false);
      }
    } catch (err) {
      if (!isCancelled) {
        setIsLoading(false);
        setError(err.message);
      }
    }
  };
  // Clean up function incase component is unmunted while still signing up/fetching data
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isLoading };
};
