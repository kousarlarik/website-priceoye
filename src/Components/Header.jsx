import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, TextField, Modal, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useTheme } from '@mui/system';
import logo from "../asest/logo.svg";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#48afff' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Menu Button */}
        <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        {/* Sidebar Drawer */}
        <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
          <Box sx={{ width: 250, padding: 2 }}>
            <List>
              <ListItem button>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Navbar" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Logo as an image */}
        <div color="inherit" sx={{ marginLeft: 2 }}>
        <img
  src={logo}  // Use the correct relative path or URL
  alt="Logo"
  style={{ width: '120px', height: 'auto' }}
/>
        </div>

        {/* Search Bar (Centered) */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              width: '50%', // Adjusted width for better centering
            }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'gray' }} />,
              endAdornment: (
                <IconButton sx={{ padding: 0 }}>
                  <MicIcon sx={{ color: 'gray' }} />
                </IconButton>
              ),
            }}
          />
        </Box>

        {/* Login and Register Buttons */}
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            marginLeft: 2,
            '&:hover': {
              borderColor: '#fff',
              backgroundColor: 'transparent',
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            marginLeft: 2,
            '&:hover': {
              borderColor: '#fff',
              backgroundColor: 'transparent',
            },
          }}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
