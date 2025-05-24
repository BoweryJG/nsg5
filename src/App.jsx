const {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  CssBaseline,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} = MaterialUI;
const { Menu } = MaterialUIIcons;
const { createRoot } = ReactDOM;

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navLinks = ['Home', 'Quiz', 'Gallery', 'Contact'];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navLinks.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Get Started" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ mr: 1 }}>
              <Menu />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The New Smile Guide
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, mr: 2 }}>
            {navLinks.map((text) => (
              <Button key={text} color="inherit" sx={{ ml: 1 }}>
                {text}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the New Smile Guide
        </Typography>
        <Button variant="contained" color="secondary">
          Start your Journey
        </Button>
      </Container>
    </React.Fragment>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
