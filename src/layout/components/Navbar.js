import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ActiveLink from "../../components/ActiveLink";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import MenuTab from "./MenuTab";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import auth from "../../api/auth";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
    textDecoration: "none",
    color: "white",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function Navbar({ isLoggedIn = true }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobAnchorEl, setMobAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobMenuOpen = Boolean(mobAnchorEl);
  const router = useRouter();

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobAnchorEl(event.target);
  };
  const handleMobileMenuClose = () => {
    setMobAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.target);
  };

  const handleProfileClick = () => {
    router.push("/profile/edit");
  };
  const handleLogout = () => {
    auth.logout();
    router.push("/login");
  };

  const menuId = "profile-menu";
  const renderMenu = (
    <MenuTab
      anchorEl={anchorEl}
      open={isMenuOpen}
      id={menuId}
      onClose={handleMenuClose}
      onProfileClick={handleProfileClick}
      onLogout={handleLogout}
    />
  );

  const mobMenuId = "mobile-profile-menu";
  const renderMobileMenu = (
    <MobileMenu
      anchorEl={mobAnchorEl}
      id={mobMenuId}
      open={isMobMenuOpen}
      onClose={handleMobileMenuClose}
      onProfileClick={handleProfileClick}
    />
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={isLoggedIn ? 8 : 6}>
              <Typography
                variant="h4"
                noWrap
                sx={{
                  flexGrow: 1,
                  // display: { xs: "none", sm: "block" },
                }}
              >
                Osprey
              </Typography>
            </Grid>
            <Grid
              item
              // xs={6}
              xs={isLoggedIn ? 3 : 6}
              sx={{
                flexGrow: 1,
                // display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              <div className={classes.sectionDesktop}>
                <ActiveLink href="/search">
                  <a className={classes.link}>Find Programs</a>
                </ActiveLink>
                {!isLoggedIn && (
                  <>
                    <ActiveLink href="/students">
                      <a className={classes.link}>Students</a>
                    </ActiveLink>
                    <ActiveLink href="/agents">
                      <a className={classes.link}>Recruitment Partners</a>
                    </ActiveLink>
                  </>
                )}
                <ActiveLink href={isLoggedIn ? "/schools" : "/school-partners"}>
                  <a className={classes.link}>Schools</a>
                </ActiveLink>
                {isLoggedIn && (
                  <ActiveLink href="/applications">
                    <a className={classes.link}>My Application</a>
                  </ActiveLink>
                )}
              </div>
            </Grid>
            <Grid
              item
              xs={isLoggedIn ? 1 : 0}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isLoggedIn && (
                <>
                  <div className={classes.sectionDesktop}>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleMenuOpen}
                      color="inherit"
                    >
                      <AccountCircleIcon
                        sx={{ color: "white", fontSize: 25 }}
                      />
                    </IconButton>
                  </div>
                </>
              )}
              <div className={classes.sectionMobile}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={mobMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: "white", fontSize: 25 }} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </Box>
  );
}
