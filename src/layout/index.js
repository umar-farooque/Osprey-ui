import Navbar from "./components/Navbar";

import useAuth from "../hooks/context/useAuth";
import { useEffect } from "react";

export default function Layout({ children, restricted }) {
  // const router = useRouter();
  // const { user, setUser } = useAuth();

  // useEffect(() => {
  //   if (!user && !restricted) router.replace("/login");
  // }, []);

  return (
    <>
      <Navbar isLoggedIn={true} />
      {children}
    </>
  );
}
