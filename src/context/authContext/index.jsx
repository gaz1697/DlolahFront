import React, { createContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
    setCurrentUser(null);
  };

  const authContextValue = {
    currentUser,
    setCurrentUser,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
