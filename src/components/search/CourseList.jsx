import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

export default function CourseList({ courses, remaining, schoolId }) {
  const [showMore, setShowMore] = React.useState(false);
  // console.log(">>>> Course List ", courses);
  return (
    <>
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
            {courses.slice(0, 4).map((c, index) => (
              <>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }} key={index + 1}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      textDecoration: "none",
                    }}
                    component="a"
                    href={`/school/${schoolId}/course/${index}`}
                  >
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
        {courses.length > 4 && (
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Hide" : `Show  ${remaining} More Results`}
          </Button>
        )}
      </Box>
      {showMore && (
        <Box
          sx={{
            // my: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            // backgroundColor: "black",
          }}
        >
          <Grid
            container
            // xs={12}
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={10}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  // backgroundColor: "red",
                }}
              >
                {courses.slice(4).map((c, index) => (
                  <>
                    <Grid item xs={12} sm={6} sx={{ mt: 3 }} key={index + 1}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "black",
                        }}
                        component="a"
                        href={`/school/${schoolId}/course/${index + 4}`}
                      >
                        {c.title}
                      </Typography>
                      <Typography>{c.subtitle}</Typography>
                    </Grid>
                  </>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
