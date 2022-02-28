import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePickerComponent from "../DatePickerComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import Country from "../../utils/countryState.json";
import CountryCode from "../../utils/CountryCode";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(0, 1),
    // backgroundColor: "green",
    flexGrow: 1,
    boxShadow: theme.shadows[2],
    height: "100%",
    // width: "100%",
    borderRadius: 15,
  },
}));

const gender = [
  { key: null, value: "Please Select Gender" },
  { key: "Male", value: "Male" },
  { key: "Female", value: "Female" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  citizenship: Yup.string().required().label("Citizenship"),
  gender: Yup.string().required().label("Gender"),
  dateOfBirth: Yup.date()
    .nullable()
    .max(new Date(), "Date of birth should be less than current date ")
    .required()
    .label("Date of Birth"),
  passport: Yup.string().required().min(12).label("Passport Number"),
  countryCode: Yup.string().required().label("Country Code"),
  mobile_no: Yup.number()
    .min(10)
    .positive()
    .integer()
    .required()
    .label("Mobile Number"),
  country: Yup.string().required().label("Country"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  address1: Yup.string().required().label("Address"),
  rel_name: Yup.string().required().label("Relatives's Name"),
  relationship: Yup.string().required().label("Relationship"),
  rel_countryCode: Yup.string().required().label("Relative's Country Code"),
  rel_mobile_no: Yup.number()
    .integer()
    .positive()
    .required()
    .label("Mobile Number"),
});

export default function UpdateProfileForm(props) {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      email: "",
      citizenship: "",
      gender: "",
      dateOfBirth: null,
      passport: "",
      countryCode: "",
      mobile_no: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      address1: "",
      address2: "",
      rel_name: "",
      rel_email: "",
      relationship: "",
      rel_countryCode: "",
      rel_mobile_no: "",
    },
    validationSchema,
    onSubmit: (val) => console.log(val),
  });

  const [divisions, setDivisions] = useState(["Please Select State"]);
  const country = ["", ...Object.keys(Country)];
  const countrycode = [{ country: "" }, ...CountryCode];

  // console.log(formik.values.state);

  return (
    <Box className={classes.root}>
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          Profile
        </Typography>
      </Box>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ py: 2, px: 3 }}>
          <Typography
            sx={{ color: "primary.main", fontWeight: "bold", fontSize: 18 }}
          >
            Personal Details
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              // sm={10}
              sx={{ mt: 1 }}
              columnSpacing={2}
              // justifyContent="space-between"
            >
              <Grid item xs={12} sm={6} sx={{}}>
                <TextField
                  name="name"
                  type="text"
                  label="First Name"
                  placeholder="Enter First Name"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{}}>
                <TextField
                  name="email"
                  type="email"
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
              </Grid>
            </Grid>
            <Grid
              container
              // sm={10}
              sx={{ mt: 1 }}
              columnSpacing={2}
              // justifyContent="space-between"
            >
              <Grid item xs={12} sm={6} sx={{}}>
                <TextField
                  name="citizenship"
                  type="text"
                  label="Citizenship"
                  // placeholder="Select Citizenship"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  select
                  required
                  SelectProps={{ native: true }}
                  value={formik.values.citizenship}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.citizenship &&
                    Boolean(formik.errors.citizenship)
                  }
                  helperText={
                    formik.touched.citizenship && formik.errors.citizenship
                  }
                >
                  {country.map((c) => (
                    <option key={c} value={c === "" ? null : c}>
                      {c === "" ? "Please Select Country" : c}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} sx={{}}>
                <TextField
                  name="gender"
                  type="text"
                  label="Gender"
                  required
                  // placeholder="Select Gender"
                  variant="outlined"
                  margin="dense"
                  select
                  SelectProps={{ native: true }}
                  fullWidth
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                >
                  {gender.map((p) => (
                    <option key={p.key} value={p.key}>
                      {p.value}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid
              container
              // sm={10}
              sx={{ mt: 1 }}
              columnSpacing={2}
              // justifyContent="space-between"
            >
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  flexDirection: "column",
                }}
              >
                <DatePickerComponent
                  name="dateOfBirth"
                  label="Date of Birth"
                  inputVariant="outlined"
                  required
                  fullWidth
                  clearable
                  value={formik.values.dateOfBirth}
                  onChange={(value) =>
                    formik.setFieldValue(
                      "dateOfBirth",
                      new Date(value._d).toISOString()
                    )
                  }
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.dateOfBirth &&
                    Boolean(formik.errors.dateOfBirth)
                  }
                  helperText={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{}}>
                <TextField
                  name="passport"
                  type="text"
                  label="Passport Number"
                  placeholder="Enter Passport Number"
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  value={formik.values.passport}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.passport && Boolean(formik.errors.passport)
                  }
                  helperText={formik.touched.passport && formik.errors.passport}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 1 }} columnSpacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="countryCode"
                  type="text"
                  label="Country Code"
                  placeholder="Select Country code"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  select
                  SelectProps={{ native: true }}
                  value={formik.values.countryCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.countryCode &&
                    Boolean(formik.errors.countryCode)
                  }
                  helperText={
                    formik.touched.countryCode && formik.errors.countryCode
                  }
                >
                  {countrycode.map((c) => (
                    <option
                      key={c.country}
                      value={c.country === "" ? null : c.country}
                    >
                      {c.country === ""
                        ? "Please Select Country Code"
                        : c.country}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  name="mobile_no"
                  type="text"
                  label="Mobile Number"
                  placeholder="Enter  Mobile Number"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  value={formik.values.mobile_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mobile_no && Boolean(formik.errors.mobile_no)
                  }
                  helperText={
                    formik.touched.mobile_no && formik.errors.mobile_no
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ py: 2, px: 3 }}>
          <Typography
            sx={{ color: "primary.main", fontWeight: "bold", fontSize: 18 }}
          >
            Address
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ mt: 1 }} columnSpacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="country"
                  type="text"
                  label="Country"
                  required
                  placeholder="Select Country"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  value={formik.values.country}
                  onChange={({ currentTarget }) => {
                    formik.setFieldValue("country", currentTarget.value);
                    setDivisions([
                      "Please Select State",
                      ...Country[currentTarget.value],
                    ]);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                >
                  {country.map((c) => (
                    <option key={c} value={c === "" ? null : c}>
                      {c === "" ? "Please Select Country" : c}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="state"
                  type="text"
                  label="State"
                  required
                  placeholder="Select State"
                  variant="outlined"
                  margin="dense"
                  select
                  fullWidth
                  SelectProps={{ native: true }}
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                >
                  {divisions.map((d) => (
                    <option key={d} value={d.includes("Please") ? null : d}>
                      {d}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 1 }} columnSpacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="city"
                  type="text"
                  label="City"
                  placeholder="Select City"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="postalCode"
                  type="text"
                  label="Postal Code"
                  placeholder="Enter Postal Code"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.postalCode &&
                    Boolean(formik.errors.postalCode)
                  }
                  helperText={
                    formik.touched.postalCode && formik.errors.postalCode
                  }
                />
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  name="address1"
                  type="text"
                  label="Address Line 1"
                  placeholder="Enter Address Line 1"
                  variant="outlined"
                  margin="dense"
                  multiline
                  required
                  fullWidth
                  value={formik.values.address1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address1 && Boolean(formik.errors.address1)
                  }
                  helperText={formik.touched.address1 && formik.errors.address1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address2"
                  type="text"
                  label="Address Line 2"
                  placeholder="Enter Address Line 1"
                  variant="outlined"
                  margin="dense"
                  multiline
                  fullWidth
                  value={formik.values.address2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address2 && Boolean(formik.errors.address2)
                  }
                  helperText={formik.touched.address2 && formik.errors.address2}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ py: 2, px: 3 }}>
          <Typography
            sx={{ color: "primary.main", fontWeight: "bold", fontSize: 18 }}
          >
            Emergency Contact Information
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columnSpacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="rel_name"
                  type="text"
                  label="Relative Name"
                  placeholder="Enter Relative's Name"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  value={formik.values.rel_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.rel_name && Boolean(formik.errors.rel_name)
                  }
                  helperText={formik.touched.rel_name && formik.errors.rel_name}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="rel_email"
                  type="text"
                  label="Relative's Email"
                  placeholder="Enter Relative's Email"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  value={formik.values.rel_email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.rel_email && Boolean(formik.errors.rel_email)
                  }
                  helperText={
                    formik.touched.rel_email && formik.errors.rel_email
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="relationship"
                  type="text"
                  label="RelationShip"
                  placeholder="Enter Relationship"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  value={formik.values.relationship}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.relationship &&
                    Boolean(formik.errors.relationship)
                  }
                  helperText={
                    formik.touched.relationship && formik.errors.relationship
                  }
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="rel_countryCode"
                  type="text"
                  label="Country Code"
                  placeholder="Select Country Code"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  select
                  required
                  SelectProps={{ native: true }}
                  value={formik.values.rel_countryCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.rel_countryCode &&
                    Boolean(formik.errors.rel_countryCode)
                  }
                  helperText={
                    formik.touched.rel_countryCode &&
                    formik.errors.rel_countryCode
                  }
                >
                  {countrycode.map((c) => (
                    <option
                      key={c.country}
                      value={c.country === "" ? null : c.country}
                    >
                      {c.country === ""
                        ? "Please Select Country Code"
                        : c.country}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  name="rel_mobile_no"
                  type="text"
                  label="Relative's Mobile Number"
                  placeholder="Enter Relative's Mobile Number"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  value={formik.values.rel_mobile_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.rel_mobile_no &&
                    Boolean(formik.errors.rel_mobile_no)
                  }
                  helperText={
                    formik.touched.rel_mobile_no && formik.errors.rel_mobile_no
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
      <Divider />
      <Box sx={{ py: 2, px: 3 }}>
        <Button
          type="submit"
          variant="contained"
          onClick={() => formik.handleSubmit()}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
