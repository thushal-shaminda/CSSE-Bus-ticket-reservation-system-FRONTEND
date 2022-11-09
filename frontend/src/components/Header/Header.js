import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TodayIcon from '@mui/icons-material/Today';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import FeedIcon from '@mui/icons-material/Feed';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

import './header.css';

const drawerWidth = 260;

export default function Header() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        margin="1000px"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
        
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />

        <a className="Nav-text text-dark" href="/home">
        <List component="div" disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>
        </a>

        <a className="Nav-text text-dark" href="/bus/add/new/route">
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AltRouteIcon />
            </ListItemIcon>
            <ListItemText primary="Bus Routes" />
          </ListItemButton>
        </List>
        </a>

        <a className="Nav-text text-dark" href="/bus/view/info">
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DirectionsBusFilledIcon />
            </ListItemIcon>
            <ListItemText primary="Buses List" />
          </ListItemButton>
        </List>
        </a>

        <a className="Nav-text text-dark" href="/bus/timetable/new">
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText primary="Timetables" />
          </ListItemButton>
        </List>
        </a>

        <Divider />

        <List>
        <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>

        <a className="Nav-text text-dark" href="/bus/report/finance-daily">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Daily Financial Report" />
          </ListItemButton>
        </List>
        </a>

        <a className="Nav-text text-dark" href="/bus/report/finance-monthly">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Monthly Financial Report" />
          </ListItemButton>
        </List>
        </a>

        <a className="Nav-text text-dark" href="">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Bus Information" />
          </ListItemButton>
        </List>
        </a>

        <a className="Nav-text text-dark" href="">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Route Information" />
          </ListItemButton>
        </List>
        </a>

      </Collapse>

      <Divider />

      <a className="Nav-text text-dark" href="/user/signin">
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </List>
        </a>

        </List>
      </Drawer>
    </>
  );
}
