import React, { useState } from "react";

const AuthContext = React.createContext();

export default function AuthProvider(props) {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider value={{ user, setUser }} {...props} />;
}

export { AuthContext };
