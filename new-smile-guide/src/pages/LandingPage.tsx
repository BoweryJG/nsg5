import React from 'react';
// Add export statement to make this a proper module
export {}; 
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined'; // Alternative for courses
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'; // Alternative for specialists
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'; // Alternative for resources


// Import images if needed
// import heroBackground from '../path/to/image.jpg';

const LandingPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/path/to/hero-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 10, md: 15 },
          mb: 8,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              The New Smile Guide: Understanding Dental Implants
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ mb: 4, fontWeight: 300, lineHeight: 1.5 }}
            >
              Comprehensive information for patients considering dental implants, 
              with expert guidance and resources to help you make informed decisions.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                size="large" 
                color="primary"
                sx={{ fontWeight: 600, py: 1.5, px: 4 }}
                startIcon={<SchoolOutlinedIcon />}
              >
                Explore Courses
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  fontWeight: 600, 
                  py: 1.5, 
                  px: 4, 
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
                startIcon={<PersonSearchOutlinedIcon />}
              >
                Find a Specialist
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box 
          sx={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            mx: 'auto',
            mb: 8 
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Your Guide to Dental Implants
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
            Dental implants are the gold standard for replacing missing teeth, providing a solution that looks,
            feels, and functions like your natural teeth. Our comprehensive resources will help you
            understand all aspects of the implant process.
          </Typography>
        </Box>

        {/* Featured Content Cards */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/course-image.jpg"
              alt="Educational Courses"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <CastForEducationOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Educational Courses
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Learn from expert surgeons with our beginner-friendly courses designed specifically for patients.
                Complete a course and receive a $500 certificate toward your dental implant procedure.
              </Typography>
              <Button variant="outlined" fullWidth startIcon={<ArrowForwardOutlinedIcon />}>
                Browse Courses
              </Button>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/specialists-image.jpg"
              alt="Find Specialists"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <MapOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Find Specialists
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Connect with qualified implant specialists in your area who can provide
                personalized consultations and treatment options tailored to your needs.
              </Typography>
              <Button variant="outlined" fullWidth startIcon={<ArrowForwardOutlinedIcon />}>
                Locate Specialists
              </Button>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/resources-image.jpg"
              alt="Patient Resources"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <ArticleOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Patient Resources
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Access comprehensive guides, articles, videos, and FAQs to help you understand
                dental implants, procedures, costs, care, and what to expect.
              </Typography>
              <Button variant="outlined" fullWidth startIcon={<ArrowForwardOutlinedIcon />}>
                View Resources
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Start Your Journey?
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 300 }}>
            Sign up for our free introductory course and receive a $500 certificate
            upon completion.
          </Typography>
          
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            sx={{ 
              fontWeight: 600, 
              py: 1.5, 
              px: 5,
              fontSize: '1.1rem'
            }}
            startIcon={<AppRegistrationOutlinedIcon />}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
