export {};
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

const CustomDentalImplantsPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url("/path/to/implant-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Understanding Dental Implants
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 3, fontWeight: 300 }}>
              The most advanced solution for replacing missing teeth with a
              permanent, natural-looking alternative.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
            >
              Explore Implant Courses
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Find a Specialist
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            What Are Dental Implants?
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Dental implants are titanium posts that are surgically placed into the jawbone beneath 
            your gums to act as artificial tooth roots. Once in place, they allow your dentist to 
            mount replacement teeth onto them, providing a foundation for permanent or removable 
            replacement teeth that are made to match your natural teeth.
          </Typography>
        </Box>
        
        {/* Benefits Cards */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 3, 
            mb: 8 
          }}
        >
          <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Benefits
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Natural appearance and functionality" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Improved comfort and speech" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Easier eating and improved self-esteem" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Durability (can last a lifetime)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Prevention of bone loss" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Ideal Candidates
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="People with one or more missing teeth" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Those with a fully developed jawbone" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Patients with adequate bone density or ability to have bone grafting" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Those without health conditions that affect healing" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Non-smokers or those willing to quit" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Success Rates
              </Typography>
              <Box sx={{ textAlign: 'center', py: 2, mb: 2 }}>
                <Typography variant="h2" component="div" color="primary" sx={{ fontWeight: 700 }}>
                  95%+
                </Typography>
                <Typography variant="subtitle1">Long-term success rate</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                With proper care and maintenance, dental implants have a remarkably high success rate. 
                Modern techniques and technology have made implants more predictable and successful than ever before.
              </Typography>
              <Typography variant="body1">
                Most patients report that the comfort and functionality of implants significantly 
                exceeds their expectations, providing a permanent solution to tooth loss.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      
      {/* Implant Process */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
            The Implant Process
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 3 }}>
              <Box sx={{ mr: { sm: 4 }, mb: { xs: 2, sm: 0 }, width: { sm: '25%' } }}>
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  Step 1
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Initial Consultation
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1">
                  Your journey begins with a comprehensive evaluation, including dental imaging,
                  to determine if you're a suitable candidate for implants. Your dentist will assess
                  your oral health, bone density, and discuss treatment options.
                </Typography>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 3 }}>
              <Box sx={{ mr: { sm: 4 }, mb: { xs: 2, sm: 0 }, width: { sm: '25%' } }}>
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  Step 2
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Implant Placement
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1">
                  The implant, a titanium post acting as your tooth root, is surgically placed into
                  your jawbone. Most patients report minimal discomfort during this procedure, which
                  is typically performed under local anesthesia. After placement, a healing period of
                  3-6 months allows the implant to fuse with your bone (osseointegration).
                </Typography>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 3 }}>
              <Box sx={{ mr: { sm: 4 }, mb: { xs: 2, sm: 0 }, width: { sm: '25%' } }}>
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  Step 3
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Abutment Placement
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1">
                  Once healed, a connector (abutment) is attached to the implant. This requires a
                  minor surgical procedure to reopen the gum and attach the abutment. In some cases,
                  the abutment can be placed during the initial implant surgery.
                </Typography>
              </Box>
            </Paper>
            
            <Paper sx={{ p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box sx={{ mr: { sm: 4 }, mb: { xs: 2, sm: 0 }, width: { sm: '25%' } }}>
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  Step 4
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Crown Placement
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1">
                  After your gums heal, impressions of your mouth are taken to create a custom crown.
                  This crown is attached to the abutment, completing your implant. It's designed to
                  match the color and shape of your natural teeth, providing a seamless smile.
                </Typography>
              </Box>
            </Paper>
          </Box>
          
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" size="large">
              Learn More About the Procedure
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Types of Dental Implants */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
          Types of Dental Implants
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/single-tooth-implant.jpg"
              alt="Single Tooth Implant"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Single Tooth Implants
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Designed to replace an individual missing tooth without affecting adjacent teeth.
                Each implant supports its own crown, creating a natural-looking and functioning
                replacement that integrates seamlessly with your smile.
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/multiple-implants.jpg"
              alt="Multiple Tooth Implants"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Multiple Tooth Implants
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For patients missing several teeth, multiple implants can support fixed bridges,
                eliminating the need for a removable partial denture. This approach provides 
                greater stability and prevents bone loss in the jaw.
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="200"
              image="/path/to/full-arch.jpg"
              alt="Full Arch Implants"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Full Arch Restoration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Using as few as four strategically placed implants, a complete arch of teeth can be
                supported. This approach, often called "All-on-4" or "Teeth in a Day," provides 
                a fixed, permanent solution for those missing all teeth in the upper or lower jaw.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      
      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">How long do dental implants last?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  With proper care and maintenance, dental implants can last a lifetime. The crown 
                  attached to the implant typically lasts 10-15 years before needing replacement, 
                  but the implant itself can remain in place indefinitely if kept healthy.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Is the implant procedure painful?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Most patients report that the discomfort experienced during and after the procedure 
                  is less than expected. Local anesthesia is used during the surgery, and any post-surgical 
                  discomfort can typically be managed with over-the-counter pain medications. Many patients 
                  return to work and normal activities the day after the procedure.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">How much do dental implants cost?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  The cost of dental implants varies depending on factors such as the number of implants, 
                  preparatory procedures needed (like bone grafts), and geographic location. While the 
                  initial investment is higher than other tooth replacement options, their durability and 
                  long-term functionality often make them more cost-effective over time. Many dental 
                  practices also offer financing options to help manage the cost.
                </Typography>
                <Box sx={{ mt: 2, bgcolor: 'info.light', p: 2, borderRadius: 1 }}>
                  <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <InfoIcon fontSize="small" /> Complete our implant course and receive a $500 certificate toward your procedure!
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Am I a candidate for dental implants?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Most adults with good general and oral health are candidates for dental implants. 
                  Adequate bone in your jaw is needed to support the implant, but even if bone loss 
                  has occurred, techniques like bone grafting may make implants possible. Certain medical 
                  conditions and lifestyle factors (like smoking) may affect candidacy, which is why a 
                  comprehensive evaluation with a dental professional is essential.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">How do I care for dental implants?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Caring for dental implants is similar to caring for natural teeth: regular brushing, 
                  flossing, and dental check-ups are essential. While implants can't develop cavities, 
                  they can be affected by gum disease, so maintaining healthy gums is crucial for implant 
                  longevity. Your dentist may recommend special interdental brushes to clean around the implant.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          
        </Container>
      </Box>
      
      {/* Call to Action */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Paper sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Learn More?
          </Typography>
          <Typography variant="h6" paragraph sx={{ fontWeight: 300, mb: 4 }}>
            Take our comprehensive dental implant course and receive a $500 certificate 
            upon completion that can be used toward your treatment with participating specialists.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ fontWeight: 600, py: 1.5, px: 4 }}
            >
              Enroll in Course
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
            >
              Find a Specialist
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CustomDentalImplantsPage;
