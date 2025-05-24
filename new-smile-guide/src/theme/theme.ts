import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a custom theme with our brand colors
let theme = createTheme({
  palette: {
    primary: {
      main: '#386088', // Professional blue
      light: '#5a82a8',
      dark: '#1c4268',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f29c74', // Warm orange
      light: '#ffcca3',
      dark: '#bf6d47',
      contrastText: '#000000',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    // Custom colors that can be accessed via theme.palette.custom
    custom: {
      accent: '#f9a75f', // Sunshine yellow accent
      lightGray: '#f1f3f5',
      mediumGray: '#e0e0e0',
      darkGray: '#757575',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
      fontSize: '2.8rem',
    },
    h3: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.4rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 6px 12px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 10px 20px rgba(0, 0, 0, 0.05)',
    '0px 12px 24px rgba(0, 0, 0, 0.05)',
    '0px 14px 28px rgba(0, 0, 0, 0.05)',
    '0px 16px 32px rgba(0, 0, 0, 0.05)',
    '0px 18px 36px rgba(0, 0, 0, 0.05)',
    '0px 20px 40px rgba(0, 0, 0, 0.05)',
    '0px 22px 44px rgba(0, 0, 0, 0.05)',
    '0px 24px 48px rgba(0, 0, 0, 0.05)',
    '0px 26px 52px rgba(0, 0, 0, 0.05)',
    '0px 28px 56px rgba(0, 0, 0, 0.05)',
    '0px 30px 60px rgba(0, 0, 0, 0.05)',
    '0px 32px 64px rgba(0, 0, 0, 0.05)',
    '0px 34px 68px rgba(0, 0, 0, 0.05)',
    '0px 36px 72px rgba(0, 0, 0, 0.05)',
    '0px 38px 76px rgba(0, 0, 0, 0.05)',
    '0px 40px 80px rgba(0, 0, 0, 0.05)',
    '0px 42px 84px rgba(0, 0, 0, 0.05)',
    '0px 44px 88px rgba(0, 0, 0, 0.05)',
    '0px 46px 92px rgba(0, 0, 0, 0.05)',
    '0px 48px 96px rgba(0, 0, 0, 0.05)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 24px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
          borderRadius: 12,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
          '&:last-child': {
            paddingBottom: 24,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
} as any); // Using 'as any' to handle custom properties

// Make the typography responsive
theme = responsiveFontSizes(theme);

// Add types for custom palette colors
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      accent: string;
      lightGray: string;
      mediumGray: string;
      darkGray: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      accent?: string;
      lightGray?: string;
      mediumGray?: string;
      darkGray?: string;
    };
  }
}

export default theme;
