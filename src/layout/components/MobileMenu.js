import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import PersonIcon from "@mui/icons-material/Person";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: { width: 230 },
  Button: {
    padding: theme.spacing(1, 1.5),
    margin: theme.spacing(1, 0, 0, 0),
  },
  userContainer: {
    padding: theme.spacing(1, 1.5),
  },
}));

export default function MobileMenu({
  anchorEl,
  id,
  open,
  onClose,
  onProfileClick,
}) {
  const classes = useStyles();

  return (
    <Menu
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={id}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={onClose}
      style={{ marginTop: 0 }}
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
          }}
          onClick={() => {
            onProfileClick();
            onClose();
          }}
        >
          <PersonIcon style={{ marginRight: 10 }} color="disabled" />
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <AttachFileIcon style={{ marginRight: 10 }} color="disabled" />
          <Typography>My Application</Typography>
        </MenuItem>
        <MenuItem
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            onClose();
          }}
        >
          <SearchIcon style={{ marginRight: 10 }} color="disabled" />
          <Typography>Find Program</Typography>
        </MenuItem>
        <MenuItem
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            onClose();
          }}
        >
          <AddBusinessIcon style={{ marginRight: 10 }} color="disabled" />
          <Typography>School</Typography>
        </MenuItem>
        <div className={classes.Button}>
          <Button variant="outlined" color="primary" fullWidth>
            Logout
          </Button>
        </div>
      </div>
    </Menu>
  );
}
