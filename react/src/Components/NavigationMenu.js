import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NavigationMenu() {
  const classes = useStyles();
  const [openTech, setOpenTech] = React.useState(true);
  const [openPlan, setOpenPlan] = React.useState(true);
  const [openOrg, setOpenOrg] = React.useState(true);
  const [state, setState] = React.useState({
    top: false,
    bottom: false,
    rigth: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (text) => {
    switch(text) {
      case "Tech":
        setOpenTech(!openTech)
        break
      case "Plan":
        setOpenPlan(!openPlan)
        break
      case "Org":
        setOpenOrg(!openOrg)
        break
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/*TODO: Can different pages be mapped from an array instead of hardcoding them? */}
      {/*Technical pages*/}
      <ListItem button onClick={() => handleClick("Tech")}>
        <Link to="/technical" style={{textDecoration: "none", color: "#2F5A91", width: "75%"}}><ListItemText primary="Technische Lösungen"/></Link>
        {!openTech ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!openTech} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Balkon', 'Betrieb', 'Brandschutz', 'Dach',  'Fenster',  'Fundament', 'Wand'].map((text, index) => (
            <Link to={`/technical/${text.toLowerCase()}`} 
                  style={{textDecoration: "none", color: "#767070"}}>
                    <ListItem button key={text} className={classes.nested}>
                      <ListItemText primary={text} />
                    </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      {/*Planning pages*/}
      <ListItem button onClick={() => handleClick("Plan")}>
        <Link to="/planning" style={{textDecoration: "none", color: "#2F5A91", width: "75%"}}><ListItemText primary="Planerische Lösungen" /></Link>
        {!openPlan ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!openPlan} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Betrieb', 'Brandschutz', 'Gesamtsystem', 'Grundriss', 'Heizung', 'Kühlung', 'Lüftung'].map((text, index) => (
            <Link to={`/planning/${text.toLowerCase().replace("ü", "u")}`}
                  style={{textDecoration: "none", color: "#767070"}}>
              <ListItem button className={classes.nested}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      {/*Organisational pages*/}
      <ListItem button onClick={() => handleClick("Org")}>
        <Link to="/organisational" style={{textDecoration: "none", color: "#2F5A91", width: "75%"}}><ListItemText primary="Organisatorische Lösungen" /></Link>
        {!openOrg ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!openOrg} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Ausschreibung', 'Betrieb', 'Marktanalyse', 'Qualitätsmanagement', 'Vorfertigung', 'Zeitmanagement'].map((text, index) => (
            <Link to={`/organisational/${text.toLowerCase().replace("ä", "a")}`}
                  style={{textDecoration: "none", color: "#767070"}}>
              <ListItem button className={classes.nested}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      <ListItem>
        <Link to="/literature" style={{textDecoration: "none", color: "#2F5A91"}}><ListItemText primary="Literatur"></ListItemText></Link>
      </ListItem>
      <Divider />
      <List>
        <ListItem>
          <Link to="/library" style={{ textDecoration: "none", color: "#767070"}}><ListItemText primary="Bibliothek" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/faq" style={{ textDecoration: "none", color: "#767070"}}><ListItemText primary="FAQ" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/idee-teilen" style={{ textDecoration: "none", color: "#767070"}}><ListItemText primary="Idee Teilen" /></Link>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{color: "#767070"}}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
     
    </div>
  );
}