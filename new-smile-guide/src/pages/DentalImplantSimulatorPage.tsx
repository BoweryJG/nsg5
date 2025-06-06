import React from 'react';
import { Box, Container, Typography, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledIframe = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
  borderRadius: '8px',
});

const IframeContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 200px)',
  minHeight: '600px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
}));

const LoadingOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  zIndex: 1,
});

function DentalImplantSimulatorPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          AI Dental Implant Simulator
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Visualize smile transformations instantly with our AI-powered tool
        </Typography>
      </Box>

      <IframeContainer elevation={3}>
        {isLoading && (
          <LoadingOverlay>
            <CircularProgress size={60} />
          </LoadingOverlay>
        )}
        <StyledIframe
          src="https://dentalimplantsimulator.netlify.app/"
          title="Dental Implant Simulator"
          onLoad={handleIframeLoad}
          allow="camera; microphone"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        />
      </IframeContainer>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Powered by AI • HIPAA Compliant • 100% Secure
        </Typography>
      </Box>
    </Container>
  );
}

export default DentalImplantSimulatorPage;