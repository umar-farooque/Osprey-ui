import React from "react";
import MomentUtils from "@date-io/moment"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-error": {
      borderWidth: 1,
      borderColor: "red",
    },
    "& .MuiFormHelperText-root": {
      color: "red",
    },
  },
}));
export default function DatePickerComponent({
  name,
  value,
  onChange,
  error = false,
  helperText,
  ...props
}) {
  const classes = useStyles();
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {/* <div> */}
        <DatePicker
          clearable
          name={name}
          value={value}
          onChange={onChange}
          inputProps={{ className: classes.root }}
          className={classes.root}
          {...props}
        />
        {/* </div> */}
      </MuiPickersUtilsProvider>
      {error && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <small style={{ color: "#ff1744", marginLeft: 18 }}>
            {helperText}
          </small>
        </div>
      )}
    </>
  );
}
