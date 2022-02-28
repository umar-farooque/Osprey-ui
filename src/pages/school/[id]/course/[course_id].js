import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  modal: {
    display: "flex",
    // width: 800,
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Course() {
  const router = useRouter();
  const classes = useStyles();
  // console.log(">>>router", router);
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center" }}>
        Course ID {router.query.course_id}
      </h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                <img
                  src="https://picsum.photos/1000/400"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 5,
                    objectFit: "cover",
                  }}
                  alt="Course Image"
                />
                <Box
                  sx={{
                    backgroundColor: "#797D7F94",
                    position: "absolute",
                    width: "100%",
                    height: 80,
                    bottom: 0,
                    borderBottomRightRadius: 2,
                    borderBottomLeftRadius: 2,
                  }}
                >
                  <Box sx={{ position: "relative", color: "white" }}>
                    <Grid container>
                      <Grid item xs={3}>
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
                      <Grid item xs={9}>
                        <Box sx={{ py: 1 }}>
                          <Typography variant="h6">
                            Energy Conversion Program
                          </Typography>
                          <Typography>Kingston Clg</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Box>
                  <Paper
                    sx={{
                      height: "100%",
                      width: "100%",
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#F7F4F4",
                      boxShadow: 0,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      About This Program
                    </Typography>
                    <Box sx={{ my: 1 }}>
                      <Typography>
                        Level : Advanced Diploma In Engineering Systems
                      </Typography>
                    </Box>
                    <Box sx={{ my: 1 }}>
                      <Typography>
                        Disciple: Civil And Environmental Engineering
                      </Typography>
                    </Box>
                    <Box sx={{ my: 1 }}>
                      <Typography>Length : 6 Semesters</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                    >
                      <Button variant="outlined" fullWidth>
                        Check My Eligibility
                      </Button>
                    </Box>
                  </Paper>
                </Box>
                <Box>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: "#F7F4F4",
                      boxShadow: 0,
                      borderRadius: 2,
                    }}
                  >
                    <Typography sx={{ my: 1 }}>
                      Application Fee : $100
                    </Typography>
                    <Divider />
                    <Typography sx={{ my: 1 }}>Tution Fee : $100</Typography>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2, height: "100%" }}>
            <Grid item xs={12} sm={7}>
              <Box sx={{ p: 4, border: "1px solid grey", borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Program Description
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex
                  eorum enim scriptis et institutis cum omnis doctrina
                  liberalis, omnis historia. Primum divisit ineleganter; Qui
                  enim voluptatem ipsam contemnunt, iis licet dicere se
                  acupenserem maenae non anteponere. Quare obscurentur etiam
                  haec, quae secundum naturam esse dicimus, in vita beata; Me
                  igitur ipsum ames oportet, non mea, si veri amici futuri
                  sumus. Nec tamen ullo modo summum pecudis bonum et hominis
                  idem mihi videri potest. Nam nisi hoc optineatur, id solum
                  bonum esse, quod honestum sit, nullo modo probari possit
                  beatam vitam virtute effici. Si alia sentit, inquam, alia
                  loquitur, numquam intellegam quid sentiat; Duo Reges:
                  constructio interrete. An dubium est, quin virtus ita maximam
                  partem optineat in rebus humanis, ut reliquas obruat? Hi autem
                  ponunt illi quidem prima naturae, sed ea seiungunt a finibus
                  et a summa bonorum; Non enim iam stirpis bonum quaeret, sed
                  animalis. Scientiam pollicentur, quam non erat mirum
                  sapientiae cupido patria esse cariorem.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} sx={{}}>
              <Box
                sx={{
                  p: 4,
                  border: "1px solid grey",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Kingston Campus
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Starting</Typography>
                  <Typography>End</Typography>
                  <Typography>Status</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 1,
                  }}
                >
                  <Typography>Jun 2021</Typography>
                  <Typography>June 2023</Typography>
                  <Typography>Active</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>June 2021</Typography>
                  <Typography>Sept 2023</Typography>
                  <Typography>Closed</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{ my: 2, p: 4, border: "1px solid grey", borderRadius: 2 }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Study And Work In Canada
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                profecto est, quin suam vim retineat a primo ad extremum.
                Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Sed
                haec quidem liberius ab eo dicuntur et saepius. Nam et
                complectitur verbis, quod vult, et dicit plane, quod
                intellegam;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed quid attinet de rebus tam apertis plura requirere? Hoc
                etsi multimodis reprehendi potest, tamen accipio, quod dant. Non
                enim solum Torquatus dixit quid sentiret, sed etiam cur. Isto
                modo, ne si avia quidem eius nata non esset. Quis est enim, in
                quo sit cupiditas, quin recte cupidus dici possit? Nam memini
                etiam quae nolo
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Modal className={classes.modal}></Modal>
    </div>
  );
}
