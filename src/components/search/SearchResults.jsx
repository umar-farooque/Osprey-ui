import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import CourseList from "./CourseList";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#FAFAFA50",
    border: "0.5px solid #C3C0C0",
    borderRadius: 10,
    padding: theme.spacing(3, 1),
  },
}));

function SearchResults({ schools, loadMore, showMore }) {
  const classes = useStyles();
  // console.log(">>>>>>>>>>>>", showMore);
  console.log(">>>>>>>>>>>******Search Result******<<<<<<<<<<<<<<<");

  return (
    <>
      <Box className={classes.root}>
        {schools.map((school, index) => (
          <>
            <Box key={index + 1} sx={{ width: "100%", py: 2 }}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: 80,
                      width: 80,
                      borderRadius: 50,
                      backgroundColor: "#DAD9D9",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={10} sx={{ mt: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      color: "black",
                    }}
                    variant="h6"
                    component={"a"}
                    href={`/school/${index}`}
                    // target="_blank"
                  >
                    {school.schoolName}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>{school.location}</Typography>
                </Grid>
              </Grid>
              <CourseList
                courses={school.courses}
                remaining={school.courses.length - 4}
                schoolId={index}
              />
            </Box>
            {/*  */}
            {index + 1 !== schools.length ? <Divider /> : null}
          </>
        ))}
        {showMore && (
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "red",
              mt: 3,
            }}
          >
            <Button variant="outlined" onClick={loadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default React.memo(SearchResults);

{
  /* 
 <Box
                sx={{
                  my: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Grid item xs={12} sm={10}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {school.courses.slice(0, 4).map((c, index) => (
                      <>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{ mt: 3 }}
                          key={index + 1}
                        >
                          <Typography sx={{ fontWeight: "bold" }}>
                            {c.title}
                          </Typography>
                          <Typography>{c.subtitle}</Typography>
                        </Grid>
                      </>
                    ))}
                  </Box>
                </Grid>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button onClick={() => setShowMoreActive(!showMoreActive)}>
                  Show More
                </Button>
              </Box>
              {showMoreActive && <div>Show More Visible</div>}


*/
}
