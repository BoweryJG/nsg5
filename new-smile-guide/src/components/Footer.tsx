import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
  Button,
  TextField,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          {/* Company Info */}
          <Box sx={{ flex: { md: '0 0 33%' } }}>
            <Typography variant="h6" fontWeight="bold" fontFamily="Merriweather, serif" mb={2}>
              New Smile Guide
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Providing comprehensive, authoritative education on dental implants to help patients make informed decisions about their oral health.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="Facebook" sx={{ color: '#fff' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: '#fff' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ color: '#fff' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ color: '#fff' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="YouTube" sx={{ color: '#fff' }}>
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: { md: '0 0 17%' } }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/" color="inherit" underline="hover">
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/about" color="inherit" underline="hover">
                  About Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/courses" color="inherit" underline="hover">
                  Courses
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/specialists" color="inherit" underline="hover">
                  Find Specialists
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/resources" color="inherit" underline="hover">
                  Resources
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Dental Implant Guide */}
          <Box sx={{ flex: { md: '0 0 17%' } }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Implant Guide
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/dental-implants/basics" color="inherit" underline="hover">
                  Implant Basics
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/dental-implants/procedure" color="inherit" underline="hover">
                  The Procedure
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/dental-implants/cost" color="inherit" underline="hover">
                  Cost & Financing
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/dental-implants/aftercare" color="inherit" underline="hover">
                  Aftercare
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/dental-implants/faq" color="inherit" underline="hover">
                  FAQ
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Newsletter Signup */}
          <Box sx={{ flex: { md: '0 0 33%' } }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Join Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Get the latest updates on dental implant technologies, recovery tips, and special offers.
            </Typography>
            <Box component="form" noValidate sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Your email address"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 1,
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                  whiteSpace: 'nowrap',
                }}
                startIcon={<EmailOutlinedIcon />}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Footer */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', sm: 'flex-start' }, gap: 2 }}>
          <Typography variant="body2" color="rgba(255,255,255,0.7)">
            © {currentYear} New Smile Guide. All rights reserved.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Contact Us
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
