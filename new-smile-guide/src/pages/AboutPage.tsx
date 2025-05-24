import React from 'react';
import { Container, Typography, Box, Paper, Divider, Stack } from '@mui/material';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          About New Smile Guide
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Empowering patients with knowledge about dental implants through expert-led education.
        </Typography>
      </Box>
      
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <FlagOutlinedIcon color="primary" sx={{ fontSize: '2.5rem' }} />
          <Typography variant="h4" component="h2" fontWeight={600}>
            Our Mission
          </Typography>
        </Stack>
        <Typography variant="body1" paragraph>
          At New Smile Guide, our mission is to provide comprehensive, accessible, and patient-friendly education on dental implants. 
          We believe that informed patients make better decisions about their oral health and experience better outcomes.
        </Typography>
        <Typography variant="body1" paragraph>
          By connecting patients with authoritative information and qualified specialists, we aim to transform the dental implant 
          experience from one of uncertainty to one of confidence and clarity.
        </Typography>
      </Paper>
      
      <Divider sx={{ my: 6 }} />
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={600} textAlign="center">
          Our Values
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 4 }}>
          <Paper elevation={1} sx={{ p: 3, flex: 1, textAlign: 'center' }}>
            <PeopleOutlineOutlinedIcon color="primary" sx={{ fontSize: '3rem', mb: 1 }} />
            <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
              Patient-Centered
            </Typography>
            <Typography variant="body1">
              Everything we do is designed with the patient in mind, focusing on clarity, accessibility, and real-world utility.
            </Typography>
          </Paper>
          
          <Paper elevation={1} sx={{ p: 3, flex: 1, textAlign: 'center' }}>
            <ScienceOutlinedIcon color="primary" sx={{ fontSize: '3rem', mb: 1 }} />
            <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
              Evidence-Based
            </Typography>
            <Typography variant="body1">
              Our educational content is rooted in the latest research and clinical best practices in implant dentistry.
            </Typography>
          </Paper>
          
          <Paper elevation={1} sx={{ p: 3, flex: 1, textAlign: 'center' }}>
            <VisibilityOutlinedIcon color="primary" sx={{ fontSize: '3rem', mb: 1 }} />
            <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
              Transparency
            </Typography>
            <Typography variant="body1">
              We believe in clear, honest information about procedures, recovery, costs, and expectations.
            </Typography>
          </Paper>
        </Box>
      </Box>
      
      <Divider sx={{ my: 6 }} />
      
      <Box>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2, justifyContent: 'center' }}>
          <HistoryEduOutlinedIcon color="primary" sx={{ fontSize: '2.5rem' }} />
          <Typography variant="h4" component="h2" fontWeight={600} textAlign="center">
            Our Story
          </Typography>
        </Stack>
        <Typography variant="body1" paragraph>
          New Smile Guide was founded by a team of dental professionals who recognized a significant gap in patient education 
          regarding dental implants. Despite being one of the most transformative dental procedures available, many patients 
          felt overwhelmed by complex information or misled by oversimplified marketing.
        </Typography>
        <Typography variant="body1" paragraph>
          Inspired by the success of patient education platforms in aesthetic medicine, we set out to create an 
          authoritative yet approachable resource focused exclusively on dental implants. Our platform combines 
          comprehensive educational courses, specialist directories, and innovative learning tools to guide patients 
          through every step of their implant journey.
        </Typography>
        <Typography variant="body1">
          Today, New Smile Guide stands as the premier educational resource for dental implant patients, helping thousands 
          make informed decisions and connect with qualified specialists who can restore their smiles with confidence.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
