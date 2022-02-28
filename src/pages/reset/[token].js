import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/dist/client/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Auth from "../../api/auth";
import LoadingButton from "../../components/LoadingButton";
import { useState } from "react";
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
  password: Yup.string().required().label("Password"),
  confirm_password: Yup.string().required().label("Password"),
});

export default function ResetPassword() {
  const classes = useStyles();
  const router = useRouter();
  const token = router.query.token;
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: { password: "", confirm_password: "" },
    validationSchema,
    onSubmit: async (val) => {
      try {
        setLoading(true);
        const res = await Auth.resetPassword(token, { password: val.password });
        console.log(res);
        router.replace("/login");
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
            name="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            margin="dense"
            fullWidth
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            name="confirm_password"
            type="password"
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            variant="outlined"
            margin="dense"
            fullWidth
            required
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirm_password &&
              Boolean(formik.errors.confirm_password)
            }
            helperText={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
          />

          <LoadingButton
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            title="Reset Password"
            loading={loading}
            disabled={loading}
          />
        </form>
      </Box>
    </Container>
  );
}
