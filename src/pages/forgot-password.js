import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/dist/client/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Auth from "../api/auth";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "88.8vh",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: { padding: theme.spacing(3), boxShadow: theme.shadows["5"] },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
});

export default function ForgotPassword() {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async (val) => {
      try {
        setLoading(true);
        await Auth.forgotPassword({ ...val });
        router.replace("/");
      } catch (error) {
        console.log(error?.response?.data);
        toast.error(error?.response?.data);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <Box className={classes.inputContainer}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            type="text"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            margin="dense"
            fullWidth
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <LoadingButton
            title="Request Password Reset"
            variant="contained"
            type="submit"
            loading={loading}
            disabled={loading}
            sx={{ mt: 2 }}
          />
        </form>
      </Box>
    </Container>
  );
}
