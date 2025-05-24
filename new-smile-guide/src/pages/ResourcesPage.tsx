import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link as RouterLink } from 'react-router-dom'; // Added for Contact Us button

const ResourcesPage: React.FC = () => {
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
            Patient Resources
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Educational materials, guides, and resources to help you make informed decisions about dental implants.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Featured Resources Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Featured Resources
          </Typography>
          
          <Grid container spacing={4}>
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' } }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/path/to/patient-guide.jpg"
                  alt="Dental Implant Patient Guide"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Complete Patient Guide to Dental Implants
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our comprehensive guide covers everything you need to know about dental implants, from initial consultation to aftercare.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    startIcon={<PictureAsPdfOutlinedIcon />} 
                    variant="contained" 
                    color="primary"
                    fullWidth
                  >
                    Download PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' } }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/path/to/video-library.jpg"
                  alt="Video Library"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Implant Procedure Video Library
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Watch educational videos that walk through the implant procedure, with 3D animations and expert explanations.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    startIcon={<VideocamOutlinedIcon />} 
                    variant="contained" 
                    color="primary"
                    fullWidth
                  >
                    View Videos
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' } }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/path/to/recovery-checklist.jpg"
                  alt="Recovery Checklist"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Post-Procedure Recovery Checklist
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A step-by-step guide to optimize your recovery after implant surgery, with daily care instructions and milestones.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    startIcon={<DownloadOutlinedIcon />} 
                    variant="contained" 
                    color="primary"
                    fullWidth
                  >
                    Download Checklist
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        
        {/* Educational Articles Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Educational Articles
          </Typography>
          
          <Paper sx={{ p: 3 }}>
            <List sx={{ width: '100%' }}>
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <ArticleOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Understanding the Different Types of Dental Implants" 
                  secondary="Learn about endosteal, subperiosteal, and zygomatic implants and which might be right for you."
                />
                <Button variant="outlined" size="small" startIcon={<ReadMoreOutlinedIcon />}>Read Article</Button>
              </ListItem>
              
              <Divider />
              
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <ArticleOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="The Cost of Dental Implants: What to Expect" 
                  secondary="A breakdown of implant costs, insurance coverage, financing options, and how to maximize your benefits."
                />
                <Button variant="outlined" size="small" startIcon={<ReadMoreOutlinedIcon />}>Read Article</Button>
              </ListItem>
              
              <Divider />
              
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <ArticleOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Bone Grafting for Dental Implants: When Is It Necessary?" 
                  secondary="Everything you need to know about bone grafting procedures that may be required before implant placement."
                />
                <Button variant="outlined" size="small" startIcon={<ReadMoreOutlinedIcon />}>Read Article</Button>
              </ListItem>
              
              <Divider />
              
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <ArticleOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Implants vs. Bridges vs. Dentures: Making the Right Choice" 
                  secondary="A comparison of tooth replacement options to help you understand the pros and cons of each approach."
                />
                <Button variant="outlined" size="small" startIcon={<ReadMoreOutlinedIcon />}>Read Article</Button>
              </ListItem>
              
              <Divider />
              
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <ArticleOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Maintaining Your Dental Implants: A Lifetime Care Guide" 
                  secondary="How to care for your implants to ensure they last a lifetime, including daily care and professional maintenance."
                />
                <Button variant="outlined" size="small" startIcon={<ReadMoreOutlinedIcon />}>Read Article</Button>
              </ListItem>
            </List>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="contained" startIcon={<ViewListOutlinedIcon />}>View All Articles</Button>
            </Box>
          </Paper>
        </Box>
        
        {/* Downloadable Resources Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Downloadable Resources
          </Typography>
          
          <Grid container spacing={3}>
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
              <Paper 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <PictureAsPdfOutlinedIcon fontSize="large" color="error" sx={{ mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Pre-Op Instructions
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Prepare for your implant surgery with these important pre-operative instructions.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  startIcon={<DownloadOutlinedIcon />}
                  sx={{ mt: 'auto' }}
                >
                  Download PDF
                </Button>
              </Paper>
            </Grid>
            
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
              <Paper 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <PictureAsPdfOutlinedIcon fontSize="large" color="error" sx={{ mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Post-Op Care Guide
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Essential aftercare instructions for the days and weeks following implant surgery.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  startIcon={<DownloadOutlinedIcon />}
                  sx={{ mt: 'auto' }}
                >
                  Download PDF
                </Button>
              </Paper>
            </Grid>
            
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
              <Paper 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <PictureAsPdfOutlinedIcon fontSize="large" color="error" sx={{ mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Financing Options
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Detailed information about payment plans, insurance, and financing for your dental implants.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  startIcon={<DownloadOutlinedIcon />}
                  sx={{ mt: 'auto' }}
                >
                  Download PDF
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* FAQ Section */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          
          <Stack spacing={2}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant="subtitle1" fontWeight={500}>
                  How long does the entire implant process take?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The entire process typically takes 3-9 months from the initial consultation to the final placement of the crown. This timeline can vary based on individual healing times, whether bone grafting is needed, and other factors specific to your case. The surgical placement of the implant itself usually takes 1-2 hours, followed by a healing period of 3-6 months before the final restoration is placed.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant="subtitle1" fontWeight={500}>
                  Are dental implants painful?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Most patients report that the discomfort during and after the procedure is less than they expected. Local anesthesia is used during the surgery, so you shouldn't feel pain during the procedure. Post-surgery, some discomfort, swelling, and minor bleeding are normal, but these can typically be managed with over-the-counter or prescribed pain medications.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant="subtitle1" fontWeight={500}>
                  How do I care for my implants?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Dental implants require the same care as natural teeth: brushing twice a day, flossing daily, and regular dental check-ups. While implants can't get cavities, they can be affected by gum disease, so maintaining good oral hygiene is essential. Your dentist may recommend special tools like interdental brushes or water flossers to clean around the implants effectively. Avoid chewing very hard items like ice or hard candy, which can damage the crown.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant="subtitle1" fontWeight={500}>
                  How much do dental implants cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The cost of dental implants varies based on several factors, including the number of implants needed, whether preparatory procedures (like bone grafts) are required, the type of implant and restoration used, and geographic location. On average, a single tooth implant can cost between $3,000-$6,000. Multiple tooth implants or full-mouth reconstructions can range from $10,000 to $50,000+. Many insurance plans now provide some coverage for implants, and financing options are available to make treatment more affordable.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant="subtitle1" fontWeight={500}>
                  What is the success rate of dental implants?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Dental implants have a success rate of approximately 95-98%. Success rates can vary based on where in the jaw the implants are placed, the patient's overall health, and adherence to aftercare instructions. Factors that can affect implant success include smoking, certain medical conditions like uncontrolled diabetes, and poor oral hygiene. When properly cared for, dental implants can last a lifetime.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Still have questions? We're here to help.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              component={RouterLink} 
              to="/contact"
              startIcon={<MailOutlineOutlinedIcon />}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        
        {/* External Resources Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Additional Resources
          </Typography>
          
          <Grid container spacing={3}>
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BookOutlinedIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" component="h3">
                    Recommended Reading
                  </Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemText primary="The Patient's Guide to Dental Implants" secondary="By Dr. William Becker" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tooth Replacement Options: Making the Right Choice" secondary="By Dr. Jennifer Morris" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Understanding Dental Surgery" secondary="By Dr. Robert Chen" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolOutlinedIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" component="h3">
                    Educational Organizations
                  </Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="American Academy of Implant Dentistry" 
                      secondary={<a href="https://www.aaid.com" target="_blank" rel="noopener noreferrer">Visit Website</a>} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Academy of Osseointegration" 
                      secondary={<a href="https://www.osseo.org" target="_blank" rel="noopener noreferrer">Visit Website</a>} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="American Dental Association" 
                      secondary={<a href="https://www.ada.org" target="_blank" rel="noopener noreferrer">Visit Website</a>} 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LanguageOutlinedIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" component="h3">
                    Helpful Websites
                  </Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="MouthHealthy.org" 
                      secondary={<a href="https://www.mouthhealthy.org" target="_blank" rel="noopener noreferrer">Visit Website</a>} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="OralHealthFoundation.org" 
                      secondary={<a href="https://www.oralhealthfoundation.org" target="_blank" rel="noopener noreferrer">Visit Website</a>} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="DentalFear.org" 
                      secondary={<a href="https://www.dentalfear.org" target="_blank" rel="noopener noreferrer">Visit Website</a>} 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
