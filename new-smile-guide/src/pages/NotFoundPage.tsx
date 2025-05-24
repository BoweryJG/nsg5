import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFoundPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh'
        }}
      >
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100, color: 'primary.main', mb: 4 }} />
        
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          404
        </Typography>
        
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
          Sorry, we couldn't find the page you're looking for. The page might have been moved, 
          deleted, or perhaps you mistyped the URL.
        </Typography>
        
        <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            size="large"
          >
            Return Home
          </Button>
          
          <Button 
            component={Link} 
            to="/dental-implants" 
            variant="outlined" 
            size="large"
          >
            Learn About Dental Implants
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
