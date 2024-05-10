import React, { createContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

// Create the auth context
const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  logout: () => {},
});

// Create the auth provider component
const AuthProvider = ({ children }) => {
  // State to hold the authenticated user
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user logout
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

  // Value object to be provided to consumers of the auth context
  const authContextValue = {
    currentUser,
    setCurrentUser,
    logout,
  };

  // Render the auth provider component with the auth context value
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
