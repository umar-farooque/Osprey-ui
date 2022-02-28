import { useState } from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import Auth from "../api/auth";
import { toast } from "react-toastify";
import useApi from "../hooks/useApi";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton from "../components/LoadingButton";

const useStyles = makeStyles((theme) => {
  // console.log(theme);
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "green",
      // flexGrow: 1,
      height: "88.8vh",
    },
    loginContainer: {
      padding: theme.spacing(3),
      boxShadow: theme.shadows["5"],
      flexDirection: "column",
    },

    submitButton: {
      margin: theme.spacing(1, 0),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function Login() {
  const router = useRouter();
  const classes = useStyles();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  // const login = useApi(Auth.login);

  const handleClickShowPassword = () =>
    setPasswordVisibility(!passwordVisibility);

  const formik = useFormik({
    validationSchema,
    initialValues: { email: "", password: "" },
    onSubmit: async (val) => {
      // console.log(val);
      try {
        setLoading(true);
        const res = await Auth.login({ ...val });
        console.log(">>>>", res.data);
        router.replace("/search");
        // return;
        // TODO Redirect To Search
      } catch (error) {
        console.log(error?.response?.data);
        toast.error(error?.response?.data);
        // setLoading(false);
      } finally {
        setLoading(false);
      }
      // router.replace("/");
      // return val;
    },
  });

  // const router = useRouter();
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      {/* <div className={classes.root}> */}
      <Box className={classes.loginContainer}>
        <Typography variant="h4">Login</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            type="text"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            margin="dense"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            type={passwordVisibility ? "text" : "password"}
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            margin="dense"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            type="submit"
            title="Login"
            loading={loading}
            className={classes.submitButton}
            disabled={loading}
          />
        </form>
        <Typography>
          Dont have an account ? <Link href="/signup">Sign Up</Link>
        </Typography>
        <Link href="/forgot-password">Forgot Password</Link>
      </Box>
      {/* </div> */}
    </Container>
  );
}
