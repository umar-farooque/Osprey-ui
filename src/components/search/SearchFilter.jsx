import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import debounce from "lodash/debounce";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FAFAFA50",
    border: "0.5px solid #C3C0C0",
    borderRadius: 10,
    padding: theme.spacing(2),
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
  },
  textfieldStyle: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const countryFilters = [
  { key: "", value: "See All" },
  { key: "CN", value: "Canada" },
  { key: "AU", value: "Australia" },
];

const fieldFilters = [
  { key: "", value: "See All" },
  { key: "Architecture", value: "Architecture" },
  { key: "Arts", value: "Arts & Human Resources" },
  { key: "Buisness", value: "Buisness" },
  { key: "Education", value: "Education" },
  { key: "Engineering", value: "Engineering" },
  { key: "Law", value: "Law" },
  { key: "Life Science", value: "Life Science" },
  { key: "Medical & Health Science", value: "Medical & Health Science" },
];

const degreeFilters = [
  { key: "", value: "See All" },
  { key: "Advace Diploma", value: "Advanced Diploma" },
  { key: "Associate Degree", value: "Associate Degree" },
  { key: "Bachelor Degree", value: "Bachelor Degree" },
  { key: "Certificate", value: "Certificate" },
  { key: "Collaborative Degree", value: "Collaborative Degree / Joint Degree" },
  { key: "Degree", value: "Degree" },
  { key: "Diploma", value: "Diploma" },
  { key: "Graduate Certificate", value: "Graduate Certificate" },
  { key: "Master's  Degree", value: "Master's Degree" },
  { key: "Post Degree  Diploma", value: "Post Degree  Diploma" },
  { key: "Post Diploma", value: "Post Diploma" },
];

const schoolFeatureFilters = [
  { key: "", value: "See All" },
  { key: "1", value: "Co - Op Program" },
  { key: "2", value: "Conditional Offer Letters" },
  { key: "3", value: "On Campus Housing" },
  { key: "4", value: "Post Graduation Work Permit" },
  { key: "5", value: "University Transfer Options" },
  { key: "6", value: "Work While Studying" },
];

function SearchFilter({
  minVal,
  maxVal,
  intake,
  setIntake,
  degreeFilter,
  countryFilter,
  setDegreeFilter,
  fieldFilter,
  setFieldFilter,
  setCountryFilter,
  schoolFeature,
  setSchoolFeature,
  range,
  setRange,
}) {
  const classes = useStyles();
  // const [value, setValue] = React.useState();

  const handleChange = (_, newValue) => {
    // console.log(">>", newValue);
    setRange(newValue);
  };
  // const debounceRangeHandler = debounce(
  //   (_, newVal) => handleChange(newVal),
  //   100
  // );
  console.log(">>>>>>>>>>>******Search Filter******<<<<<<<<<<<<<<<");
  // console.log(
  //   ">>>>>>>>>>>******Search Filter******<<<<<<<<<<<<<<<",
  //   "Intake--->",
  //   intake,
  //   " Country Filter---->",
  //   countryFilter,
  //   " Field Filter---->",
  //   fieldFilter,
  //   " Degree Filter---->",
  //   degreeFilter,
  //   " School Feature---->",
  //   schoolFeature,
  //   range
  // );

  return (
    <Box className={classes.root}>
      <Box className={classes.textfieldStyle}>
        <TextField
          type="text"
          variant="outlined"
          name="country"
          label="Select country"
          placeholder="Select Country"
          fullWidth
          select
          SelectProps={{ native: true }}
          onChange={({ currentTarget }) =>
            setCountryFilter(currentTarget.value)
          }
        >
          {countryFilters.map((c) => (
            <option key={c.key}>{c.value}</option>
          ))}
        </TextField>
      </Box>
      <Box className={classes.textfieldStyle}>
        <TextField
          type="text"
          name="field"
          label="Select Field"
          placeholder="Select Field"
          fullWidth
          select
          SelectProps={{ native: true }}
          value={fieldFilter}
          onChange={({ currentTarget }) => setFieldFilter(currentTarget.value)}
        >
          {fieldFilters.map((f) => (
            <option key={f.key}>{f.value}</option>
          ))}
        </TextField>
      </Box>
      <Box className={classes.textfieldStyle}>
        <TextField
          type="text"
          name="degree"
          label="Select Degree"
          placeholder="Select degree"
          fullWidth
          select
          SelectProps={{ native: true }}
          value={degreeFilter}
          onChange={({ currentTarget }) => setDegreeFilter(currentTarget.value)}
        >
          {degreeFilters.map((d) => (
            <option key={d.key}>{d.value}</option>
          ))}
        </TextField>
      </Box>
      <Divider />
      <Box className={classes.textfieldStyle}>
        <FormControlLabel
          sx={{ my: 0, mx: 0 }}
          control={<Checkbox name="intake" />}
          checked={intake}
          onChange={() => setIntake(!intake)}
          label={
            <Typography sx={{ fontSize: 16 }}>
              Only show programs with open intakes
            </Typography>
          }
        />
      </Box>
      <Divider />
      <Box className={classes.textfieldStyle}>
        <Typography sx={{ fontWeight: "bold" }}>Tution Fees</Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          min={minVal}
          max={maxVal}
          value={range}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <Box className={classes.textfieldStyle}>
        <TextField
          name="school_features"
          placeholder="Select School Features"
          label="Select School Features"
          fullWidth
          select
          SelectProps={{ native: true }}
          value={schoolFeature}
          onChange={({ currentTarget }) =>
            setSchoolFeature(currentTarget.value)
          }
        >
          {schoolFeatureFilters.map((s) => (
            <option key={s.key}>{s.value}</option>
          ))}
        </TextField>
      </Box>
    </Box>
  );
}

export default React.memo(SearchFilter);
