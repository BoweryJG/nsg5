const {AppBar, Toolbar, Typography, Container, Button, CssBaseline} = MaterialUI;
const {createRoot} = ReactDOM;

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The New Smile Guide
          </Typography>
        </Toolbar>
      </AppBar>
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
