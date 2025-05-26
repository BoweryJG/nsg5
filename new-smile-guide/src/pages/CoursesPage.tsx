import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Stack,
  Grid,
  Paper,
  LinearProgress,
  Avatar,
  Fade,
  Slide,
  Zoom,
  IconButton,
  Tooltip,
  Badge,
  useTheme,
  alpha,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GradientIcon from '@mui/icons-material/Gradient';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
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

interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  instructorAvatar: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  modules: number;
  rating: number;
  enrolledStudents: number;
  isFeatured: boolean;
  isNew: boolean;
  completionRate: number;
  category: string;
  tags: string[];
  price: number;
  originalPrice?: number;
}

// Sample course data with dental implant focus
const courses: Course[] = [
  {
    id: '1',
    title: 'Dental Implant Fundamentals: Complete Patient Guide',
    description: 'Master the basics of dental implants, from anatomy to treatment planning. Perfect for patients beginning their implant journey.',
    imageUrl: '/path/to/course1.jpg',
    instructor: 'Dr. Sarah Johnson',
    instructorAvatar: '/path/to/avatar1.jpg',
    level: 'Beginner',
    duration: 4.5,
    modules: 8,
    rating: 4.8,
    enrolledStudents: 2245,
    isFeatured: true,
    isNew: false,
    completionRate: 92,
    category: 'Implant Basics',
    tags: ['implants', 'basics', 'anatomy', 'treatment planning'],
    price: 0,
  },
  {
    id: '2',
    title: 'Understanding Implant Surgery: What to Expect',
    description: 'Detailed walkthrough of the surgical process, recovery, and post-operative care for dental implant procedures.',
    imageUrl: '/path/to/course2.jpg',
    instructor: 'Dr. Michael Chen',
    instructorAvatar: '/path/to/avatar2.jpg',
    level: 'Intermediate',
    duration: 3.5,
    modules: 6,
    rating: 4.7,
    enrolledStudents: 1892,
    isFeatured: false,
    isNew: true,
    completionRate: 88,
    category: 'Surgical Procedures',
    tags: ['surgery', 'recovery', 'post-op care', 'healing'],
    price: 0,
  },
  {
    id: '3',
    title: 'Implant Materials & Technology Deep Dive',
    description: 'Explore cutting-edge implant materials, surface treatments, and the latest technological advances in implantology.',
    imageUrl: '/path/to/course3.jpg',
    instructor: 'Dr. Lisa Rodriguez',
    instructorAvatar: '/path/to/avatar3.jpg',
    level: 'Advanced',
    duration: 5.5,
    modules: 10,
    rating: 4.9,
    enrolledStudents: 1156,
    isFeatured: true,
    isNew: false,
    completionRate: 85,
    category: 'Advanced Technology',
    tags: ['materials', 'technology', 'titanium', 'osseointegration'],
    price: 0,
  },
  {
    id: '4',
    title: 'Implant Maintenance & Long-term Care',
    description: 'Learn essential care techniques to ensure your dental implants last a lifetime with proper maintenance.',
    imageUrl: '/path/to/course4.jpg',
    instructor: 'Dr. James Wilson',
    instructorAvatar: '/path/to/avatar4.jpg',
    level: 'Beginner',
    duration: 2.5,
    modules: 5,
    rating: 4.6,
    enrolledStudents: 1674,
    isFeatured: false,
    isNew: false,
    completionRate: 94,
    category: 'Maintenance',
    tags: ['maintenance', 'care', 'hygiene', 'longevity'],
    price: 0,
  },
  {
    id: '5',
    title: 'Implant Financing & Insurance Navigation',
    description: 'Comprehensive guide to understanding costs, insurance coverage, and financing options for dental implant treatment.',
    imageUrl: '/path/to/course5.jpg',
    instructor: 'Dr. Emily Thompson',
    instructorAvatar: '/path/to/avatar5.jpg',
    level: 'Beginner',
    duration: 2,
    modules: 4,
    rating: 4.5,
    enrolledStudents: 2123,
    isFeatured: false,
    isNew: false,
    completionRate: 96,
    category: 'Financial Planning',
    tags: ['financing', 'insurance', 'costs', 'payment plans'],
    price: 0,
  },
  {
    id: '6',
    title: 'Complex Implant Cases: Bone Grafting & Sinus Lifts',
    description: 'Advanced procedures for challenging cases including bone grafting, sinus lifts, and immediate implant placement.',
    imageUrl: '/path/to/course6.jpg',
    instructor: 'Dr. Robert Kim',
    instructorAvatar: '/path/to/avatar6.jpg',
    level: 'Advanced',
    duration: 6,
    modules: 12,
    rating: 4.8,
    enrolledStudents: 897,
    isFeatured: true,
    isNew: true,
    completionRate: 82,
    category: 'Complex Procedures',
    tags: ['bone grafting', 'sinus lift', 'complex cases', 'immediate placement'],
    price: 0,
  }
];

const CoursesPage: React.FC = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [bookmarkedCourses, setBookmarkedCourses] = useState<string[]>([]);
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    setAnimationDelay(0);
  }, [tabValue, searchTerm]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleBookmark = (courseId: string) => {
    setBookmarkedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  // Filter courses based on search term and selected tab
  const filteredCourses = courses.filter((course: Course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTab = tabValue === 0 || 
                      (tabValue === 1 && course.isFeatured) ||
                      (tabValue === 2 && course.level === 'Beginner') ||
                      (tabValue === 3 && course.level === 'Intermediate') ||
                      (tabValue === 4 && course.level === 'Advanced') ||
                      (tabValue === 5 && course.isNew);
    
    return matchesSearch && matchesTab;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return theme.palette.success.main;
      case 'Intermediate': return theme.palette.info.main;
      case 'Advanced': return theme.palette.error.main;
      default: return theme.palette.grey[500];
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Beginner': return <HealthAndSafetyIcon fontSize="small" />;
      case 'Intermediate': return <MedicalServicesIcon fontSize="small" />;
      case 'Advanced': return <ScienceIcon fontSize="small" />;
      default: return <LocalHospitalIcon fontSize="small" />;
    }
  };

  return (
    <Box>
      {/* Enhanced Hero Banner with Dental Implant Focus */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: 10,
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <MedicalServicesIcon sx={{ fontSize: 60, mr: 2, animation: `${pulse} 2s infinite` }} />
                <Typography variant="h2" component="h1" fontWeight={700}>
                  Dental Implant Education Center
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ mb: 4, maxWidth: 800, opacity: 0.95 }}>
                Master the science of dental implants through expert-led courses. From basic anatomy to advanced procedures, 
                become an informed patient and earn valuable certificates toward your treatment.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<EmojiEventsIcon />} 
                  label="$500 Certificate Reward" 
                  sx={{ 
                    bgcolor: theme.palette.secondary.main, 
                    color: 'white',
                    animation: `${glow} 3s infinite`,
                    fontSize: '1rem',
                    py: 2,
                    px: 1
                  }} 
                />
                <Chip 
                  icon={<VerifiedIcon />} 
                  label="Expert-Led Content" 
                  sx={{ bgcolor: alpha(theme.palette.common.white, 0.2), color: 'white' }} 
                />
                <Chip 
                  icon={<AutoAwesomeIcon />} 
                  label="Interactive Learning" 
                  sx={{ bgcolor: alpha(theme.palette.common.white, 0.2), color: 'white' }} 
                />
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Enhanced Certificate Info with Dental Focus */}
        <Slide direction="up" in timeout={800}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 6, 
              mb: 6, 
              background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
              borderRadius: 4,
              border: `2px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.secondary.main, 0.1)}, transparent)`,
                animation: `${shimmer} 3s infinite`,
              }
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <WorkspacePremiumOutlinedIcon 
                    sx={{ 
                      fontSize: 48, 
                      color: theme.palette.secondary.main, 
                      mr: 2,
                      animation: `${float} 4s ease-in-out infinite`
                    }} 
                  />
                  <Typography variant="h3" fontWeight={700} color="primary.main">
                    Earn Your $500 Dental Implant Certificate
                  </Typography>
                </Box>
                <Typography variant="h6" paragraph sx={{ mb: 3, color: 'text.secondary' }}>
                  Complete any comprehensive dental implant course and receive a valuable certificate that can be applied 
                  toward your actual implant procedure with our network of certified specialists.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Chip 
                    icon={<MedicalServicesIcon />} 
                    label="Valid at 200+ Clinics" 
                    color="primary" 
                    variant="outlined"
                  />
                  <Chip 
                    icon={<VerifiedIcon />} 
                    label="No Expiration Date" 
                    color="success" 
                    variant="outlined"
                  />
                  <Chip 
                    icon={<TrendingUpIcon />} 
                    label="Stackable Rewards" 
                    color="info" 
                    variant="outlined"
                  />
                </Box>
                <Button 
                  component={RouterLink}
                  to="/certificates"
                  variant="contained" 
                  color="secondary"
                  size="large"
                  sx={{ 
                    mt: 2,
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
                  startIcon={<WorkspacePremiumOutlinedIcon />}
                >
                  View Certificate Examples
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: `${float} 6s ease-in-out infinite`,
                      boxShadow: `0 20px 40px ${alpha(theme.palette.secondary.main, 0.3)}`,
                    }}
                  >
                    <Typography variant="h2" color="white" fontWeight={700}>
                      $500
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Slide>

        {/* Enhanced Search and Filters */}
        <Fade in timeout={1200}>
          <Box sx={{ mb: 6 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search dental implant courses, procedures, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ 
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.08)}`,
                  '&:hover': {
                    boxShadow: `0 6px 25px ${alpha(theme.palette.primary.main, 0.12)}`,
                  },
                  '&.Mui-focused': {
                    boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.15)}`,
                  }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
                sx: { py: 1 }
              }}
            />
            
            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 4, 
                overflow: 'hidden',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ 
                  '& .MuiTab-root': {
                    minHeight: 72,
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&.Mui-selected': {
                      color: 'primary.main',
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    }
                  }
                }}
              >
                <Tab icon={<ListAltOutlinedIcon />} iconPosition="start" label="All Courses" />
                <Tab icon={<StarOutlinedIcon />} iconPosition="start" label="Featured" />
                <Tab icon={<HealthAndSafetyIcon />} iconPosition="start" label="Beginner" /> 
                <Tab icon={<MedicalServicesIcon />} iconPosition="start" label="Intermediate" />
                <Tab icon={<ScienceIcon />} iconPosition="start" label="Advanced" />
                <Tab icon={<AutoAwesomeIcon />} iconPosition="start" label="New Courses" />
              </Tabs>
            </Paper>
          </Box>
        </Fade>

        {/* Enhanced Course Statistics */}
        <Slide direction="up" in timeout={1000}>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}
              >
                <SchoolOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight={700} color="primary.main">
                  {filteredCourses.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Available Courses
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.05)} 0%, ${alpha(theme.palette.success.main, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`
                }}
              >
                <PeopleIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                <Typography variant="h4" fontWeight={700} color="success.main">
                  {courses.reduce((sum: number, course: Course) => sum + course.enrolledStudents, 0).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Students Enrolled
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.warning.main, 0.05)} 0%, ${alpha(theme.palette.warning.main, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.warning.main, 0.1)}`
                }}
              >
                <StarOutlinedIcon sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                <Typography variant="h4" fontWeight={700} color="warning.main">
                  4.7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Rating
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight={700} color="secondary.main">
                  $500
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Certificate Value
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Slide>

        {/* Enhanced Course Listings */}
        <Grid container spacing={4}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: Course, index: number) => (
              <Grid item xs={12} sm={6} lg={4} key={course.id}>
                <Zoom in timeout={600 + index * 100}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                        '& .course-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .course-overlay': {
                          opacity: 1,
                        }
                      },
                    }}
                  >
                    {/* Course Image with Overlay */}
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="div"
                        className="course-image"
                        sx={{
                          height: 200,
                          background: `linear-gradient(135deg, ${getLevelColor(course.level)}22 0%, ${getLevelColor(course.level)}44 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.4s ease',
                          position: 'relative',
                        }}
                      >
                        <Box sx={{ textAlign: 'center', color: 'white' }}>
                          {getLevelIcon(course.level)}
                          <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                            {course.category}
                          </Typography>
                        </Box>
                      </CardMedia>
                      
                      {/* Hover Overlay */}
                      <Box
                        className="course-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: alpha(theme.palette.primary.main, 0.8),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          startIcon={<PlayArrowOutlinedIcon />}
                          sx={{ borderRadius: 50 }}
                        >
                          Start Learning
                        </Button>
                      </Box>

                      {/* Course Badges */}
                      <Box sx={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip 
                            label={course.level} 
                            size="small" 
                            sx={{
                              bgcolor: getLevelColor(course.level),
                              color: 'white',
                              fontWeight: 600,
                              '& .MuiChip-icon': { color: 'white' }
                            }}
                            icon={getLevelIcon(course.level)}
                          />
                          {course.isFeatured && (
                            <Chip 
                              icon={<StarOutlinedIcon />} 
                              label="Featured" 
                              size="small" 
                              sx={{ 
                                bgcolor: theme.palette.secondary.main, 
                                color: 'white',
                                animation: `${pulse} 2s infinite`
                              }}
                            />
                          )}
                          {course.isNew && (
                            <Chip 
                              icon={<AutoAwesomeIcon />} 
                              label="New" 
                              size="small" 
                              sx={{ bgcolor: theme.palette.info.main, color: 'white' }}
                            />
                          )}
                        </Box>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(course.id);
                          }}
                          sx={{ 
                            bgcolor: alpha(theme.palette.common.white, 0.9),
                            '&:hover': { bgcolor: 'white' }
                          }}
                        >
                          {bookmarkedCourses.includes(course.id) ? 
                            <BookmarkIcon color="primary" /> : 
                            <BookmarkBorderIcon />
                          }
                        </IconButton>
                      </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h6" component="h2" gutterBottom fontWeight={600} sx={{ mb: 2 }}>
                        {course.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {course.description}
                      </Typography>

                      {/* Instructor Info */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar 
                          src={course.instructorAvatar} 
                          sx={{ width: 40, height: 40, mr: 2 }}
                        >
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            {course.instructor}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Dental Implant Specialist
                          </Typography>
                        </Box>
                      </Box>

                      {/* Course Stats */}
                      <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeOutlinedIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {course.duration}h
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <SchoolOutlinedIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {course.modules} modules
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PeopleIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {course.enrolledStudents.toLocaleString()}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TrendingUpIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {course.completionRate}% complete
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      {/* Rating */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ display: 'flex', mr: 1 }}>
                          {[...Array(5)].map((_, i) => 
                            i < Math.floor(course.rating) ? (
                              <StarOutlinedIcon 
                                key={`filled-${i}`} 
                                fontSize="small" 
                                sx={{ color: 'warning.main' }} 
                              />
                            ) : (
                              <StarBorderOutlinedIcon 
                                key={`border-${i}`} 
                                fontSize="small" 
                                sx={{ color: 'text.disabled' }} 
                              />
                            )
                          )}
                        </Box>
                        <Typography variant="body2" fontWeight={600} sx={{ mr: 1 }}>
                          {course.rating}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ({course.enrolledStudents} reviews)
                        </Typography>
                      </Box>

                      {/* Progress Bar */}
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Course Progress
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {course.completionRate}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={course.completionRate} 
                          sx={{ 
                            height: 6, 
                            borderRadius: 3,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              bgcolor: getLevelColor(course.level)
                            }
                          }} 
                        />
                      </Box>

                      {/* Tags */}
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {course.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              fontSize: '0.75rem',
                              height: 24,
                              borderColor: alpha(theme.palette.primary.main, 0.3),
                              color: 'text.secondary'
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    
                    <Divider />
                    
                    <CardActions sx={{ p: 3, pt: 2 }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        size="large"
                        sx={{ 
                          textTransform: 'none',
                          borderRadius: 50,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                          '&:hover': {
                            boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                            transform: 'translateY(-1px)'
                          }
                        }}
                        startIcon={<PlayArrowOutlinedIcon />}
                      >
                        Start Course - Earn $500 Certificate
                      </Button>
                    </CardActions>
                  </Card>
                </Zoom>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper 
                sx={{ 
                  textAlign: 'center', 
                  py: 8, 
                  px: 4,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
                  border: `2px dashed ${alpha(theme.palette.primary.main, 0.1)}`
                }}
              >
                <SearchOutlinedIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
                <Typography variant="h5" gutterBottom color="text.secondary">
                  No courses match your search criteria
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Try adjusting your search terms or filter settings to find the perfect dental implant course for you.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  onClick={() => {
                    setSearchTerm('');
                    setTabValue(0);
                  }}
                  sx={{ borderRadius: 50 }}
                >
                  Clear Filters
                </Button>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesPage;
