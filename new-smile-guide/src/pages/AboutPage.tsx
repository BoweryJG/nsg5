import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Stack,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Fade,
  Slide,
  Zoom,
  useTheme,
  alpha,
  LinearProgress,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(56, 96, 136, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(56, 96, 136, 0.6);
  }
`;

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const statistics = [
    {
      number: '50,000+',
      label: 'Students Educated',
      icon: <SchoolOutlinedIcon />,
      color: theme.palette.primary.main,
      description: 'Patients who have completed our comprehensive dental implant courses'
    },
    {
      number: '98%',
      label: 'Success Rate',
      icon: <VerifiedOutlinedIcon />,
      color: theme.palette.success.main,
      description: 'Patient satisfaction rate with our educational programs'
    },
    {
      number: '500+',
      label: 'Partner Specialists',
      icon: <LocalHospitalOutlinedIcon />,
      color: theme.palette.info.main,
      description: 'Certified dental implant specialists in our network'
    },
    {
      number: '$25M+',
      label: 'Certificates Earned',
      icon: <EmojiEventsOutlinedIcon />,
      color: theme.palette.warning.main,
      description: 'Total value of certificates earned by our students'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      specialty: 'Oral & Maxillofacial Surgery',
      experience: '15+ years',
      education: 'Harvard School of Dental Medicine',
      avatar: '/api/placeholder/150/150',
      achievements: ['Board Certified', 'Published Researcher', 'International Speaker']
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Director of Education',
      specialty: 'Prosthodontics',
      experience: '12+ years',
      education: 'UCLA School of Dentistry',
      avatar: '/api/placeholder/150/150',
      achievements: ['Fellowship Trained', 'Curriculum Developer', 'Award Winner']
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Clinical Research Director',
      specialty: 'Periodontics',
      experience: '10+ years',
      education: 'University of Pennsylvania',
      avatar: '/api/placeholder/150/150',
      achievements: ['Research Pioneer', 'Published Author', 'Clinical Innovator']
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'New Smile Guide was founded with a mission to democratize dental implant education',
      icon: <FlagOutlinedIcon />
    },
    {
      year: '2021',
      title: 'First Course Launch',
      description: 'Launched our comprehensive dental implant education program with $500 certificates',
      icon: <SchoolOutlinedIcon />
    },
    {
      year: '2022',
      title: 'Specialist Network',
      description: 'Built partnerships with over 200 certified dental implant specialists nationwide',
      icon: <GroupsOutlinedIcon />
    },
    {
      year: '2023',
      title: 'Technology Innovation',
      description: 'Introduced interactive learning tools and virtual consultation platforms',
      icon: <AutoAwesomeOutlinedIcon />
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded our educational programs internationally, reaching patients worldwide',
      icon: <TrendingUpOutlinedIcon />
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'Launched AI-powered personalized learning paths and treatment recommendations',
      icon: <SecurityOutlinedIcon />
    }
  ];

  const values = [
    {
      title: 'Patient-Centered Excellence',
      description: 'Everything we do is designed with the patient in mind, focusing on clarity, accessibility, and real-world utility that transforms lives.',
      icon: <PeopleOutlineOutlinedIcon />,
      color: theme.palette.primary.main,
      features: ['Personalized Learning', 'Clear Communication', 'Accessible Resources', 'Patient Advocacy']
    },
    {
      title: 'Evidence-Based Innovation',
      description: 'Our educational content is rooted in the latest research and clinical best practices in implant dentistry and medical education.',
      icon: <ScienceOutlinedIcon />,
      color: theme.palette.secondary.main,
      features: ['Clinical Research', 'Peer Review', 'Continuous Updates', 'Expert Validation']
    },
    {
      title: 'Transparency & Trust',
      description: 'We believe in clear, honest information about procedures, recovery, costs, and expectations with complete transparency.',
      icon: <VisibilityOutlinedIcon />,
      color: theme.palette.success.main,
      features: ['Open Communication', 'Honest Pricing', 'Clear Expectations', 'Ethical Standards']
    },
    {
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professional education and specialist certification in dental implant care.',
      icon: <WorkspacePremiumOutlinedIcon />,
      color: theme.palette.info.main,
      features: ['Board Certification', 'Continuing Education', 'Quality Assurance', 'Best Practices']
    }
  ];

  return (
    <Box>
      {/* Enhanced Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: 12,
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
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            animation: `${float} 6s ease-in-out infinite`,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: `${float} 4s ease-in-out infinite`,
                  }}
                >
                  <MedicalServicesOutlinedIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
              </Box>
              
              <Typography variant="h1" component="h1" fontWeight={700} sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                About New Smile Guide
              </Typography>
              
              <Typography variant="h4" sx={{ mb: 4, opacity: 0.95, maxWidth: 800, mx: 'auto', lineHeight: 1.4 }}>
                Empowering patients with knowledge about dental implants through expert-led education and innovative learning experiences
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
                <Chip 
                  icon={<StarOutlinedIcon />} 
                  label="Industry Leading" 
                  sx={{ 
                    bgcolor: alpha(theme.palette.warning.main, 0.9), 
                    color: 'white',
                    fontSize: '1rem',
                    py: 2,
                    px: 1
                  }} 
                />
                <Chip 
                  icon={<VerifiedOutlinedIcon />} 
                  label="Expert Approved" 
                  sx={{ bgcolor: alpha(theme.palette.common.white, 0.2), color: 'white' }} 
                />
                <Chip 
                  icon={<HealthAndSafetyOutlinedIcon />} 
                  label="Patient Focused" 
                  sx={{ bgcolor: alpha(theme.palette.common.white, 0.2), color: 'white' }} 
                />
              </Box>
              
              <Button
                component={RouterLink}
                to="/courses"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  borderRadius: 50,
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 35px ${alpha(theme.palette.secondary.main, 0.4)}`,
                  }
                }}
                startIcon={<SchoolOutlinedIcon />}
              >
                Start Learning & Earn $500
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Statistics Section */}
        <Slide direction="up" in timeout={800}>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom fontWeight={700} textAlign="center" color="primary.main" sx={{ mb: 6 }}>
              Our Impact in Numbers
            </Typography>
            
            <Grid container spacing={4}>
              {statistics.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Zoom in timeout={600 + index * 200}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: `2px solid ${alpha(stat.color, 0.1)}`,
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          borderColor: stat.color,
                          boxShadow: `0 12px 30px ${alpha(stat.color, 0.2)}`,
                        }
                      }}
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${stat.color}, ${alpha(stat.color, 0.7)})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            animation: hoveredStat === index ? `${pulse} 1s infinite` : 'none',
                          }}
                        >
                          {React.cloneElement(stat.icon, { sx: { fontSize: 40, color: 'white' } })}
                        </Box>
                        
                        <Typography variant="h3" fontWeight={700} sx={{ color: stat.color, mb: 1 }}>
                          {stat.number}
                        </Typography>
                        
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {stat.label}
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {stat.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Slide>

        {/* Mission Section */}
        <Fade in timeout={1000}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 6, 
              mb: 8,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center' }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 3,
                  animation: `${float} 3s ease-in-out infinite`,
                }}
              >
                <FlagOutlinedIcon sx={{ fontSize: 35, color: 'white' }} />
              </Box>
              <Typography variant="h3" component="h2" fontWeight={700} color="primary.main">
                Our Mission
              </Typography>
            </Box>
            
            <Typography variant="h5" paragraph sx={{ textAlign: 'center', mb: 4, lineHeight: 1.6, color: 'text.secondary' }}>
              At New Smile Guide, our mission is to provide comprehensive, accessible, and patient-friendly education on dental implants. 
              We believe that informed patients make better decisions about their oral health and experience better outcomes.
            </Typography>
            
            <Typography variant="h6" sx={{ textAlign: 'center', lineHeight: 1.7, color: 'text.secondary' }}>
              By connecting patients with authoritative information and qualified specialists, we aim to transform the dental implant 
              experience from one of uncertainty to one of confidence and clarity. Our innovative approach combines cutting-edge 
              technology with expert knowledge to create the most comprehensive dental implant education platform available.
            </Typography>
          </Paper>
        </Fade>

        {/* Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight={700} textAlign="center" color="primary.main" sx={{ mb: 6 }}>
            Our Core Values
          </Typography>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Slide direction={index % 2 === 0 ? 'right' : 'left'} in timeout={600 + index * 200}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      border: `2px solid ${alpha(value.color, 0.1)}`,
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: value.color,
                        boxShadow: `0 10px 25px ${alpha(value.color, 0.15)}`,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, ${value.color}, ${alpha(value.color, 0.7)})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                          }}
                        >
                          {React.cloneElement(value.icon, { sx: { color: 'white', fontSize: 30 } })}
                        </Box>
                        <Typography variant="h5" fontWeight={600} sx={{ color: value.color }}>
                          {value.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {value.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {value.features.map((feature, featureIndex) => (
                          <Chip 
                            key={featureIndex}
                            label={feature} 
                            size="small" 
                            sx={{ 
                              bgcolor: alpha(value.color, 0.1),
                              color: value.color,
                              fontWeight: 500
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight={700} textAlign="center" color="primary.main" sx={{ mb: 2 }}>
            Meet Our Expert Team
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            Our team of board-certified specialists and education experts are dedicated to providing you with the highest quality dental implant education.
          </Typography>
          
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in timeout={800 + index * 200}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 30px ${alpha(theme.palette.primary.main, 0.15)}`,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 3,
                          bgcolor: theme.palette.primary.main,
                          fontSize: '3rem',
                          fontWeight: 600
                        }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      
                      <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
                        {member.name}
                      </Typography>
                      
                      <Typography variant="h6" color="secondary.main" gutterBottom>
                        {member.role}
                      </Typography>
                      
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        {member.specialty}
                      </Typography>
                      
                      <Box sx={{ my: 2 }}>
                        <Chip label={member.experience} color="primary" size="small" sx={{ mr: 1 }} />
                        <Chip label={member.education} variant="outlined" size="small" />
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                        {member.achievements.map((achievement, achIndex) => (
                          <Chip 
                            key={achIndex}
                            label={achievement} 
                            size="small" 
                            sx={{ 
                              bgcolor: alpha(theme.palette.success.main, 0.1),
                              color: theme.palette.success.main,
                              fontSize: '0.75rem'
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Custom Timeline Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight={700} textAlign="center" color="primary.main" sx={{ mb: 6 }}>
            Our Journey
          </Typography>
          
          <Paper 
            elevation={0}
            sx={{ 
              p: 4,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <Grid container spacing={4}>
              {timeline.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Slide direction={index % 2 === 0 ? 'right' : 'left'} in timeout={600 + index * 200}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        borderRadius: 3,
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: theme.palette.primary.main,
                          boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.15)}`,
                        }
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 3,
                            }}
                          >
                            {React.cloneElement(item.icon, { sx: { color: 'white', fontSize: 24 } })}
                          </Box>
                          <Typography variant="h4" component="h3" fontWeight={700} color="primary.main">
                            {item.year}
                          </Typography>
                        </Box>
                        
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {item.title}
                        </Typography>
                        
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            p: 6,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Ready to Start Your Dental Implant Journey?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of patients who have transformed their smiles with our expert-led education programs.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={RouterLink}
              to="/courses"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                borderRadius: 50,
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 35px ${alpha(theme.palette.secondary.main, 0.4)}`,
                }
              }}
              startIcon={<SchoolOutlinedIcon />}
            >
              Start Learning & Earn $500
            </Button>
            
            <Button
              component={RouterLink}
              to="/specialists"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 50,
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: alpha(theme.palette.common.white, 0.1),
                }
              }}
              startIcon={<LocalHospitalOutlinedIcon />}
            >
              Find a Specialist
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
