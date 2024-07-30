import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Divider, CssBaseline, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import NavbarAdmin from '../Navbar/NavbarAdmin'; 

import Navbar from '../Navbar/NavBar';
import ManageUsers from './ManageUsers'; 
import ViewGyms from './ManageGyms/ViewGyms';

const drawerWidth = 150;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth : 0,

  zIndex: 1,
  position: 'relative',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminHomePage({ user, onLogout }) {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Manage Users');
  // const [user, setUser] = useState(localStorage.getItem('user'));

  // const handleLogout = () => {
  //   setUser('');
  // };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="layout">
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <NavbarAdmin user={user} onLogout={onLogout} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            zIndex: (theme) => theme.zIndex.drawer,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button onClick={() => handleNavigation('Manage Users')}>
            <ListItemText primary="Manage Users" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('Manage Gyms')}>
            <ListItemText primary="Manage Gyms" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('messages')}>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('settings')}>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main className={open ? 'drawer-open' : 'drawer-closed'}>
        <DrawerHeader />
        <Typography paragraph>
          {activeTab === 'Manage Users' && <ManageUserContent  />}
          {activeTab === 'Manage Gyms' && <ManageGymContent />}
          {activeTab === 'messages' && <MessagesContent />}
          {activeTab === 'settings' && <SettingsContent />}
        </Typography>
      </Main>
    </div>
  );
}

function ManageUserContent() {
  return <div><ManageUsers /></div>;
}

function ManageGymContent() {
  return <div><ViewGyms /></div>;
}

function MessagesContent() {
  return <div>Messages Content Component</div>;
}

function SettingsContent() {
  return <div>Settings Content Component</div>;
}
