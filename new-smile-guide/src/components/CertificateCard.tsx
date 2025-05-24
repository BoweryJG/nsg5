import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Certificate, Course } from '../services/supabase';

type CertificateCardProps = {
  certificate: Certificate & { course?: Course };
  onDownload?: () => void;
  onRedeem?: () => void;
};

const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onDownload,
  onRedeem
}) => {
  // Format certificate issue date
  const formattedDate = new Date(certificate.issue_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Card 
      elevation={3} 
      sx={{ 
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute', 
          top: -15, 
          left: 20, 
          backgroundColor: 'secondary.main',
          borderRadius: '50%',
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 2,
        }}
      >
        <WorkspacePremiumIcon sx={{ fontSize: 30, color: '#fff' }} />
      </Box>
      
      <CardContent sx={{ pt: 4, pb: 2, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Certificate of Completion
          </Typography>
          <Chip 
            icon={<VerifiedIcon />} 
            label="Verified" 
            size="small" 
            color="success" 
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Certificate #{certificate.certificate_number}
        </Typography>
        
        <Typography variant="h6" component="div" sx={{ my: 1 }}>
          {certificate.course?.title || 'Dental Implant Course'}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Issued: {formattedDate}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2" color="text.secondary">
            Value: ${certificate.value_amount || 500}
          </Typography>
        </Stack>
        
        <Box 
          sx={{ 
            p: 2, 
            bgcolor: 'primary.light', 
            borderRadius: 1, 
            mb: 2,
            color: 'primary.contrastText'
          }}
        >
          <Typography variant="body2">
            This certificate entitles the bearer to a ${certificate.value_amount || 500} discount on dental implant procedures
            with participating specialists.
          </Typography>
        </Box>
      </CardContent>
      
      <Divider />
      
      <Box sx={{ display: 'flex', p: 1.5, gap: 1 }}>
        <Button 
          startIcon={<DownloadIcon />}
          variant="outlined" 
          color="primary"
          size="small"
          onClick={onDownload}
          sx={{ flex: 1 }}
        >
          Download
        </Button>
        <Button 
          variant="contained" 
          color="primary"
          size="small"
          onClick={onRedeem}
          sx={{ flex: 1 }}
        >
          Find Specialists
        </Button>
      </Box>
    </Card>
  );
};

export default CertificateCard;
