import React, { createContext, useContext, useMemo, useReducer } from "react";
import userReducer from "../utils/reducers";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
