import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import usePagination from "../../hooks/usePagination";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 120,
  backgroundColor: "blue",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SchoolBody({ data, limit }) {
  const { slicedArr, handleLoadMore } = usePagination(data, limit);
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={3} sx={{ my: 2, flexWrap: "wrap" }}>
        {slicedArr.map((p, index) => (
          <Grid item xs={12} sm={4} key={p} sx={{ flexGrow: 1 }}>
            <Grid container>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#F8F5F5",
                  borderRadius: 5,
                  height: 160,
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={4} sx={{}}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 30,
                      background: "grey",
                      backgroundColor: "grey",
                      margin: "0px auto",
                    }}
                  />
                </Grid>
                <Grid item xs={8} sx={{}}>
                  <Typography
                    component={"a"}
                    href={`/school/${index}`}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    {p}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
      {data.length !== slicedArr.length && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            my: 3,
            // backgroundColor: "red",
          }}
        >
          <Button onClick={handleLoadMore} variant="outlined">
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}
{
  /*

<Grid item xs={12} sm={4} key={p}>
            <Grid container spacing={0} sx={{ border: "1px solid black" }}>
              <Grid xs={5} sx={{ backgroundColor: "red" }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    background: "grey",
                    backgroundColor: "grey",
                  }}
                />
              </Grid>
              <Grid xs={7} sx={{ backgroundColor: "black" }}>
                <Typography>{p}</Typography>
              </Grid>
            </Grid>
          </Grid>



            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: "#F8F5F5",
                borderRadius: 5,
                height: 160,
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={3} sm={4} sx={{}}>
                
              </Grid>
              
            </Grid>
*/
}
