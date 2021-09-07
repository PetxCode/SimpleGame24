import React, { useState, useEffect, useContext } from "react";
import { app } from "../base";
import { AuthContext } from "./AuthState";

const UserSettings = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("users")
      .onSnapshot((snapshop) => {
        const r = [];
        snapshop.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setUser(r);
      });
  };
  console.log(currentUser);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>User Settings</div>
      <img
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
        src={currentUser && currentUser.photoURL}
      />
      <div>{currentUser && currentUser.displayName}</div>
    </div>
  );
};

export default UserSettings;
