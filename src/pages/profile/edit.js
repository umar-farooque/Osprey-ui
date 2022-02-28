import { useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

import UpdateProfileImage from "../../components/Profile/UpdateProfileImage";
import UpdateProfileForm from "../../components/Profile/UpdateProfileForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // width: "100%",
    flexGrow: 1,
  },
}));

export default function Edit() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 3 }}
          rowSpacing={{ xs: 2, sm: 0 }}
        >
          <Grid item xs={12} sm={3}>
            <UpdateProfileImage />
          </Grid>
          <Grid item xs={12} sm={9}>
            <UpdateProfileForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
