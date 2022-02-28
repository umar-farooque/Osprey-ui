import { useContext } from "react";
import { AuthContext } from "../../context/provider/AuthProvider";

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
