import { useState } from "react";
import { UserContext } from "./user-context";

const DEFAULT_VALUE = { isAuthorized: false };

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE);

  const login = () => {
    setUser({
      isAuthorized: true,
      username: `admin`,
    });
  };

  const logout = () => {
    setUser(DEFAULT_VALUE);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
