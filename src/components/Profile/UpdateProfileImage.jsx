import { useRef } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    borderRadius: 15,
    boxShadow: theme.shadows[2],
    padding: theme.spacing(1),
    boxSizing: "border-box",
  },
}));

export default function UpdateProfileImage({ name = null }) {
  const classes = useStyles();
  const ref = useRef();
  return (
    <Box className={classes.root}>
      <Box sx={{}}>
        <img
          src={"/fake-image.jpg"}
          alt="user"
          style={{ height: 150, width: 150, borderRadius: 75 }}
        />
      </Box>
      <input name="img" type="file" accept="image/*" ref={ref} hidden />
      <Box>
        <Typography variant="h6">{name ? name : "Ross Betosky"}</Typography>
      </Box>
      <Box sx={{}}>
        <Button color="primary" onClick={() => ref.current.click()}>
          Update Profile Image
        </Button>
      </Box>
    </Box>
  );
}
