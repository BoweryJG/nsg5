import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Grid, 
  Card, 
  CardContent, 
  Chip,
  Avatar,
  Rating,
  Divider,
  Paper,
  useTheme,
  alpha
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Enhanced Hero Section with Gradient Background */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: '#fff',
          py: { xs: 10, md: 15 },
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Box sx={{ flex: 1 }}>
              {/* Trust Badge */}
              <Chip
                icon={<VerifiedIcon />}
                label="Trusted by 10,000+ Patients"
                sx={{
                  mb: 3,
                  backgroundColor: alpha('#fff', 0.2),
                  color: '#fff',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: '#fff' },
                }}
              />
              
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.8rem', md: '4rem' },
                  lineHeight: 1.1,
                  mb: 3,
                  background: 'linear-gradient(45deg, #fff 30%, #f0f8ff 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Transform Your Smile with Expert Guidance
              </Typography>
              
              <Typography
                variant="h5"
                sx={{ 
                  mb: 4, 
                  fontWeight: 400, 
                  opacity: 0.95,
                  lineHeight: 1.6,
                  maxWidth: '90%'
                }}
              >
                Join thousands who've made informed decisions about dental implants through our comprehensive, patient-first education platform.
              </Typography>

              {/* Key Benefits */}
              <Stack direction="row" spacing={3} sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body1" fontWeight={500}>Expert-Led Courses</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body1" fontWeight={500}>$500 Certificates</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body1" fontWeight={500}>Verified Specialists</Typography>
                </Box>
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Button
                  component={RouterLink}
                  to="/courses"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ 
                    py: 2, 
                    px: 5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 50,
                    boxShadow: '0 8px 25px rgba(242, 156, 116, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(242, 156, 116, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  startIcon={<PlayArrowOutlinedIcon />}
                >
                  Start Free Course
                </Button>
                <Button
                  component={RouterLink}
                  to="/dental-implants"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{ 
                    py: 2, 
                    px: 5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 50,
                    borderColor: 'rgba(255,255,255,0.6)',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#fff',
                      backgroundColor: alpha('#fff', 0.1),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  startIcon={<InfoOutlinedIcon />}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
            
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: `linear-gradient(45deg, ${alpha(theme.palette.secondary.main, 0.3)}, ${alpha(theme.palette.primary.light, 0.3)})`,
                    borderRadius: 4,
                    zIndex: -1,
                  },
                }}
              >
                <img 
                  src="/images/Headerimage.png" 
                  alt="Dental implant procedure" 
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 16,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <stat.icon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h3" fontWeight={800} color="primary.main" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Enhanced Features Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why 10,000+ Patients Choose Us
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Comprehensive resources, expert guidance, and proven results for your dental implant journey.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {enhancedFeatures.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <feature.icon sx={{ fontSize: 40, color: 'primary.main' }} />
                  </Box>
                  
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    {feature.title}
                  </Typography>
                  
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>

                  {feature.badge && (
                    <Chip
                      label={feature.badge}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                        color: 'secondary.main',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    />
                  )}

                  <Button
                    component={RouterLink}
                    to={feature.link}
                    variant="text"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Enhanced CTA Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          py: 10,
          mb: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom fontWeight={700} color="white">
                Ready to Start Your Journey?
              </Typography>
              <Typography variant="h6" paragraph color="white" sx={{ opacity: 0.95, mb: 4 }}>
                Join our comprehensive course and receive a $500 certificate upon completion. 
                Start learning from top dental professionals today.
              </Typography>
              
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: 'white', opacity: 0.8 }} />
                  <Typography color="white" fontWeight={500}>Self-paced learning</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MonetizationOnIcon sx={{ color: 'white', opacity: 0.8 }} />
                  <Typography color="white" fontWeight={500}>$500 certificate value</Typography>
                </Box>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Button
                component={RouterLink}
                to="/courses"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ 
                  py: 2.5, 
                  px: 6,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  borderRadius: 50,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
                startIcon={<PlayArrowOutlinedIcon />}
              >
                Start Free Course
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Testimonials Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Success Stories
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Real patients sharing their transformative experiences with New Smile Guide.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {enhancedTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Rating value={5} readOnly size="small" sx={{ mr: 2 }} />
                    <Typography variant="body2" color="text.secondary" fontWeight={600}>
                      Verified Patient
                    </Typography>
                  </Box>
                  
                  <FormatQuoteOutlinedIcon sx={{ fontSize: 30, color: 'primary.light', mb: 2 }} />
                  
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: 3 }}>
                    "{testimonial.quote}"
                  </Typography>
                  
                  <Divider sx={{ mb: 3 }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                      <Typography variant="caption" color="primary.main" fontWeight={600}>
                        {testimonial.procedure}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Enhanced data with more comprehensive information
const stats = [
  {
    value: '10K+',
    label: 'Patients Educated',
    icon: GroupsIcon,
  },
  {
    value: '98%',
    label: 'Success Rate',
    icon: TrendingUpIcon,
  },
  {
    value: '500+',
    label: 'Verified Specialists',
    icon: LocalHospitalIcon,
  },
  {
    value: '$2M+',
    label: 'Certificates Issued',
    icon: WorkspacePremiumOutlinedIcon,
  },
];

const enhancedFeatures = [
  {
    title: 'Expert-Led Education',
    description: 'Learn from board-certified oral surgeons and prosthodontists through comprehensive video courses, interactive modules, and detailed guides.',
    icon: CastForEducationOutlinedIcon,
    badge: 'Most Popular',
    link: '/courses',
    buttonText: 'View Courses',
  },
  {
    title: 'Verified Specialist Network',
    description: 'Connect with pre-screened, highly-rated implant specialists in your area. Read reviews, compare credentials, and book consultations.',
    icon: PersonSearchOutlinedIcon,
    badge: 'Trusted Network',
    link: '/specialists',
    buttonText: 'Find Specialists',
  },
  {
    title: '$500 Value Certificates',
    description: 'Complete our courses to earn certificates worth $500 towards your dental implant procedure. Accepted by our network specialists.',
    icon: WorkspacePremiumOutlinedIcon,
    badge: 'Guaranteed Value',
    link: '/certificates',
    buttonText: 'Learn More',
  },
];

const enhancedTestimonials = [
  {
    quote: 'The comprehensive course gave me confidence to move forward with implants. The $500 certificate made the decision even easier. My new smile is perfect!',
    name: 'Sarah Johnson',
    location: 'New York, NY',
    procedure: 'Single Tooth Implant',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    quote: 'Finding a specialist through New Smile Guide was seamless. The education prepared me perfectly, and the entire process exceeded my expectations.',
    name: 'Michael Rodriguez',
    location: 'Miami, FL',
    procedure: 'Full Mouth Restoration',
    avatar: '/path/to/avatar2.jpg',
  },
  {
    quote: 'I was nervous about implants until I completed the course. The knowledge I gained and the specialist I found made all the difference in my journey.',
    name: 'Emily Chen',
    location: 'Seattle, WA',
    procedure: 'Multiple Implants',
    avatar: '/path/to/avatar3.jpg',
  },
];

export default HomePage;
