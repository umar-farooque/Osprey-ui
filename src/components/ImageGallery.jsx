import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    flexGrow: 1,
    position: "absolute",
    overflow: "hidden",
    margin: theme.spacing(0, "auto"),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function ImageGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography> Image Gallery </Typography>
    </div>
  );
}
