import { useState, useReducer, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

// Initial state
const initialState = {
  document: null,
  isLoading: false,
  error: null,
};

const dispatchReducer = (state, action) => {
    switch (action.type) {
        case 'ISLOADING':
            return {...state, isLoading: true, document: null, error: null};
     case 'ERROR':
                return {...state, error: action.payload, isLoading: false, document: null};
        case 'ADD_DOCUMENT':
                    return{...state, document: action.payload}
        default:
            return state
    }
}

export const useFirestore = (document) => {
    const [isCancelled, setIsCancelled] = useState(false)
    const 

}