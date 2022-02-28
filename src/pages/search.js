import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import slice from "lodash/slice";
import concat from "lodash/concat";
import debounce from "lodash/debounce";
import filter from "lodash/filter";
import SearchFilter from "../components/search/SearchFilter";
import SearchResults from "../components/search/SearchResults";
import usePagination from "../hooks/usePagination";

let schools = [
  {
    schoolName: "University Of Lethbridge",
    location: "Lethbridge,  Alberta",
    country: "Canada",
    degree: "Bachelor's Degree",
    field: "Architecture",
    schoolFeature: "Work While Studying",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Computer Programmer",
        subtitle: "Diploma - Computer Engineering",
      },
      {
        title: "Cyber Security & Threat Management",
        subtitle: "Graduate Certificate - Computer Engineering",
      },
      {
        title: "Building System Engineering Technician",
        subtitle: "Diploma - Technical Engineering",
      },
    ],
  },
  {
    schoolName: "St. Lawrence College -Kingston Campus",
    location: "Kingston, Ontario",
    country: "Canada",
    degree: "Bachelor's Degree",
    field: "Degree",
    schoolFeature: "Work While Studying",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Mohawk College - Fennel",
    location: "Hamilton , Ontario",
    country: "Canada",
    degree: "Bachelor Degree",
    field: "Architecture",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Computer Programmer",
        subtitle: "Diploma - Computer Engineering",
      },
      {
        title: "Cyber Security & Threat Management",
        subtitle: "Graduate Certificate - Computer Engineering",
      },
      {
        title: "Building System Engineering Technician",
        subtitle: "Diploma - Technical Engineering",
      },
    ],
  },
  {
    schoolName: "Lipscomb University - Main Campus",
    location: "Nashville , Tennessee",
    country: "Canada",
    degree: "Bachelor Degree",
    field: "Medical & Health Science",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Computer Programmer",
        subtitle: "Diploma - Computer Engineering",
      },
      {
        title: "Cyber Security & Threat Management",
        subtitle: "Graduate Certificate - Computer Engineering",
      },
      {
        title: "Building System Engineering Technician",
        subtitle: "Diploma - Technical Engineering",
      },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Libscomb University - Main Campus",
    location: "Nashville, Tenessee",
    country: "Australia",
    degree: "Master's Degree",
    field: "Arts & Human Resource",
    schoolFeature: "Post Graduation Work Permit",
    intake: true,
    fees: "56321",
    courses: [
      {
        title: "Computer Programmer",
        subtitle: "Diploma - Computer Engineering",
      },
      {
        title: "Cyber Security & Threat Management",
        subtitle: "Graduate Certificate - Computer Engineering",
      },
      {
        title: "Building System Engineering Technician",
        subtitle: "Diploma - Technical Engineering",
      },
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Lambton College - Sarnia Campus",
    location: "Sarnia , Ontario",
    country: "Canada",
    degree: "Graduate Certificate",
    field: "Engineering",
    schoolFeature: "",
    intake: false,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Computer Programmer",
        subtitle: "Diploma - Computer Engineering",
      },
      {
        title: "Cyber Security & Threat Management",
        subtitle: "Graduate Certificate - Computer Engineering",
      },
      {
        title: "Building System Engineering Technician",
        subtitle: "Diploma - Technical Engineering",
      },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Seneca College - King",
    location: "King, Ontario",
    country: "Canada",
    degree: "Certificate",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Computer Programmer",
        subtitle: "Diploma - Computer Engineering",
      },
      {
        title: "Cyber Security & Threat Management",
        subtitle: "Graduate Certificate - Computer Engineering",
      },
      {
        title: "Building System Engineering Technician",
        subtitle: "Diploma - Technical Engineering",
      },
    ],
  },
  {
    schoolName: "Kings University College - London",
    location: "London, Ontario",
    country: "Australia",
    degree: "Collaborative Degree",
    field: "Education",
    schoolFeature: "Work While Studying",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Human Rights",
        subtitle: "Bachelor's Degree - Human Rights Law",
      },
      {
        title: "World Religions",
        subtitle: "Bachelor's Degree - Religion",
      },
    ],
  },
  {
    schoolName: "Red Deer College - Red Deer",
    location: "Red Deer,Alberta",
    country: "Australia",
    degree: "Master's Degree",
    field: "Engineering",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Art(BA)",
        subtitle: "Bachelor's Degree - Art Practice",
      },
      {
        title: "Biology(BA)",
        subtitle: "Bachelor's Degree - Biology",
      },
      {
        title: "Office Administration",
        subtitle: "Certificate - Non-Profit Admnistration And Management",
      },
    ],
  },
  {
    schoolName: "Florida International University - Miami",
    location: "Miami, Florida",
    country: "Australia",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "St. Michel College - Montreal Campus",
    location: "Montreal,Quebec",
    country: "Australia",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Brock University - Niagra Region",
    location: "St. Catherines,Ontario",
    country: "Canada",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Acadia University - Main",
    location: "Wolfville,Nova Scotia",
    country: "Canada",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Trent University - Main",
    location: "Peterborough, Ontario",
    country: "Canada",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Thompson River University - Kamloops",
    location: "Kamloops,British Columbia",
    country: "Canada",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Parkland College -Yorkton",
    location: "Yorkton, Saskatchewan",
    country: "Canada",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Durhan College - Oshawa Campus",
    location: "Oshawa ,Ontario",
    country: "Australia",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
    ],
  },
  {
    schoolName: "Capilano University - Main",
    location: "North Vancouver,British Columbia",
    country: "Australia",
    degree: "",
    field: "",
    schoolFeature: "",
    intake: true,
    fees: "56321",
    courses: [
      { title: "Geography", subtitle: "Master's Degree - Geography" },
      { title: "French(MA)", subtitle: "Master's Degree" },
      {
        title: "Political Science",
        subtitle: "Bacheloer's Degree - Political Science",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Virtual Reality Production",
        subtitle: "Gradutate Certificate - Computer Engineering",
      },
      {
        title: "Cultural Resource Management ",
        subtitle: "Master's Degree Classic",
      },
      {
        title: "Bachelor Of Mechanical Engineering(Transfer)",
        subtitle: "Bachelor's Degree - Mechanical Engineering",
      },
      {
        title: "Bachelor Of Science,Nutrition(Transfer)",
        subtitle: "University Transfer - Nutrition",
      },
      {
        title: "Anthropology",
        subtitle: "Bachelor's Degree - Anthropology",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const minVal = 5360;
const maxVal = 53620;
const LIMIT = 3;

export default function Search() {
  const [data, setData] = React.useState(schools);
  const [search, setSearch] = React.useState("");
  const [countryFilter, setCountryFilter] = React.useState("");
  const [fieldFilter, setFieldFilter] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [schoolFeature, setSchoolFeature] = React.useState("");
  const [intake, setIntake] = React.useState(false);
  const [range, setRange] = React.useState([minVal, maxVal]);

  const isInitialLoad = countryFilter || degree || schoolFeature || intake;

  // console.log(">>>>>>", Boolean(isInitialLoad));
  const { slicedArr: list, handleLoadMore } = usePagination(data, LIMIT);
  const SearchQuery = React.useCallback(
    (value) => {
      let filterResult;
      console.log(">>>search query called", value);

      // filterResult = filter(schools, {
      //   country: countryFilter,
      // });

      // search and country and degree and field and intake and tution fees and school features
      // if (search && countryFilter && degree && schoolFeature && intake) {
      //   filterResult = schools.filter(
      //     (s) => s.schoolName.includes(value) && s.country === countryFilter
      //   );
      // }
      // //  search and country and degree and field and tution fees
      // else if (search && countryFilter && degree && schoolFeature) {
      //   filterResult = schools.filter(
      //     (s) => s.schoolName.includes(value) && s.country === countryFilter
      //   );
      // }
      // // search and country and degree and field
      // else if (search && countryFilter && degree) {
      //   filterResult = schools.filter(
      //     (s) => s.schoolName.includes(value) && s.country === countryFilter
      //   );
      // }
      // // search and country and degree
      // else if (search && countryFilter) {
      //   filterResult = schools.filter(
      //     (s) => s.schoolName.includes(value) && s.country === countryFilter
      //   );
      // }
      // // search and country
      // else {
      //   filterResult = schools.filter((s) => s.schoolName.includes(value) < 0);
      // }
      // search

      // console.log(
      //   ">>>search query called",
      //   value,
      //   countryFilter,
      //   degree,
      //   schoolFeature,
      //   intake,
      //   range,
      //   fieldFilter
      // );

      // let filteredArry = schools.filter(
      //   (s) =>
      //     s.schoolName.toLowerCase().includes(value.toLowerCase()) &&
      //     s.country === countryFilter
      // );
      console.log(">>>filteredArry", filterResult);
    },
    [countryFilter, degree, schoolFeature, intake, range, fieldFilter, search]
  );

  // const rangeHandler = React.useMemo(
  //   () =>
  //     throttle((val) => {
  //       console.log(">>> range throttler", val);
  //       setRange(val);
  //     }, 3000),
  //   []
  // );

  const searchHandler = React.useCallback(
    (value) => {
      console.log(">>>search handler called>>>", value);
      setSearch(value);
      SearchQuery(value);
    },
    [SearchQuery]
  );
  React.useEffect(() => {
    // console.log(">>>codition 1", range[0] !== minVal || range[1] !== maxVal);
    // console.log(
    //   ">>>conditiion 2",
    //   isInitialLoad || range[0] !== minVal || range[1] !== maxVal
    // );
    if (isInitialLoad || range[0] !== minVal || range[1] !== maxVal) {
      console.log(">> Filter Effct >>>>>>>>>>>>");
      searchHandler(search);
      return;
    }
    console.log(">> INitial Effct >>>>>>>>>>>>");
  }, [
    isInitialLoad,
    countryFilter,
    degree,
    schoolFeature,
    intake,
    range,
    fieldFilter,
  ]);

  const debounceHandler = React.useMemo(
    () => debounce((e) => searchHandler(e.target.value), 500),
    [searchHandler]
  );

  React.useEffect(() => {
    return () => {
      debounceHandler.cancel();
    };
  }, []);

  const classes = useStyles();
  console.log(">>>>>>>>>>>******Search******<<<<<<<<<<<<<<<");

  return (
    <Box className={classes.root}>
      <Grid item xs={11}>
        <TextField
          fullWidth
          name="search_field"
          type="text"
          variant="outlined"
          label="Search"
          placeholder="Search Courses"
          onChange={debounceHandler}
        />
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <SearchFilter
                minVal={minVal}
                maxVal={maxVal}
                intake={intake}
                range={range}
                degreeFilter={degree}
                fieldFilter={fieldFilter}
                schoolFeature={schoolFeature}
                countryFilter={countryFilter}
                setIntake={setIntake}
                setRange={setRange}
                setDegreeFilter={setDegree}
                setFieldFilter={setFieldFilter}
                setSchoolFeature={setSchoolFeature}
                setCountryFilter={setCountryFilter}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <SearchResults
                schools={list}
                loadMore={handleLoadMore}
                showMore={data.length !== list.length}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

// const [index, setIndex] = React.useState(LIMIT);
// const [list, setList] = React.useState(slice(data, 0, LIMIT));

// const handleLoadMore = React.useCallback(() => {
//   const newIndex = index + LIMIT;
//   const newList = concat(list, slice(data, index, newIndex));
//   setList(newList);
//   setIndex(newIndex);
//   // return setData((prevState) => prevState.concat(schools.slice(3)));
// }, [data, list, index]);
