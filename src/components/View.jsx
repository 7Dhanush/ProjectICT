import React, { useState } from 'react' 
import { styled, alpha } from '@mui/material/styles';


import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { AppBar, Avatar,Button, Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText, Box} from '@mui/material';
import Display from './Display';

import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import img from "D:/Bug/abd/src/components/image/Screenshot 2023-05-22 144738.png";
// import Settings from './Settings';
import { Link} from 'react-router-dom';
import Interface from './Interface';
import Interface2 from './Interface2';



const drawerWidth= 1919;




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(90),
      width: 'auto',
    },
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '35ch',
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const TemporaryDrawer = ({ open, onClose }) => {
    return (
      <MUIDrawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={{
          width: drawerWidth,
          height: '550vh',
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          <ListItem Button  onClick={onClose}>
              <ListItemIcon  size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
              
              color="inherit">
                <Avatar alt="Cindy Baker" src={img} />
             
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
            <Link to={'/s'} >
            <ListItem Button onClick={onClose}>
             
              <ListItemIcon>
             <SettingsSharpIcon />
              </ListItemIcon>
              
              <ListItemText primary="Settings" />
            </ListItem>
            </Link>
            <ListItem Button>
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem Button>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItem>
          </List>
        </Box>
      </MUIDrawer>
    );
  };

  

const View= () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };



  return (
    <div >
      <div >
       <AppBar position="static" color='transparent' >

        <Toolbar>
          
          <Search > 
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
              
              color="inherit"
              onClick={handleDrawerOpen}
            >
               <Avatar alt="Cindy Baker" src={img} />
            </IconButton>
       
          </Toolbar>
          </AppBar>
          {/* <Display/> */}
          <Interface /> <Interface2 />
          
    
    <TemporaryDrawer open={drawerOpen} onClose={handleDrawerClose} /> 
   </div>
    </div>
  )
}

export default View