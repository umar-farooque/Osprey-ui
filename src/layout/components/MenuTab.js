import React from "react";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: { width: 200 },
  Button: {
    padding: theme.spacing(1, 1.5),
    margin: theme.spacing(1, 0, 0, 0),
  },
  userContainer: {
    padding: theme.spacing(1, 1.5),
  },
}));

export default function MenuTab({
  anchorEl,
  id,
  open,
  onClose,
  onProfileClick,
  onLogout,
}) {
  const classes = useStyles();
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={onClose}
      style={{ marginTop: 20 }}
    >
      <div className={classes.root}>
        <div className={classes.userContainer}>
          <Typography>Hello User</Typography>
        </div>
        <Divider style={{ marginTop: 5 }} />
        <MenuItem
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
            justifyContent: "flex-start",
            // backgroundColor: "red",
          }}
          onClick={() => {
            onProfileClick();
            onClose();
          }}
        >
          <PersonIcon style={{ marginRight: 10 }} color="disabled" />
          <Typography>Profile</Typography>
        </MenuItem>
        <div className={classes.Button}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => {
              onLogout();
              onClose();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </Menu>
  );
}
