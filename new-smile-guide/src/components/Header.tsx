import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Container,
  useMediaQuery,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link as RouterLink, NavLink } from 'react-router-dom';

// Navigation links
const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Dental Implants', path: '/dental-implants' },
  { title: 'Courses', path: '/courses' },
  { title: 'Financing', path: '/financing' },
  { title: 'Specialists', path: '/specialists' },
  { title: 'Resources', path: '/resources' },
  { title: 'Certificates', path: '/certificates' },
  { title: 'Admin', path: '/admin/analytics' },
  { title: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLoggedIn = false; // This would be determined by your auth context
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const profileMenuId = 'primary-menu-profile';

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navLinks
          .filter((link) => (link.title === 'Admin' ? isAdmin : true))
          .map((link) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton component={RouterLink} to={link.path}>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          ))}
        <ListItem disablePadding>
          {!isLoggedIn ? (
            <ListItemButton component={RouterLink} to="/login">
              <ListItemText primary="Login" />
            </ListItemButton>
          ) : (
            <ListItemButton component={RouterLink} to="/dashboard">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      id={profileMenuId}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleProfileMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
          mt: 1.5,
          borderRadius: 2,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem component={RouterLink} to="/dashboard" onClick={handleProfileMenuClose}>
        <DashboardOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> Dashboard
      </MenuItem>
      <MenuItem component={RouterLink} to="/profile" onClick={handleProfileMenuClose}>
        <PersonOutlineOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> My Profile
      </MenuItem>
      <MenuItem component={RouterLink} to="/my-courses" onClick={handleProfileMenuClose}>
        <SchoolOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> My Courses
      </MenuItem>
      <MenuItem component={RouterLink} to="/certificates" onClick={handleProfileMenuClose}>
        <WorkspacePremiumOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> Certificates
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <LogoutOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Brand */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            New Smile Guide
          </Typography>

          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          )}

          {/* Mobile logo */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            NSG
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navLinks
              .filter((link) => (link.title === 'Admin' ? isAdmin : true))
              .map((link) => (
                <Button
                  key={link.title}
                  component={NavLink}
                  to={link.path}
                  style={({ isActive }) => ({
                    color: isActive ? theme.palette.primary.main : undefined,
                    textDecoration: isActive ? 'underline' : 'none',
                  })}
                  sx={{
                    my: 2,
                    mx: 1,
                    display: 'block',
                    fontWeight: 500,
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.title}
                </Button>
              ))}
          </Box>

          {/* User account */}
          <Box sx={{ flexGrow: 0 }}>
            {!isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/login"
                sx={{ 
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: 50,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: 2,
                }}
                startIcon={<LoginOutlinedIcon />}
              >
                Log In
              </Button>
            ) : (
              <IconButton
                onClick={handleProfileMenuOpen}
                aria-controls={profileMenuId}
                aria-haspopup="true"
                sx={{ p: 0 }}
              >
                <Avatar alt="User Profile" src="/path/to/user-avatar.jpg" />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

      {/* Profile dropdown menu */}
      {profileMenu}
    </AppBar>
  );
};

export default Header;
