import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
