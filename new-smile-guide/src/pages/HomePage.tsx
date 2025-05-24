import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';


const HomePage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: '#fff',
          py: { xs: 8, md: 12 },
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Expert Guidance for Your Dental Implant Journey
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}
              >
                Comprehensive, patient-friendly education to help you make informed decisions about dental implants.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={RouterLink}
                  to="/dental-implants"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ py: 1.5, px: 4 }}
                  startIcon={<InfoOutlinedIcon />}
                >
                  Learn About Implants
                </Button>
                <Button
                  component={RouterLink}
                  to="/courses"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{ py: 1.5, px: 4, borderColor: 'rgba(255,255,255,0.5)' }}
                  startIcon={<SchoolOutlinedIcon />}
                >
                  Explore Courses
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                '& img': {
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 8,
                },
              }}
            >
              <img src="/images/Headerimage.png" alt="Dental implant procedure" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Why Choose New Smile Guide
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            We provide comprehensive resources to help you understand dental implants, connect with specialists, and make informed decisions.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3, flexGrow: 1, textAlign: 'center' }}>
                  <feature.icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Call-to-Action Section */}
      <Box sx={{ backgroundColor: 'primary.light', py: 8, mb: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 4,
            }}
          >
            <Box sx={{ flex: { md: 2 } }}>
              <Typography variant="h3" gutterBottom fontWeight={600} color="white">
                Ready to take the next step?
              </Typography>
              <Typography variant="h6" paragraph color="white" sx={{ opacity: 0.9 }}>
                Sign up for our comprehensive course on dental implants and receive a $500 certificate upon completion.
              </Typography>
            </Box>
            <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                component={RouterLink}
                to="/courses"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ py: 1.5, px: 4 }}
                startIcon={<PlayArrowOutlinedIcon />}
              >
                Start Your Course Today
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Patient Success Stories
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Here's what our patients say about their dental implant journey after learning with New Smile Guide.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <FormatQuoteOutlinedIcon sx={{ fontSize: 40, color: 'primary.light', mb: 1 }} />
                <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                  {testimonial.quote}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                  <Box
                    component="img"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Sample data
const features = [
  {
    title: 'Expert-Led Courses',
    description: 'Learn from top dental surgeons with comprehensive courses designed specifically for patients.',
    image: '/path/to/feature1.jpg',
    icon: CastForEducationOutlinedIcon,
  },
  {
    title: 'Find Specialists Near You',
    description: 'Connect with verified implant specialists in your area who can provide personalized care.',
    image: '/path/to/feature2.jpg',
    icon: PersonSearchOutlinedIcon,
  },
  {
    title: 'Earn Certificates',
    description: 'Complete courses to receive certificates worth $500 towards your dental implant procedure.',
    image: '/path/to/feature3.jpg',
    icon: WorkspacePremiumOutlinedIcon,
  },
];

const testimonials = [
  {
    quote: 'The courses at New Smile Guide helped me understand exactly what to expect from my implant procedure. I felt confident and prepared every step of the way.',
    name: 'Sarah Johnson',
    location: 'New York, NY',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    quote: 'After completing the course, I found a specialist through New Smile Guide who was perfect for my needs. The $500 certificate was a wonderful bonus!',
    name: 'Michael Rodriguez',
    location: 'Miami, FL',
    avatar: '/path/to/avatar2.jpg',
  },
  {
    quote: 'I was anxious about getting dental implants until I went through the educational materials. Now I can smile with confidence again!',
    name: 'Emily Chen',
    location: 'Seattle, WA',
    avatar: '/path/to/avatar3.jpg',
  },
];

export default HomePage;
