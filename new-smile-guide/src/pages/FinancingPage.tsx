import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Stack,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalculateIcon from '@mui/icons-material/Calculate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarsIcon from '@mui/icons-material/Stars';
import { Link as RouterLink } from 'react-router-dom';

// Financing options data
const financingOptions = [
  {
    id: 'cherry',
    name: 'Cherry',
    featured: true,
    logo: '/path/to/cherry-logo.png',
    approvalRate: '80%',
    creditCheck: 'No hard credit check',
    minCreditScore: 520,
    applicationTime: '60 seconds',
    interestRates: 'Varies',
    maxAmount: 'Up to $10,000',
    highlights: [
      'Fast 60-second application',
      'No hard credit check (won\'t affect your score)',
      '80% approval rate',
      'Low minimum credit score requirement (520)',
      'Flexible payment plans',
    ],
    applicationUrl: 'https://patient.withcherry.com/',
  },
  {
    id: 'carecredit',
    name: 'CareCredit',
    featured: false,
    logo: '/path/to/carecredit-logo.png',
    approvalRate: 'Varies',
    creditCheck: 'Hard credit check required',
    minCreditScore: 640,
    applicationTime: '~5 minutes',
    interestRates: '0% promotional periods available',
    maxAmount: 'Up to $25,000',
    highlights: [
      '0% promotional financing periods available',
      'Accepted at over 225,000 providers nationwide',
      'Can be used for multiple healthcare needs',
      'Online account management',
    ],
    applicationUrl: 'https://www.carecredit.com/apply/',
  },
  {
    id: 'proceed',
    name: 'Proceed Finance',
    featured: false,
    logo: '/path/to/proceed-logo.png',
    approvalRate: 'Varies',
    creditCheck: 'Hard credit check required',
    minCreditScore: 600,
    applicationTime: '~10 minutes',
    interestRates: 'Competitive rates',
    maxAmount: 'Up to $70,000',
    highlights: [
      'Higher loan amounts for extensive treatments',
      'Longer repayment terms available',
      'Fixed interest rates',
      'No prepayment penalties',
    ],
    applicationUrl: 'https://www.proceedfinance.com/',
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`financing-tabpanel-${index}`}
      aria-labelledby={`financing-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const FinancingPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [procedureCost, setProcedureCost] = useState<number | string>(5000);
  const [useCertificate, setUseCertificate] = useState(true);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const calculateMonthlyPayment = (cost: number, months: number, rate: number): number => {
    const certificateValue = useCertificate ? 500 : 0;
    const financedAmount = cost - certificateValue;
    const monthlyRate = rate / 100 / 12;
    if (rate === 0) {
      return financedAmount / months;
    }
    const payment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return payment;
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
            Financing Your Dental Implants
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Flexible payment options to make your new smile affordable.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component={RouterLink}
              to="/courses"
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<WorkspacePremiumIcon />}
            >
              Earn a $500 Certificate
            </Button>
            <Button
              href="https://patient.withcherry.com/"
              target="_blank"
              rel="noopener"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<CreditScoreIcon />}
            >
              Apply with Cherry Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Financing Options & Calculator Tabs */}
        <Paper sx={{ mb: 6 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Financing Options" />
            <Tab label="Payment Calculator" />
            <Tab label="How It Works" />
          </Tabs>

          {/* Financing Options Tab */}
          <TabPanel value={tabValue} index={0}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <Alert 
                icon={<StarsIcon fontSize="inherit" />} 
                severity="info" 
                sx={{ mb: 4, bgcolor: 'secondary.light', color: 'text.primary' }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  Apply your $500 Certificate toward any financing option!
                </Typography>
              </Alert>

              {/* Featured Financing Option */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  <VerifiedIcon sx={{ mr: 1, color: 'secondary.main' }} />
                  Recommended Financing
                </Typography>
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 3, 
                    border: '2px solid', 
                    borderColor: 'secondary.main',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 20, 
                      right: -30, 
                      transform: 'rotate(45deg)',
                      bgcolor: 'secondary.main',
                      color: 'white',
                      py: 0.5,
                      width: 150,
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>
                      FEATURED
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" component="h3" gutterBottom fontWeight={700} textAlign="center">
                          Cherry
                        </Typography>
                        <Typography variant="subtitle1" color="secondary.main" fontWeight={600} textAlign="center">
                          60-Second Application
                        </Typography>
                        <Button
                          href="https://patient.withcherry.com/"
                          target="_blank"
                          rel="noopener"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          sx={{ mt: 2 }}
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </Box>
                    <Box sx={{ flex: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Why Choose Cherry:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                          <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <AccessTimeIcon sx={{ color: 'secondary.main', mr: 1 }} />
                              <Typography variant="subtitle1" fontWeight={600}>
                                60-Second Application
                              </Typography>
                            </Box>
                          </Paper>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                          <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1 }} />
                              <Typography variant="subtitle1" fontWeight={600}>
                                80% Approval Rate
                              </Typography>
                            </Box>
                          </Paper>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Box>

              {/* Other Financing Options */}
              <Typography variant="h5" component="h2" gutterBottom>
                Additional Financing Options
              </Typography>
              <Box sx={{ mb: 4 }}>
                {financingOptions.filter(option => !option.featured).map((option) => (
                  <Accordion key={option.id} sx={{ mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                        <Box sx={{ flex: { xs: 1, sm: 2 } }}>
                          <Typography variant="h6">{option.name}</Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {option.interestRates} • {option.maxAmount}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button
                        href={option.applicationUrl}
                        target="_blank"
                        rel="noopener"
                        variant="contained"
                        color="primary"
                      >
                        Apply Now
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </TabPanel>

          {/* Payment Calculator Tab */}
          <TabPanel value={tabValue} index={1}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <CalculateIcon sx={{ mr: 1 }} />
                Monthly Payment Calculator
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                  <Box sx={{ flex: 1 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Calculate Your Payments
                      </Typography>
                      
                      <TextField
                        fullWidth
                        label="Estimated Procedure Cost"
                        variant="outlined"
                        value={procedureCost}
                        onChange={(e) => setProcedureCost(e.target.value === '' ? '' : Number(e.target.value))}
                        sx={{ mb: 3 }}
                        type="number"
                        inputProps={{ min: 0 }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AttachMoneyIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      
                      <Box sx={{ 
                        p: 2, 
                        mb: 3, 
                        border: '1px solid', 
                        borderColor: 'divider',
                        borderRadius: 1,
                        bgcolor: 'background.default',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }} onClick={() => setUseCertificate(!useCertificate)}>
                        <Box sx={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: '50%', 
                          border: '2px solid',
                          borderColor: useCertificate ? 'secondary.main' : 'divider',
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: useCertificate ? 'secondary.main' : 'transparent'
                        }}>
                          {useCertificate && <CheckCircleIcon sx={{ color: 'white', fontSize: '1rem' }} />}
                        </Box>
                        <Box>
                          <Typography variant="body1" fontWeight={500}>
                            Apply $500 Certificate
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        p: 2, 
                        mb: 3, 
                        borderRadius: 1,
                        bgcolor: 'secondary.light',
                      }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Amount to Finance:
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'secondary.main' }}>
                          ${typeof procedureCost === 'number' ? (procedureCost - (useCertificate ? 500 : 0)).toLocaleString() : '0'}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                  
                  <Box sx={{ flex: 1 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Estimated Monthly Payments
                      </Typography>
                      
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Provider</TableCell>
                              <TableCell align="right">12 Months</TableCell>
                              <TableCell align="right">24 Months</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell component="th" scope="row">
                                Cherry
                              </TableCell>
                              <TableCell align="right">
                                ${typeof procedureCost === 'number' ? calculateMonthlyPayment(procedureCost, 12, 9.99).toFixed(2) : '0.00'}
                              </TableCell>
                              <TableCell align="right">
                                ${typeof procedureCost === 'number' ? calculateMonthlyPayment(procedureCost, 24, 12.99).toFixed(2) : '0.00'}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell component="th" scope="row">
                                CareCredit
                              </TableCell>
                              <TableCell align="right">
                                ${typeof procedureCost === 'number' ? calculateMonthlyPayment(procedureCost, 12, 0).toFixed(2) : '0.00'}*
                              </TableCell>
                              <TableCell align="right">
                                ${typeof procedureCost === 'number' ? calculateMonthlyPayment(procedureCost, 24, 17.99).toFixed(2) : '0.00'}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                        * CareCredit offers 0% APR for qualified applicants on 12-month financing plans.
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          {/* How It Works Tab */}
          <TabPanel value={tabValue} index={2}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h5" component="h2" gutterBottom>
                The Financing Process
              </Typography>
              
              <Stack spacing={4} sx={{ mb: 6 }}>
                <Paper elevation={1} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: { xs: 40, sm: 60 },
                      height: { xs: 40, sm: 60 },
                      borderRadius: '50%',
                      fontWeight: 700,
                      fontSize: { xs: 20, sm: 24 },
                      flexShrink: 0
                    }}>
                      1
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Complete a Course & Earn Your Certificate
                      </Typography>
                      <Typography variant="body1">
                        Take one of our comprehensive dental implant courses to earn a $500 certificate.
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/courses"
                        variant="outlined"
                        color="primary"
                        sx={{ mt: 2 }}
                      >
                        Browse Courses
                      </Button>
                    </Box>
                  </Box>
                </Paper>
                
                <Paper elevation={1} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: { xs: 40, sm: 60 },
                      height: { xs: 40, sm: 60 },
                      borderRadius: '50%',
                      fontWeight: 700,
                      fontSize: { xs: 20, sm: 24 },
                      flexShrink: 0
                    }}>
                      2
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Choose a Financing Provider & Apply
                      </Typography>
                      <Typography variant="body1">
                        Select a financing provider based on your needs and credit situation.
                      </Typography>
                      <Button
                        onClick={() => setTabValue(0)}
                        variant="outlined"
                        color="primary"
                        sx={{ mt: 2 }}
                      >
                        Compare Options
                      </Button>
                    </Box>
                  </Box>
                </Paper>
                
                <Paper elevation={1} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: { xs: 40, sm: 60 },
                      height: { xs: 40, sm: 60 },
                      borderRadius: '50%',
                      fontWeight: 700,
                      fontSize: { xs: 20, sm: 24 },
                      flexShrink: 0
                    }}>
                      3
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Get Approved & Schedule Your Procedure
                      </Typography>
                      <Typography variant="body1">
                        Most applications receive instant decisions. Once approved, schedule your procedure with your preferred specialist.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Stack>
            </Box>
          </TabPanel>
        </Paper>
      </Container>
    </Box>
  );
};

export default FinancingPage;
