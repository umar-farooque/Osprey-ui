import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

// const province = ["All Province","Alberta"]

export default function SchoolHeader() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Filter School"
            placeholder="Search School"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="All Province"
            placeholder="Filter School"
            variant="outlined"
            fullWidth
            // select
            // SelectProps={{ native: true }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Country"
            placeholder="Search Country"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
