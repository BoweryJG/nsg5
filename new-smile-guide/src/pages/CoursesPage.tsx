import React, { useState } from 'react';
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
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'; // For filled star in featured chip & ratings
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'; // For empty star in ratings
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
// For levels, we might use something like:
// import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
// import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
// import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
// Or more generic:
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  modules: number;
  rating: number;
  enrolledStudents: number;
  isFeatured: boolean;
}

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Filter courses based on search term and selected tab
  const filteredCourses = courses.filter((course: Course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = tabValue === 0 || 
                      (tabValue === 1 && course.isFeatured) ||
                      (tabValue === 2 && course.level === 'Beginner') ||
                      (tabValue === 3 && course.level === 'Intermediate') ||
                      (tabValue === 4 && course.level === 'Advanced');
    
    return matchesSearch && matchesTab;
  });

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
            Dental Implant Courses
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Expert-led educational courses designed specifically for patients considering dental implants.
            Complete a course to earn a $500 certificate toward your procedure.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Certificate Info */}
        <Box 
          sx={{ 
            p: 4, 
            mb: 6, 
            bgcolor: 'secondary.light', 
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box sx={{ flex: { md: 3 } }}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Earn a $500 Certificate
            </Typography>
            <Typography variant="body1" paragraph>
              When you complete one of our comprehensive courses, you'll receive a $500 certificate that can be applied 
              toward your dental implant procedure with any of our participating specialists. It's our way of rewarding 
              you for becoming an informed patient and taking control of your dental health journey.
            </Typography>
            <Button 
              component={RouterLink}
              to="/certificates"
              variant="contained" 
              color="secondary"
              size="medium"
              sx={{ mt: 1 }}
              startIcon={<WorkspacePremiumOutlinedIcon />}
            >
              View Sample Certificates
            </Button>
          </Box>
          <Box sx={{ flex: { md: 1 }, display: 'flex', justifyContent: 'center' }}>
            <WorkspacePremiumOutlinedIcon sx={{ fontSize: 100, color: 'secondary.main' }} />
          </Box>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 4 }}
          >
            <Tab icon={<ListAltOutlinedIcon />} iconPosition="start" label="All Courses" />
            <Tab icon={<StarOutlinedIcon />} iconPosition="start" label="Featured" />
            <Tab icon={<FilterListOutlinedIcon />} iconPosition="start" label="Beginner" /> 
            <Tab icon={<FilterListOutlinedIcon />} iconPosition="start" label="Intermediate" />
            <Tab icon={<FilterListOutlinedIcon />} iconPosition="start" label="Advanced" />
          </Tabs>
        </Box>

        {/* Course Listings */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: Course) => (
              <Card 
                key={course.id}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={course.imageUrl}
                  alt={course.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Chip 
                      label={course.level} 
                      size="small" 
                      color={
                        course.level === 'Beginner' ? 'success' : 
                        course.level === 'Intermediate' ? 'info' : 'error'
                      }
                    />
                    {course.isFeatured && (
                      <Chip 
                        icon={<StarOutlinedIcon />} 
                        label="Featured" 
                        size="small" 
                        sx={{ bgcolor: 'secondary.main', color: 'white' }}
                      />
                    )}
                  </Box>
                  
                  <Typography variant="h6" component="h2" gutterBottom>
                    {course.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {course.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Instructor: {course.instructor}
                  </Typography>
                  
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeOutlinedIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {course.duration} hours
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SchoolOutlinedIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {course.modules} modules
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {[...Array(5)].map((_, i) => 
                      i < Math.floor(course.rating) ? (
                        <StarOutlinedIcon 
                          key={`filled-${i}`} 
                          fontSize="small" 
                          sx={{ color: 'warning.main', mr: 0.5 }} 
                        />
                      ) : (
                        <StarBorderOutlinedIcon 
                          key={`border-${i}`} 
                          fontSize="small" 
                          sx={{ color: 'text.disabled', mr: 0.5 }} 
                        />
                      )
                    )}
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      ({course.enrolledStudents} students)
                    </Typography>
                  </Box>
                </CardContent>
                
                <Divider />
                
                <CardActions>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    sx={{ textTransform: 'none' }}
                    startIcon={<PlayArrowOutlinedIcon />}
                  >
                    Start Course
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Box sx={{ textAlign: 'center', gridColumn: '1 / -1', py: 5 }}>
              <Typography variant="h6">
                No courses match your search criteria.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search or filter settings.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

// Sample course data
const courses: Course[] = [
  {
    id: '1',
    title: 'Dental Implants 101: The Complete Patient Guide',
    description: 'A comprehensive introduction to dental implants for patients considering this treatment option.',
    imageUrl: '/path/to/course1.jpg',
    instructor: 'Dr. Sarah Johnson',
    level: 'Beginner',
    duration: 4,
    modules: 6,
    rating: 4.8,
    enrolledStudents: 1245,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Understanding the Dental Implant Procedure',
    description: 'A detailed walkthrough of what to expect before, during, and after implant surgery.',
    imageUrl: '/path/to/course2.jpg',
    instructor: 'Dr. Michael Chen',
    level: 'Intermediate',
    duration: 3.5,
    modules: 5,
    rating: 4.6,
    enrolledStudents: 892,
    isFeatured: false
  },
  {
    id: '3',
    title: 'Implant Aftercare and Long-Term Maintenance',
    description: 'Learn how to care for your dental implants to ensure they last a lifetime.',
    imageUrl: '/path/to/course3.jpg',
    instructor: 'Dr. Lisa Rodriguez',
    level: 'Beginner',
    duration: 2.5,
    modules: 4,
    rating: 4.7,
    enrolledStudents: 1056,
    isFeatured: true
  },
  {
    id: '4',
    title: 'Advanced Implant Options and Technologies',
    description: 'Explore cutting-edge implant technologies and treatment approaches for complex cases.',
    imageUrl: '/path/to/course4.jpg',
    instructor: 'Dr. James Wilson',
    level: 'Advanced',
    duration: 5,
    modules: 8,
    rating: 4.9,
    enrolledStudents: 674,
    isFeatured: false
  },
  {
    id: '5',
    title: 'Financing Your Dental Implants',
    description: 'Understanding costs, insurance coverage, and payment options for dental implant treatment.',
    imageUrl: '/path/to/course5.jpg',
    instructor: 'Dr. Emily Thompson',
    level: 'Beginner',
    duration: 1.5,
    modules: 3,
    rating: 4.5,
    enrolledStudents: 1423,
    isFeatured: false
  },
  {
    id: '6',
    title: 'Comparing Dental Implants to Other Tooth Replacement Options',
    description: 'A comprehensive comparison of implants, bridges, and dentures to help you make an informed decision.',
    imageUrl: '/path/to/course6.jpg',
    instructor: 'Dr. Robert Kim',
    level: 'Intermediate',
    duration: 3,
    modules: 5,
    rating: 4.7,
    enrolledStudents: 897,
    isFeatured: true
  }
];

export default CoursesPage;
