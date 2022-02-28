import Grid from "@mui/material/Grid";
import { useRouter } from "next/dist/client/router";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import RoomIcon from "@mui/icons-material/Room";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";

import usePagination from "../../../hooks/usePagination";

let course = [
  {
    name: "Social Service Worker",
    tutionFees: "$14,000",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },
  {
    name: "Buisness Marketing",
    tutionFees: "$14,120",
    applicationFees: "$100",
    start: "Sep. 2021",
    end: "June. 2022",
  },
  {
    name: "Autism Behaviour Science",
    tutionFees: "$14,500",
    applicationFees: "$220",
    start: "Sep. 2021",
    end: "May. 2022",
  },
  {
    name: "Buisness Accounting",
    tutionFees: "$14,858",
    applicationFees: "$170",
    start: "Sep. 2021",
    end: "Jan. 2021",
  },
  {
    name: "Child And Youth",
    tutionFees: "$13,500",
    applicationFees: "$100",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Buisness Fundamentals",
    tutionFees: "$15,000",
    applicationFees: "$190",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Graphic Design",
    tutionFees: "$14,860",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Media Arts Fundamentals",
    tutionFees: "$14,600",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Personal Support Woeker",
    tutionFees: "$14,060",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Energy Systems Engineering Technology",
    tutionFees: "$14,000",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2021",
  },
  {
    name: "Culinary Management",
    tutionFees: "$14,560",
    applicationFees: "$50",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Carpentry Techniques",
    tutionFees: "$14,800",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },
  {
    name: "Law Clerk",
    tutionFees: "$192,000",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },
  {
    name: "User  Experience Design",
    tutionFees: "$15,000",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2025",
  },
  {
    name: "Business Analytics",
    tutionFees: "$14,080",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },
  {
    name: "Business Administration Human Resources",
    tutionFees: "$14,750",
    applicationFees: "$180",
    start: "Sep. 2021",
    end: "Jan. 2024",
  },
  {
    name: "Wind Turbine Technique",
    tutionFees: "$14,900",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2025",
  },
  {
    name: "Computer Systems Technician",
    tutionFees: "$14,900",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2021",
  },
  {
    name: "Sociology",
    tutionFees: "$14,850",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2021",
  },
  {
    name: "Human Resources",
    tutionFees: "$43,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2024",
  },
  {
    name: "Finance And Administration",
    tutionFees: "$13,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "Political Science",
    tutionFees: "$23,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },

  {
    name: "Human Rights",
    tutionFees: "$32,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "English",
    tutionFees: "$36,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },
  {
    name: "French",
    tutionFees: "$43,000",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2024",
  },
  {
    name: "Criminology",
    tutionFees: "$43,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2024",
  },
  {
    name: "World Religions",
    tutionFees: "$33,526",
    applicationFees: "$199",
    start: "Sep. 2021",
    end: "Jan. 2025",
  },
  {
    name: "Psychology",
    tutionFees: "$15,000",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2024",
  },
  {
    name: "Disability Studies",
    tutionFees: "$33,250",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2022",
  },
  {
    name: "History",
    tutionFees: "$13,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2023",
  },
  {
    name: "Finance And  Administration",
    tutionFees: "$43,200",
    applicationFees: "$150",
    start: "Sep. 2021",
    end: "Jan. 2024",
  },
];
const LIMIT = 10;
const useStyles = makeStyles((theme) => {
  // console.log(">>>>>>", theme);
  return {
    root: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
    },
  };
});

export default function School() {
  const router = useRouter();
  const classes = useStyles();
  const { slicedArr: courses, handleLoadMore } = usePagination(course, LIMIT);

  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  // console.log(">>>router", router);

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center" }}>School with id {router.query.id}</h1>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://picsum.photos/1000/400"
                  alt="School Image"
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: 100,
                    backgroundColor: "#797D7F94",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Box sx={{ position: "relative", flexGrow: 1 }}>
                    <Grid container spacing={0}>
                      <Grid item xs={4} md={2}>
                        <Box
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            backgroundColor: "white",
                            position: "absolute",
                            top: -50,
                            left: "1.5%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={8} md={10}>
                        <Box sx={{ p: 1, px: 2, color: "white" }}>
                          <Typography>
                            Kings University Colledge | London
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <RoomIcon />
                            <Typography sx={{ my: 1 }}>
                              266 Epworth Avenue , London ,Ontarion, Canada.
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography> 🇨🇦 London,Ontario </Typography>
                            <Typography> Founded:1954 </Typography>
                            <Typography> Total Students :25000 + </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ boxSizing: "border-box", height: 400 }}
            >
              <img
                src="https://picsum.photos/1000/200"
                alt="School Image"
                style={{
                  width: "100%",
                  height: 195,
                  borderRadius: 10,
                  boxSizing: "border-box",
                }}
              />
              <img
                src="https://picsum.photos/1000/200"
                alt="School Image"
                style={{
                  width: "100%",
                  height: 195,
                  borderRadius: 10,
                  boxSizing: "border-box",
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} sx={{}}>
            <Box
              sx={{
                px: 4,
                py: 2,
                my: 2,
                borderRadius: 2,
                border: "1px solid grey",
              }}
            >
              <Typography variant="h6" sx={{ color: "primary.main" }}>
                About
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                autem habent admirationis, cum prope accesseris? Ratio quidem
                vestra sic cogit. Cum id quoque, ut cupiebat, audivisset, evelli
                iussit eam, qua erat transfixus, hastam. Quaesita enim virtus
                est, non quae relinqueret naturam, sed quae tueretur. Duo Reges:
                constructio interrete. Quae autem natura suae primae
                institutionis oblita est? At enim hic etiam dolore. Iam id ipsum
                absurdum, maximum malum neglegi. Cum id quoque, ut cupiebat,
                audivisset, evelli iussit eam, qua erat transfixus, hastam.
                Quaesita enim virtus est, non quae relinqueret naturam, sed quae
                tueretur. Duo Reges: constructio interrete. Quae autem natura
                suae primae institutionis oblita est? At enim hic etiam dolore.
                Iam id ipsum absurdum, maximum malum neglegi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} sx={{}}>
            <Box
              sx={{ px: 4, py: 2, borderRadius: 2, border: "1px solid grey" }}
            >
              <Typography variant="h6" sx={{ color: "primary.main" }}>
                Financial Status
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                autem habent admirationis, cum prope accesseris? Ratio quidem
                vestra sic cogit. Cum id quoque, ut cupiebat, audivisset, evelli
                iussit eam, qua erat transfixus, hastam. Quaesita enim virtus
                est, non quae relinqueret naturam, sed quae tueretur. Duo Reges:
                constructio interrete. Quae autem natura suae primae
                institutionis oblita est? At enim hic etiam dolore. Iam id ipsum
                absurdum, maximum malum neglegi. Cum id quoque, ut cupiebat,
                audivisset, evelli iussit eam, qua erat transfixus, hastam.
                Quaesita enim virtus est, non quae relinqueret naturam, sed quae
                tueretur. Duo Reges: constructio interrete. Quae autem natura
                suae primae institutionis oblita est? At enim hic etiam dolore.
                Iam id ipsum absurdum, maximum malum neglegi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            <Box
              sx={{ px: 4, py: 2, borderRadius: 2, border: "1px solid grey" }}
            >
              <Typography variant="h6" sx={{ color: "primary.main" }}>
                Find Your Programs
              </Typography>
              <Box sx={{ py: 2 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="search"
                    type="text"
                    variant="outlined"
                    label="Find Programs"
                    placeholder="Find Programs"
                    margin="dense"
                    fullWidth
                  />
                </Grid>
              </Box>
              <Box sx={{ my: 2 }}>
                <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
                  {courses.map((p, index) => (
                    <>
                      <Grid item xs={12} sm={6}>
                        <Box
                          sx={{
                            width: "100%",
                            minHeight: 240,
                            boxSizing: "border-box",
                            border: "1px solid",
                            borderColor: "primary.main",
                            borderRadius: 2,
                            px: 4,
                            py: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 22,
                              fontWeight: "bold",
                              color: "primary.main",
                              textDecoration: "none",
                            }}
                            component="a"
                            href={`/school/${router.query.id}/course/${index}`}
                          >
                            Course {p.name}
                          </Typography>
                          <Typography sx={{ fontSize: 17, mt: 1 }}>
                            Tution : {p.tutionFees}
                          </Typography>
                          <Typography sx={{ fontSize: 17 }}>
                            Application Fees : {p.applicationFees}
                          </Typography>
                          <Typography sx={{ fontSize: 17 }}>
                            Start: {p.start} | End : {p.end}
                          </Typography>
                          <Button variant="outlined" sx={{ my: 1 }}>
                            Check Eligibility
                          </Button>
                        </Box>
                      </Grid>
                    </>
                  ))}
                </Grid>
                {course.length !== courses.length && (
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Button variant="outlined" onClick={handleLoadMore}>
                      Load More
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
