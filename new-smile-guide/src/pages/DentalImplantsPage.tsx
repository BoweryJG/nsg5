import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Fade,
  Slide,
  Zoom,
  useTheme,
  alpha,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TimerIcon from '@mui/icons-material/Timer';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { keyframes } from '@mui/system';

// Animations
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

// TabPanel Component
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const DentalImplantsPage: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const procedureSteps = [
    {
      label: 'Initial Consultation & Planning',
      description: 'Comprehensive examination, X-rays, and personalized treatment planning',
      icon: <HelpOutlineOutlinedIcon />,
      duration: '1-2 hours',
      details: 'Your dentist will conduct a thorough examination, take X-rays, and create a treatment plan tailored to your specific needs. This may include CT scans to evaluate bone quality and quantity.'
    },
    {
      label: 'Bone Grafting (if necessary)',
      description: 'Building a solid foundation for your implant',
      icon: <ScienceIcon />,
      duration: '1-2 hours',
      details: 'If your jawbone is too thin or soft to support an implant, bone grafting may be required to create a solid foundation. This may add several months to the process as the graft needs time to heal.'
    },
    {
      label: 'Implant Placement',
      description: 'Surgical placement of the titanium implant',
      icon: <MedicalServicesOutlinedIcon />,
      duration: '1-2 hours',
      details: 'The oral surgeon places the dental implant into the jawbone during a minor surgical procedure. Local anesthesia is typically used, though sedation options are available for anxious patients.'
    },
    {
      label: 'Osseointegration Period',
      description: 'Healing and fusion with your jawbone',
      icon: <TimerIcon />,
      duration: '3-6 months',
      details: 'After the implant is placed, it needs time to fuse with the jawbone through a process called osseointegration. This typically takes 3-6 months and is crucial for creating a stable base for your replacement tooth.'
    },
    {
      label: 'Abutment Placement',
      description: 'Connecting the implant to your new tooth',
      icon: <AdjustOutlinedIcon />,
      duration: '30 minutes',
      details: 'Once osseointegration is complete, the abutment (connector) is attached to the implant. This requires a minor surgical procedure to reopen the gum and expose the implant.'
    },
    {
      label: 'Crown Placement',
      description: 'Final restoration and completion',
      icon: <AutoAwesomeIcon />,
      duration: '1 hour',
      details: 'After your gums heal (usually within 2 weeks of abutment placement), impressions of your mouth are taken to create a custom crown. Once the crown is ready, it is attached to the abutment, completing the implant process.'
    }
  ];

  const implantTypes = [
    {
      name: 'Endosteal Implants',
      description: 'The most common type, placed directly into the jawbone',
      icon: <LocalHospitalIcon />,
      suitability: 'Most patients with adequate bone density',
      material: 'Titanium screws',
      successRate: '98%'
    },
    {
      name: 'Subperiosteal Implants',
      description: 'Placed under the gum but on or above the jawbone',
      icon: <HealthAndSafetyIcon />,
      suitability: 'Patients with insufficient jawbone',
      material: 'Metal framework',
      successRate: '95%'
    },
    {
      name: 'Zygomatic Implants',
      description: 'Placed in the cheekbone for complex cases',
      icon: <ScienceIcon />,
      suitability: 'Severe upper jaw bone loss',
      material: 'Extended titanium implants',
      successRate: '96%'
    }
  ];

  const benefits = [
    {
      title: 'Natural Look & Feel',
      description: 'Custom-designed to match your natural teeth perfectly',
      icon: <AutoAwesomeIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Improved Speech',
      description: 'No slipping or sliding like with dentures',
      icon: <VerifiedIcon />,
      color: theme.palette.success.main
    },
    {
      title: 'Enhanced Comfort',
      description: 'Becomes part of you - no adhesives needed',
      icon: <HealthAndSafetyIcon />,
      color: theme.palette.info.main
    },
    {
      title: 'Better Oral Health',
      description: 'Preserves adjacent teeth and jawbone',
      icon: <LocalHospitalIcon />,
      color: theme.palette.warning.main
    },
    {
      title: 'Lifetime Durability',
      description: 'Can last a lifetime with proper care',
      icon: <SecurityIcon />,
      color: theme.palette.error.main
    },
    {
      title: 'Prevents Bone Loss',
      description: 'Stimulates bone growth and maintains facial structure',
      icon: <TrendingUpIcon />,
      color: theme.palette.secondary.main
    }
  ];

  const faqs = [
    {
      question: 'Are dental implants painful?',
      answer: 'Most patients report that the discomfort during and after the procedure is less than they expected. Local anesthesia is used during the surgery, so you should not feel pain during the procedure. Post-surgery, some discomfort, swelling, and minor bleeding are normal, but these can typically be managed with over-the-counter or prescribed pain medications.'
    },
    {
      question: 'How long do dental implants last?',
      answer: 'With proper care and maintenance, dental implants can last a lifetime. The crown attached to the implant may need replacement after 10-15 years due to normal wear and tear, but the implant itself can remain in place indefinitely if kept healthy.'
    },
    {
      question: 'Am I a good candidate for dental implants?',
      answer: 'Most people with good general and oral health are candidates for implants. You need adequate bone in your jaw to support the implant, and healthy gums free of periodontal disease. Some medical conditions and habits like smoking can affect the success of implants. A thorough evaluation by a dental professional is necessary to determine if implants are right for you.'
    },
    {
      question: 'How long does the entire implant process take?',
      answer: 'The entire process typically takes 3-9 months from the initial consultation to the final placement of the crown. This timeline can vary based on individual healing times, whether bone grafting is needed, and other factors specific to your case.'
    },
    {
      question: 'What is the success rate of dental implants?',
      answer: 'Dental implants have a success rate of approximately 95-98%. Success rates can vary based on where in the jaw the implants are placed, the patient\'s overall health, and adherence to aftercare instructions.'
    },
    {
      question: 'Can I get an implant years after tooth extraction?',
      answer: 'Yes, you can get a dental implant even years after tooth extraction. However, bone loss occurs naturally in areas where teeth are missing, which may necessitate a bone graft before an implant can be placed. Your dentist will evaluate your specific situation to determine the best approach.'
    }
  ];

  const costFactors = [
    {
      factor: 'Single Implant',
      range: '$3,000 - $5,000',
      description: 'Complete single tooth replacement including implant, abutment, and crown'
    },
    {
      factor: 'Multiple Implants',
      range: '$6,000 - $30,000',
      description: 'Cost varies based on number of implants and complexity'
    },
    {
      factor: 'Full Mouth Restoration',
      range: '$20,000 - $50,000',
      description: 'Complete smile makeover with implant-supported dentures'
    },
    {
      factor: 'Bone Grafting',
      range: '$300 - $3,000',
      description: 'Additional cost if bone grafting is required'
    }
  ];

  const aftercareSteps = [
    {
      title: 'Immediate Post-Surgery (First 24-48 hours)',
      items: [
        'Apply ice packs to reduce swelling',
        'Take prescribed medications as directed',
        'Eat soft foods and avoid hot liquids',
        'Do not rinse vigorously or use straws',
        'Rest and avoid strenuous activities'
      ]
    },
    {
      title: 'First Week',
      items: [
        'Gently rinse with warm salt water',
        'Continue soft food diet',
        'Brush carefully around the implant site',
        'Attend follow-up appointment',
        'Watch for signs of infection'
      ]
    },
    {
      title: 'Long-term Care',
      items: [
        'Brush twice daily with soft-bristled toothbrush',
        'Floss daily using implant-specific floss',
        'Use antimicrobial mouthwash',
        'Regular dental checkups every 6 months',
        'Avoid smoking and excessive alcohol'
      ]
    }
  ];

  return (
    <Box>
      {/* Enhanced Hero Banner */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: 12,
          mb: 6,
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
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 3,
                    animation: `${float} 4s ease-in-out infinite`,
                  }}
                >
                  <MedicalServicesOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Box>
                  <Typography variant="h2" component="h1" fontWeight={700} sx={{ mb: 1 }}>
                    Understanding Dental Implants
                  </Typography>
                  <Typography variant="h5" sx={{ opacity: 0.95 }}>
                    Your complete guide to modern tooth replacement
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="h6" sx={{ mb: 4, maxWidth: 800, opacity: 0.9, lineHeight: 1.6 }}>
                Discover everything you need to know about dental implants - from the science behind them 
                to the step-by-step process, costs, and long-term care. Make informed decisions about your dental health.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Chip 
                  icon={<VerifiedIcon />} 
                  label="98% Success Rate" 
                  sx={{ 
                    bgcolor: alpha(theme.palette.success.main, 0.9), 
                    color: 'white',
                    fontSize: '1rem',
                    py: 2,
                    px: 1
                  }} 
                />
                <Chip 
                  icon={<TimerIcon />} 
                  label="Lifetime Solution" 
                  sx={{ bgcolor: alpha(theme.palette.common.white, 0.2), color: 'white' }} 
                />
                <Chip 
                  icon={<EmojiEventsIcon />} 
                  label="Gold Standard Treatment" 
                  sx={{ bgcolor: alpha(theme.palette.common.white, 0.2), color: 'white' }} 
                />
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={RouterLink}
                  to="/courses"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 35px ${alpha(theme.palette.secondary.main, 0.4)}`,
                    }
                  }}
                  startIcon={<SchoolOutlinedIcon />}
                >
                  Take Our Free Course - Earn $500
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: alpha(theme.palette.common.white, 0.1),
                    }
                  }}
                  startIcon={<PlayCircleOutlineIcon />}
                >
                  Watch Overview Video
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Enhanced Navigation Tabs */}
        <Slide direction="up" in timeout={800}>
          <Paper 
            elevation={0}
            sx={{ 
              mb: 6,
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  minHeight: 80,
                  fontSize: '1rem',
                  fontWeight: 600,
                  py: 2,
                  '&.Mui-selected': {
                    color: 'primary.main',
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                  }
                }
              }}
            >
              <Tab icon={<HelpOutlineOutlinedIcon />} iconPosition="start" label="What Are Dental Implants?" />
              <Tab icon={<MedicalServicesOutlinedIcon />} iconPosition="start" label="The Procedure" />
              <Tab icon={<CheckCircleOutlineOutlinedIcon />} iconPosition="start" label="Benefits" />
              <Tab icon={<AttachMoneyOutlinedIcon />} iconPosition="start" label="Costs & Financing" />
              <Tab icon={<HealingOutlinedIcon />} iconPosition="start" label="Aftercare" />
              <Tab icon={<QuestionAnswerOutlinedIcon />} iconPosition="start" label="FAQs" />
            </Tabs>
          </Paper>
        </Slide>

        {/* Tab Content */}
        <TabPanel value={tabValue} index={0}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700} color="primary.main">
                What Are Dental Implants?
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                Dental implants are titanium posts that are surgically placed into the jawbone beneath your gums 
                to serve as a replacement for the root of a missing tooth. They represent the gold standard in tooth replacement technology.
              </Typography>

              {/* Implant Components */}
              <Grid container spacing={4} sx={{ mb: 6 }}>
                <Grid item xs={12} md={4}>
                  <Zoom in timeout={600}>
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
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            animation: `${pulse} 3s infinite`,
                          }}
                        >
                          <AdjustOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                        </Box>
                        <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
                          The Implant
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          A titanium screw that is placed in the jawbone and acts as a tooth root. 
                          Biocompatible and designed to fuse with your bone.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Zoom in timeout={800}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 12px 30px ${alpha(theme.palette.secondary.main, 0.15)}`,
                        }
                      }}
                    >
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            animation: `${pulse} 3s infinite 1s`,
                          }}
                        >
                          <AdjustOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                        </Box>
                        <Typography variant="h5" fontWeight={600} gutterBottom color="secondary.main">
                          The Abutment
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          A connector that supports and holds the tooth or set of teeth. 
                          Links the implant to the crown securely.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Zoom in timeout={1000}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 12px 30px ${alpha(theme.palette.success.main, 0.15)}`,
                        }
                      }}
                    >
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.light})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            animation: `${pulse} 3s infinite 2s`,
                          }}
                        >
                          <AutoAwesomeIcon sx={{ fontSize: 40, color: 'white' }} />
                        </Box>
                        <Typography variant="h5" fontWeight={600} gutterBottom color="success.main">
                          The Crown
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          The visible part of the tooth that is custom-made to match your natural teeth. 
                          Crafted for perfect fit and appearance.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              </Grid>

              {/* Types of Implants */}
              <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main" sx={{ mb: 4 }}>
                Types of Dental Implants
              </Typography>
              
              <Grid container spacing={4}>
                {implantTypes.map((type, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Slide direction="up" in timeout={600 + index * 200}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          borderRadius: 4,
                          border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            transform: 'translateY(-4px)',
                            boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.15)}`,
                          }
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box
                              sx={{
                                width: 50,
                                height: 50,
                                borderRadius: 2,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                              }}
                            >
                              {React.cloneElement(type.icon, { sx: { color: 'white', fontSize: 24 } })}
                            </Box>
                            <Typography variant="h6" fontWeight={600}>
                              {type.name}
                            </Typography>
                          </Box>
                          
                          <Typography variant="body1" paragraph color="text.secondary">
                            {type.description}
                          </Typography>
                          
                          <Box sx={{ mt: 3 }}>
                            <Chip 
                              label={`${type.successRate} Success Rate`} 
                              color="success" 
                              size="small" 
                              sx={{ mb: 1, mr: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                              <strong>Best for:</strong> {type.suitability}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <strong>Material:</strong> {type.material}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700} color="primary.main">
                The Dental Implant Procedure
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 6, lineHeight: 1.7 }}>
                The dental implant procedure is a carefully planned process that typically takes 3-9 months. 
                Here is your step-by-step journey to a new smile.
              </Typography>

              {/* Interactive Stepper */}
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}
              >
                <Stepper activeStep={activeStep} orientation="vertical">
                  {procedureSteps.map((step, index) => (
                    <Step key={index}>
                      <StepLabel
                        StepIconComponent={() => (
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              background: index <= activeStep 
                                ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                                : alpha(theme.palette.grey[400], 0.3),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.1)',
                              }
                            }}
                            onClick={() => setActiveStep(index)}
                          >
                            {React.cloneElement(step.icon, { 
                              sx: { 
                                color: index <= activeStep ? 'white' : theme.palette.grey[500],
                                fontSize: 24 
                              } 
                            })}
                          </Box>
                        )}
                      >
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h6" fontWeight={600}>
                            {step.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {step.description}
                          </Typography>
                          <Chip 
                            label={step.duration} 
                            size="small" 
                            color="primary" 
                            variant="outlined"
                            sx={{ mt: 1 }}
                          />
                        </Box>
                      </StepLabel>
                      <StepContent>
                        <Box sx={{ ml: 2, pb: 2 }}>
                          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            {step.details}
                          </Typography>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Paper>
            </Box>
          </Fade>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700} color="primary.main">
                Benefits of Dental Implants
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 6, lineHeight: 1.7 }}>
                Dental implants offer numerous advantages over traditional tooth replacement options like dentures or bridges.
              </Typography>

              <Grid container spacing={4}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Zoom in timeout={600 + index * 100}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          borderRadius: 4,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: `0 12px 30px ${alpha(benefit.color, 0.15)}`,
                          }
                        }}
                      >
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                          <Box
                            sx={{
                              width: 70,
                              height: 70,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${benefit.color}, ${alpha(benefit.color, 0.7)})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 3,
                            }}
                          >
                            {React.cloneElement(benefit.icon, { sx: { fontSize: 32, color: 'white' } })}
                          </Box>
                          <Typography variant="h6" fontWeight={600} gutterBottom>
                            {benefit.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {benefit.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700} color="primary.main">
                Costs & Financing
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 6, lineHeight: 1.7 }}>
                Understanding the investment in your dental health and available financing options.
              </Typography>

              <Grid container spacing={4}>
                {costFactors.map((cost, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Slide direction="up" in timeout={600 + index * 200}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          borderRadius: 4,
                          border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            transform: 'translateY(-4px)',
                          }
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
                            {cost.factor}
                          </Typography>
                          <Typography variant="h4" fontWeight={700} color="secondary.main" sx={{ mb: 2 }}>
                            {cost.range}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {cost.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Slide>
                  </Grid>
                ))}
              </Grid>

              <Paper 
                elevation={0}
                sx={{ 
                  mt: 6,
                  p: 4, 
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
                  Financing Options Available
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Insurance Coverage" 
                      secondary="Many dental insurance plans cover a portion of implant costs"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Payment Plans" 
                      secondary="Flexible monthly payment options with 0% interest"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="HSA/FSA Eligible" 
                      secondary="Use pre-tax dollars from health savings accounts"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="CareCredit" 
                      secondary="Healthcare financing with promotional periods"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Box>
          </Fade>
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700} color="primary.main">
                Aftercare & Recovery
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 6, lineHeight: 1.7 }}>
                Proper aftercare is essential for successful implant integration and long-term success.
              </Typography>

              {aftercareSteps.map((phase, index) => (
                <Accordion 
                  key={index}
                  sx={{ 
                    mb: 2,
                    borderRadius: 2,
                    '&:before': { display: 'none' },
                    boxShadow: `0 2px 10px ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ 
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} color="primary.main">
                      {phase.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 3 }}>
                    <List>
                      {phase.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} sx={{ py: 0.5 }}>
                          <ListItemIcon>
                            <CheckCircleOutlineOutlinedIcon color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Fade>
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700} color="primary.main">
                Frequently Asked Questions
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 6, lineHeight: 1.7 }}>
                Get answers to the most common questions about dental implants.
              </Typography>

              {faqs.map((faq, index) => (
                <Accordion 
                  key={index}
                  sx={{ 
                    mb: 2,
                    borderRadius: 2,
                    '&:before': { display: 'none' },
                    boxShadow: `0 2px 10px ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ 
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} color="primary.main">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 3 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Fade>
        </TabPanel>

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            mt: 8,
            p: 6,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Ready to Learn More About Dental Implants?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Take our comprehensive course and earn $500 while becoming an expert on dental implant procedures.
          </Typography>
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
      </Container>
    </Box>
  );
};

export default DentalImplantsPage;
