import { useState } from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Auth from "../api/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import LoadingButton from "../components/LoadingButton";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "88.8vh",
    },
    signupContainer: {
      padding: theme.spacing(3),
      boxShadow: theme.shadows["5"],
      flexDirection: "column",
    },
    submitButton: {
      margin: theme.spacing(2, 0),
    },
  };
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
  // consent: Yup.boolean()
  //   .isTrue("Consent is Required")
  //   .required()
  //   .label("Consent"),
});

export default function Signup() {
  const classes = useStyles();
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () =>
    setPasswordVisibility(!passwordVisibility);

  const formik = useFormik({
    validationSchema,
    initialValues: { name: "", email: "", password: "", consent: false },
    onSubmit: async (val) => {
      console.log(val);
      try {
        setLoading(true);
        const res = await Auth.signup({ ...val });
        console.log(res);
        // alert(res.data);
        toast.success(res?.data);
        router.push("/login");
      } catch (error) {
        console.log(error?.response?.data);
        if (error?.response?.data?.includes("consent")) {
          toast.error("Please Accept  Terms & Conditions");
        }
        toast.error(error?.response?.data);
      } finally {
        setLoading(false);
      }
      // console.log(res);
    },
  });

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Box className={classes.signupContainer}>
        <Typography variant="h4">Sign Up</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            type="text"
            label="Name"
            placeholder="Enter  Name"
            variant="outlined"
            margin="dense"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            name="email"
            type="email"
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
          <FormControlLabel
            sx={{ my: 1, mx: 0 }}
            control={
              <Checkbox
                name="consent"
                onChange={(event) =>
                  formik.setFieldValue(event.target.name, event.target.checked)
                }
              />
            }
            label={
              <Typography sx={{ fontSize: 16 }}>
                I agree to the
                <Link href="/terms-and-condition">Terms and Conditions </Link>
                and the
                <Link href="/privacy-policy"> Privacy Policy</Link>
              </Typography>
            }
          />
          {formik.errors.consent && (
            <div>
              <small style={{ color: "#ff1744", marginLeft: 15 }}>
                {formik.errors.consent}
              </small>
            </div>
          )}
          <LoadingButton
            title="Signup"
            className={classes.submitButton}
            loading={loading}
            disabled={loading}
            onClick={() => formik.handleSubmit()}
          />
        </form>
        <Typography>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
}
