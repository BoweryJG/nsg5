import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button, 
  Alert, 
  Paper, 
  CircularProgress,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CertificateCard from '../components/CertificateCard';
import { Certificate } from '../services/supabase';
import { courseService } from '../services/courseService';

const UserCertificatesPage: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Mock user ID for demo purposes - in a real app, this would come from auth context
  const mockUserId = 'user-123';
  
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const userCertificates = await courseService.getUserCertificates(mockUserId);
        setCertificates(userCertificates);
      } catch (err) {
        console.error('Error fetching certificates:', err);
        setError('Failed to load your certificates. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCertificates();
  }, []);

  const handleDownload = (certificateId: string) => {
    // In a real implementation, this would generate and download the PDF certificate
    console.log(`Downloading certificate ${certificateId}`);
    alert(`Certificate download started for ${certificateId}`);
  };

  const handleRedeem = (certificateId: string) => {
    // In a real implementation, this would navigate to specialists page with the certificate pre-selected
    console.log(`Redeeming certificate ${certificateId}`);
    // Navigate to specialists page
    window.location.href = '/specialists?certificate=' + certificateId;
  };

  // For demo/development purposes, we'll add some sample certificates if none exist
  const sampleCertificates: Certificate[] = [
    {
      id: 'cert-123',
      user_id: mockUserId,
      course_id: 'course-1',
      certificate_number: 'NSG-202505230001',
      issue_date: new Date().toISOString(),
      certificate_url: '/certificates/sample.pdf',
      value_amount: 500,
      course: {
        id: 'course-1',
        title: 'Dental Implants 101: The Complete Patient Guide',
        slug: 'dental-implants-101',
        description: 'A comprehensive introduction to dental implants for patients.',
        thumbnail_url: '/path/to/thumbnail.jpg',
        duration_minutes: 240,
        created_at: new Date().toISOString(),
        is_featured: true,
        price: 0
      }
    },
    {
      id: 'cert-456',
      user_id: mockUserId,
      course_id: 'course-2',
      certificate_number: 'NSG-202505230002',
      issue_date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
      certificate_url: '/certificates/sample2.pdf',
      value_amount: 500,
      course: {
        id: 'course-2',
        title: 'Understanding the Dental Implant Procedure',
        slug: 'dental-implant-procedure',
        description: 'A detailed walkthrough of what to expect during implant surgery.',
        thumbnail_url: '/path/to/thumbnail2.jpg',
        duration_minutes: 180,
        created_at: new Date().toISOString(),
        is_featured: false,
        price: 0
      }
    }
  ];

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
            Your Certificates
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            View and redeem your earned certificates worth $500 toward your dental implant procedure.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ my: 4 }}>{error}</Alert>
        ) : certificates.length > 0 || sampleCertificates.length > 0 ? (
          <>
            <Typography variant="h4" component="h2" gutterBottom>
              Your Earned Certificates
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
              These certificates are each worth $500 toward your dental implant procedure when you visit a participating specialist.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
              {/* Show either real certificates or sample certificates for development */}
              {(certificates.length > 0 ? certificates : sampleCertificates).map((certificate) => (
                <Box key={certificate.id}>
                  <CertificateCard 
                    certificate={certificate}
                    onDownload={() => handleDownload(certificate.id)}
                    onRedeem={() => handleRedeem(certificate.id)}
                  />
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 6 }} />

            <Paper sx={{ p: 4, my: 4, borderRadius: 2, backgroundColor: 'secondary.light' }}>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                How to Use Your Certificate
              </Typography>
              <Typography variant="body1" paragraph>
                Follow these simple steps to redeem your $500 certificate:
              </Typography>
              <Box component="ol" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    Click on "Find Specialists" to browse participating dental specialists in your area.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    Contact the specialist and schedule a consultation, mentioning your New Smile Guide certificate.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    When you meet with the specialist, simply present your certificate (digital or printed).
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">
                    The $500 value will be applied to your dental implant procedure with the participating specialist.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" gutterBottom>
              You don't have any certificates yet
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Complete one of our dental implant courses to earn a $500 certificate
              that you can use toward your procedure.
            </Typography>
            <Button
              component={RouterLink}
              to="/courses"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddIcon />}
              sx={{ mt: 2 }}
            >
              Browse Courses
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default UserCertificatesPage;
