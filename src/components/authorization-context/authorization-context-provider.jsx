import { useState } from "react";
import { AuthorizationContext } from "./authorization-context";

const DEFAULT_VALUE = { isAuthorized: false };

export const AuthorizationContextProvider = ({ children }) => {
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
    <AuthorizationContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
