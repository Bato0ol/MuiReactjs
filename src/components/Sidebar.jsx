import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import {Home,Assignment, Person, Store, Groups, Settings, AccountBox, ModeNight} from '@mui/icons-material/';
import { light } from '@mui/material/styles/createPalette';
function Sidebar({mode,setMode}) {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <Box position={"fixed"}>
     <List>   
       <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component="a" href={"#pages"}>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <Groups />
        </ListItemIcon>
        <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        <ListItemText primary="MarketPlace" />
        </ListItemButton>
        <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component="a" href={"#home"}>
        <ListItemIcon>
          <ModeNight />
        </ListItemIcon>
       <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}></Switch>
        </ListItemButton>
        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
