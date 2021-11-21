import { useState, useReducer, useEffect } from "react";
import { projectFirestore, timeStamp } from "../firebase/config";

// Initial state (defined outside the hook because we don't want it recreated ech time the hook is used)
const initialState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

// A reduce function that manages our state
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { isLoading: true, document: null, error: null, success: false };
    case "ADD_DOCUMENT":
      return {
        isLoading: false,
        document: action.payload,
        error: null,
        success: true,
      };
    case "ERROR":
      return {
        error: action.payload,
        isLoading: false,
        document: null,
        success: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  //   Collections reference
  const ref = projectFirestore.collection(collection);

  //  cleanup function (only dispatch if component is not unmounted)
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //   Add to documents
  const addDocument = async (doc) => {
    dispatch({ type: "IS_LOADING" });
    try {
      // Add time
      const createdAt = timeStamp.fromDate(new Date());
      // Upload doc
      const newDocoument = await ref.add({ ...doc, createdAt });

      dispatchIfNotCancelled({ type: "ADD_DOCUMENT", payload: newDocoument });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //   Remove document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const res = await ref.doc(id).delete();
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, response, deleteDocument };
};
