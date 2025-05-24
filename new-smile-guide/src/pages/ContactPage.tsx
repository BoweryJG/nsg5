import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Divider,
  Alert,
  Snackbar,
  CardContent,
  Card,
} from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: 'email',
    isExistingPatient: false,
    hasImplants: false,
    isInterestedInCourses: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === '',
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the form data to your backend
      setSnackbarOpen(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactPreference: 'email',
        isExistingPatient: false,
        hasImplants: false,
        isInterestedInCourses: false,
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

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
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Have questions about dental implants or our educational courses? 
            We're here to help and connect you with specialists.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Contact Form */}
          <Box sx={{ flex: 3 }}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={formErrors.firstName}
                      helperText={formErrors.firstName ? 'First name is required' : ''}
                    />
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={formErrors.lastName}
                      helperText={formErrors.lastName ? 'Last name is required' : ''}
                    />
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={formErrors.email}
                      helperText={formErrors.email ? 'Valid email is required' : ''}
                    />
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: 'span 12' }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: 'span 12' }}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={formErrors.message}
                      helperText={formErrors.message ? 'Message is required' : ''}
                    />
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: 'span 12' }}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Preferred Contact Method</FormLabel>
                      <RadioGroup
                        row
                        name="contactPreference"
                        value={formData.contactPreference}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                        <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: 'span 12' }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        Additional Information
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.isExistingPatient}
                            onChange={handleChange}
                            name="isExistingPatient"
                          />
                        }
                        label="I am an existing patient"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.hasImplants}
                            onChange={handleChange}
                            name="hasImplants"
                          />
                        }
                        label="I currently have dental implants"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.isInterestedInCourses}
                            onChange={handleChange}
                            name="isInterestedInCourses"
                          />
                        }
                        label="I am interested in educational courses"
                      />
                    </Box>
                  </Grid>
                  <Grid component="div" sx={{ gridColumn: 'span 12' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ mt: 2 }}
                      startIcon={<SendOutlinedIcon />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
          
          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Contact Information
                </Typography>
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneOutlinedIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1" fontWeight={500}>
                      Phone
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 6 }}>
                    (800) 555-SMILE
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailOutlinedIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1" fontWeight={500}>
                      Email
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 6 }}>
                    info@newsmileguide.com
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnOutlinedIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1" fontWeight={500}>
                      Address
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 6 }}>
                    123 Smile Way<br />
                    Suite 200<br />
                    New York, NY 10001
                  </Typography>
                </Box>
                
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeOutlinedIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1" fontWeight={500}>
                      Hours
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 6 }}>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            
            <Card sx={{ mt: 4, bgcolor: 'secondary.light' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Looking for a Specialist?
                </Typography>
                <Typography variant="body2" paragraph>
                  If you're looking to connect with a dental implant specialist in your area, visit our specialists directory.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary"
                  fullWidth
                  startIcon={<PersonSearchOutlinedIcon />}
                >
                  Find a Specialist
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Your message has been sent! We'll be in touch shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
