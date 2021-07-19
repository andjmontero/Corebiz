import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import CloseIcon from "@material-ui/icons/Close";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  drawer: {
    textAlign: "left",
    width: "300px",
    backgroundColor: "#f2f2f2",
    height: "100%",
  },
  list: { borderBottom: "solid 1px grey" },
  close: { margin: "20px" },
});
function Drawer({ ToggleDrawer }) {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon />,
    },
    {
      text: "Mi Cuenta",
      icon: <PersonOutlineIcon />,
    },
    {
      text: "Contact",
      icon: <MailIcon />,
    },
  ];
  return (
    <div className={classes.drawer}>
      <CloseIcon
        onClick={() => ToggleDrawer(false)}
        className={classes.close}
      />
      <List>
        {itemsList.map((item) => {
          const { text, icon } = item;
          return (
            <ListItem button key={text} className={classes.list}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default Drawer;
