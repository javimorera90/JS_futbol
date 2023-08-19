import React, { createContext, useEffect, useState } from "react";
import { User } from "../classes/User";

export const JSFutbolContext = createContext();

export const JSFutbolProvider = (props) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : new User();
  });

  const [week, setWeek] = useState(() => {
    const savedWeek = parseInt(localStorage.getItem("week"));
    return savedWeek ? parseInt(savedWeek) : parseInt(1);
  });

  const [actionReload, setActionReload] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("week", JSON.stringify(week));
  }, [user]);

  return (
    <JSFutbolContext.Provider
      value={{
        user,
        setUser,
        actionReload,
        setActionReload,
        week,
        setWeek
      }}
    >
      {props.children   }
    </JSFutbolContext.Provider>
  );
};
