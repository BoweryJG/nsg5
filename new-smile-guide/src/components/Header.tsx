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
  Chip,
  Divider,
  alpha,
  Badge,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import { keyframes } from '@mui/system';

// Animations
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Navigation link type
interface NavLink {
  title: string;
  path: string;
  icon: React.ReactElement;
  highlight?: boolean;
}

// Primary navigation links (always visible)
const primaryNavLinks: NavLink[] = [
  { title: 'Home', path: '/', icon: <MedicalServicesOutlinedIcon /> },
  { title: 'About', path: '/about', icon: <InfoOutlinedIcon /> },
  { title: 'Dental Implants', path: '/dental-implants', icon: <LocalHospitalOutlinedIcon /> },
  { title: 'Courses', path: '/courses', icon: <SchoolOutlinedIcon />, highlight: true },
];

// Secondary navigation links (in dropdown)
const secondaryNavLinks: NavLink[] = [
  { title: 'Financing', path: '/financing', icon: <AttachMoneyOutlinedIcon /> },
  { title: 'Specialists', path: '/specialists', icon: <LocalHospitalOutlinedIcon /> },
  { title: 'Resources', path: '/resources', icon: <LibraryBooksOutlinedIcon /> },
  { title: 'Certificates', path: '/certificates', icon: <WorkspacePremiumOutlinedIcon /> },
  { title: 'Contact', path: '/contact', icon: <ContactPageOutlinedIcon /> },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLoggedIn = false; // This would be determined by your auth context
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMoreMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMoreMenuAnchor(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchor(null);
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

  const allNavLinks = [...primaryNavLinks, ...secondaryNavLinks];

  const drawer = (
    <Box sx={{ width: 280 }} role="presentation">
      <Box sx={{ p: 3, borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}` }}>
        <Typography variant="h6" fontWeight={700} color="primary.main" sx={{ fontFamily: 'Merriweather, serif' }}>
          New Smile Guide
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Expert Dental Implant Education
        </Typography>
      </Box>
      
      <List sx={{ pt: 2 }}>
        {allNavLinks.map((link) => (
          <ListItem key={link.title} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton 
              component={RouterLink} 
              to={link.path}
              onClick={toggleDrawer(false)}
              sx={{
                mx: 2,
                borderRadius: 2,
                py: 1.5,
                backgroundColor: location.pathname === link.path ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                }
              }}
            >
              <Box sx={{ mr: 2, color: location.pathname === link.path ? 'primary.main' : 'text.secondary' }}>
                {link.icon}
              </Box>
              <ListItemText 
                primary={link.title} 
                sx={{ 
                  '& .MuiListItemText-primary': { 
                    fontWeight: location.pathname === link.path ? 600 : 400,
                    color: location.pathname === link.path ? 'primary.main' : 'text.primary'
                  } 
                }}
              />
              {link.highlight && (
                <Chip 
                  label="$500" 
                  size="small" 
                  color="secondary"
                  sx={{ fontSize: '0.7rem', height: 20 }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
        
        <Divider sx={{ my: 2, mx: 2 }} />
        
        {isAdmin && (
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton 
              component={RouterLink} 
              to="/admin/analytics"
              onClick={toggleDrawer(false)}
              sx={{
                mx: 2,
                borderRadius: 2,
                py: 1.5,
                backgroundColor: location.pathname === '/admin/analytics' ? alpha(theme.palette.warning.main, 0.1) : 'transparent',
              }}
            >
              <Box sx={{ mr: 2, color: 'warning.main' }}>
                <AdminPanelSettingsOutlinedIcon />
              </Box>
              <ListItemText primary="Admin Panel" />
            </ListItemButton>
          </ListItem>
        )}
        
        <ListItem disablePadding>
          <ListItemButton 
            component={RouterLink} 
            to={isLoggedIn ? "/dashboard" : "/login"}
            onClick={toggleDrawer(false)}
            sx={{
              mx: 2,
              borderRadius: 2,
              py: 1.5,
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            <Box sx={{ mr: 2, color: 'primary.main' }}>
              {isLoggedIn ? <DashboardOutlinedIcon /> : <LoginOutlinedIcon />}
            </Box>
            <ListItemText 
              primary={isLoggedIn ? "Dashboard" : "Login"} 
              sx={{ '& .MuiListItemText-primary': { fontWeight: 600, color: 'primary.main' } }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const moreMenu = (
    <Menu
      anchorEl={moreMenuAnchor}
      open={Boolean(moreMenuAnchor)}
      onClose={handleMoreMenuClose}
      PaperProps={{
        elevation: 8,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.15))',
          mt: 1.5,
          borderRadius: 3,
          minWidth: 220,
          '& .MuiMenuItem-root': {
            py: 1.5,
            px: 2,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {secondaryNavLinks.map((link) => (
        <MenuItem 
          key={link.title}
          component={RouterLink} 
          to={link.path} 
          onClick={handleMoreMenuClose}
          sx={{
            backgroundColor: location.pathname === link.path ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
            }
          }}
        >
          <Box sx={{ mr: 2, color: location.pathname === link.path ? 'primary.main' : 'text.secondary' }}>
            {link.icon}
          </Box>
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: location.pathname === link.path ? 600 : 400,
              color: location.pathname === link.path ? 'primary.main' : 'text.primary'
            }}
          >
            {link.title}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleProfileMenuClose}
      PaperProps={{
        elevation: 8,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.15))',
          mt: 1.5,
          borderRadius: 3,
          minWidth: 200,
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem component={RouterLink} to="/dashboard" onClick={handleProfileMenuClose}>
        <DashboardOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> 
        Dashboard
      </MenuItem>
      <MenuItem component={RouterLink} to="/profile" onClick={handleProfileMenuClose}>
        <PersonOutlineOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> 
        My Profile
      </MenuItem>
      <MenuItem component={RouterLink} to="/my-courses" onClick={handleProfileMenuClose}>
        <SchoolOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> 
        My Courses
      </MenuItem>
      <MenuItem component={RouterLink} to="/certificates" onClick={handleProfileMenuClose}>
        <WorkspacePremiumOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> 
        Certificates
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleProfileMenuClose}>
        <LogoutOutlinedIcon sx={{ mr: 1.5, opacity: 0.7 }} fontSize="small" /> 
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          {/* Logo/Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 2, md: 4 } }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': {
                  '& .logo-icon': {
                    animation: `${pulse} 1s ease-in-out`,
                  }
                }
              }}
            >
              <Box
                className="logo-icon"
                sx={{
                  width: { xs: 36, md: 42 },
                  height: { xs: 36, md: 42 },
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: { xs: 1, md: 2 },
                  boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                }}
              >
                <MedicalServicesOutlinedIcon sx={{ color: 'white', fontSize: { xs: 20, md: 24 } }} />
              </Box>
              
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    lineHeight: 1.2,
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  New Smile Guide
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: '1.1rem',
                    display: { xs: 'block', sm: 'none' }
                  }}
                >
                  NSG
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.7rem',
                    lineHeight: 1,
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  Expert Dental Education
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Mobile menu icon */}
          {isTablet && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open navigation menu"
              onClick={toggleDrawer(true)}
              sx={{ 
                mr: 2,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                }
              }}
            >
              <MenuOutlinedIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          )}

          {/* Desktop navigation */}
          <Box
            component="nav"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', lg: 'flex' }, 
              justifyContent: 'center',
              gap: 1
            }}
          >
            {primaryNavLinks.map((link) => (
              <Button
                key={link.title}
                component={NavLink}
                to={link.path}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  position: 'relative',
                  color: location.pathname === link.path ? 'primary.main' : 'text.primary',
                  backgroundColor: location.pathname === link.path ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    color: 'primary.main',
                  },
                }}
                startIcon={React.cloneElement(link.icon, { 
                  sx: { fontSize: 18 } 
                })}
                endIcon={link.highlight ? (
                  <Chip 
                    label="$500" 
                    size="small" 
                    color="secondary"
                    sx={{ 
                      fontSize: '0.7rem', 
                      height: 20,
                      animation: `${shimmer} 2s infinite linear`,
                      background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 50%, ${theme.palette.secondary.main} 100%)`,
                      backgroundSize: '200px 100%',
                    }}
                  />
                ) : null}
              >
                {link.title}
              </Button>
            ))}
            
            {/* More menu button */}
            <Button
              onClick={handleMoreMenuOpen}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  color: 'primary.main',
                },
              }}
              endIcon={<ExpandMoreOutlinedIcon />}
            >
              More
            </Button>
          </Box>

          {/* Admin badge */}
          {isAdmin && !isTablet && (
            <Badge
              badgeContent="Admin"
              color="warning"
              sx={{
                mr: 2,
                '& .MuiBadge-badge': {
                  fontSize: '0.6rem',
                  height: 16,
                  minWidth: 16,
                }
              }}
            >
              <IconButton
                component={RouterLink}
                to="/admin/analytics"
                sx={{
                  p: 1,
                  borderRadius: 2,
                  backgroundColor: location.pathname === '/admin/analytics' ? alpha(theme.palette.warning.main, 0.1) : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.warning.main, 0.1),
                  }
                }}
              >
                <AdminPanelSettingsOutlinedIcon sx={{ color: 'warning.main' }} />
              </IconButton>
            </Badge>
          )}

          {/* User account */}
          <Box sx={{ flexGrow: 0 }}>
            {!isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/login"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderRadius: 50,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.4)}`,
                    transform: 'translateY(-1px)',
                  }
                }}
                startIcon={<LoginOutlinedIcon />}
              >
                {isTablet ? 'Login' : 'Get Started'}
              </Button>
            ) : (
              <IconButton
                onClick={handleProfileMenuOpen}
                sx={{ 
                  p: 0.5,
                  borderRadius: 2,
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                  }
                }}
              >
                <Avatar 
                  alt="User Profile" 
                  sx={{ 
                    width: 36, 
                    height: 36,
                    bgcolor: theme.palette.primary.main,
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                >
                  U
                </Avatar>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer 
        anchor="left" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* More menu */}
      {moreMenu}

      {/* Profile dropdown menu */}
      {profileMenu}
    </AppBar>
  );
};

export default Header;
