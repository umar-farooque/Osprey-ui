import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import Layout from "../layout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../context/provider/AuthProvider";
import useAuth from "../hooks/context/useAuth";
import Auth from "../api/auth";

// import "../../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const [authorized, setAuthorized] = React.useState(true);
  const router = useRouter();
  // const { user, setUser } = useAuth();
  const restricted =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/forgot-password" ||
    router.pathname.includes("reset");
  // useEffect(()=>{})
  const user = Auth.getToken();

  React.useEffect(() => {
    // console.log("Inside App", user);

    const hideContent = () => setAuthorized(false);
    const showContent = () => setAuthorized(true);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", showContent);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", showContent);
    };
  }, []);
  // if (!user && typeof window === "object" && !restricted) {
  //   console.log(">>> auth required");
  //   router.push("/login");
  //   // toast.error("Authentication Required To Access This Route", { limit: 1 });
  //   return null;
  // }

  // if (user && typeof window === "object" && restricted) {
  //   router.push("/search");
  //   return null;
  // }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Osprey</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout restricted={!restricted}>
            {authorized && <Component {...pageProps} />}
            <ToastContainer />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
