import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
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
      console.log(res);
      if (!res) throw new Error("Signup could not be completed");

      // Add display name
      await res.user.updateProfile({ displayName });

      // dispatch login action with returned user info
      dispatch({ type: "LOGIN", payload: res.user });
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { signup, error, isLoading };
};
