import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Rating,
  Stack,
  Paper,
  Tab,
  Tabs,
  SelectChangeEvent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';

interface Specialist {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  practiceName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website?: string;
  bio: string;
  photoUrl: string;
  rating: number;
  reviewCount: number;
  acceptsCertificate: boolean;
  verified: boolean;
  specializations: string[];
}

const SpecialistsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocationFilter(event.target.value);
  };

  const handleSpecialtyChange = (event: SelectChangeEvent) => {
    setSpecialtyFilter(event.target.value);
  };

  // Filter specialists based on search term, location, specialty, and tab
  const filteredSpecialists = specialists.filter((specialist) => {
    const matchesSearch = searchTerm === '' || 
                         specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specialist.practiceName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter === '' || specialist.state === locationFilter;
    
    const matchesSpecialty = specialtyFilter === '' || 
                            specialist.specializations.includes(specialtyFilter);
    
    const matchesTab = tabValue === 0 || 
                      (tabValue === 1 && specialist.verified) ||
                      (tabValue === 2 && specialist.acceptsCertificate);
    
    return matchesSearch && matchesLocation && matchesSpecialty && matchesTab;
  });

  // Get unique states for the location filter
  const states = Array.from(new Set(specialists.map(specialist => specialist.state))).sort();
  
  // Get unique specializations for the specialty filter
  const specializations = Array.from(new Set(specialists.flatMap(specialist => specialist.specializations))).sort();

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
            Find Dental Implant Specialists
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Connect with verified specialists who can provide expert implant care.
            Many accept our $500 certificate upon course completion.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Search and Filters */}
        <Paper sx={{ p: 3, mb: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by name or practice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                  labelId="location-select-label"
                  id="location-select"
                  value={locationFilter}
                  label="Location"
                  onChange={handleLocationChange}
                >
                  <MenuItem value="">All Locations</MenuItem>
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>{state}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="specialty-select-label">Specialty</InputLabel>
                <Select
                  labelId="specialty-select-label"
                  id="specialty-select"
                  value={specialtyFilter}
                  label="Specialty"
                  onChange={handleSpecialtyChange}
                >
                  <MenuItem value="">All Specialties</MenuItem>
                  {specializations.map((specialization) => (
                    <MenuItem key={specialization} value={specialization}>{specialization}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          
          <Box sx={{ mt: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All Specialists" />
              <Tab label="Verified Specialists" />
              <Tab label="Accept Certificate" />
            </Tabs>
          </Box>
        </Paper>
        
        {/* Results Count */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2">
            {filteredSpecialists.length} {filteredSpecialists.length === 1 ? 'Specialist' : 'Specialists'} Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tabValue === 1 ? 'Showing verified specialists only. ' : ''}
            {tabValue === 2 ? 'Showing specialists who accept our $500 certificate. ' : ''}
          </Typography>
        </Box>
        
        {/* Specialists Listings */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {filteredSpecialists.length > 0 ? (
            filteredSpecialists.map((specialist) => (
              <Card key={specialist.id} sx={{ overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                  <Box sx={{ width: { xs: '100%', md: 200 }, height: { xs: 200, md: 'auto' } }}>
                    <CardMedia
                      component="img"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      image={specialist.photoUrl}
                      alt={specialist.name}
                    />
                  </Box>
                  
                  <CardContent sx={{ flex: '1 1 auto', p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1 }}>
                      <Box>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {specialist.name}{' '}
                          {specialist.verified && (
                            <VerifiedIcon sx={{ color: 'primary.main', ml: 1, verticalAlign: 'middle' }} />
                          )}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                          {specialist.credentials}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 1, md: 0 } }}>
                        <Rating
                          value={specialist.rating}
                          precision={0.5}
                          readOnly
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          ({specialist.reviewCount} reviews)
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        {specialist.practiceName}
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        {specialist.address}, {specialist.city}, {specialist.state} {specialist.zipCode}
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        {specialist.phone}
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EmailIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        {specialist.email}
                      </Typography>
                      {specialist.website && (
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                          <LanguageIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                          <a href={specialist.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                            {specialist.website.replace(/(^\w+:|^)\/\//, '')}
                          </a>
                        </Typography>
                      )}
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body1" paragraph>
                        {specialist.bio.length > 150 
                          ? `${specialist.bio.substring(0, 150)}...` 
                          : specialist.bio}
                      </Typography>
                    </Box>
                    
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {specialist.specializations.map((spec) => (
                        <Chip key={spec} label={spec} size="small" />
                      ))}
                    </Stack>
                    
                    {specialist.acceptsCertificate && (
                      <Box
                        sx={{
                          display: 'inline-block',
                          p: 1,
                          bgcolor: 'secondary.light',
                          borderRadius: 1,
                          color: 'secondary.dark',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Accepts $500 New Smile Guide Certificate
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </Box>
                
                <Divider />
                
                <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                  <Button variant="outlined" sx={{ mr: 1 }}>
                    View Profile
                  </Button>
                  <Button variant="contained">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                No specialists match your search criteria
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your filters or search term to find more results.
              </Typography>
            </Paper>
          )}
        </Box>
      </Container>
    </Box>
  );
};

// Sample specialist data
const specialists: Specialist[] = [
  {
    id: '1',
    name: 'Dr. Robert Chen',
    credentials: 'DDS, FICOI',
    specialty: 'Implant Dentistry',
    practiceName: 'Advanced Dental Implant Center',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phone: '(212) 555-1234',
    email: 'dr.chen@adentalimp.com',
    website: 'https://advanceddentalimplantcenter.com',
    bio: 'Dr. Chen has over 15 years of experience in implant dentistry and has placed over 5,000 implants. He is a Fellow of the International Congress of Oral Implantologists and regularly teaches implant techniques to other dentists.',
    photoUrl: '/path/to/dr-chen.jpg',
    rating: 4.9,
    reviewCount: 145,
    acceptsCertificate: true,
    verified: true,
    specializations: ['Single Tooth Implants', 'Full Mouth Reconstruction', 'Immediate Load Implants']
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    credentials: 'DMD, MS',
    specialty: 'Periodontics and Implant Surgery',
    practiceName: 'City Periodontal Associates',
    address: '456 Park Avenue',
    city: 'Boston',
    state: 'MA',
    zipCode: '02108',
    phone: '(617) 555-6789',
    email: 'dr.johnson@cityperioimplant.com',
    website: 'https://cityperioimplant.com',
    bio: 'Dr. Johnson is a board-certified periodontist specializing in implant placement and gum treatments. She completed her periodontal residency at Harvard School of Dental Medicine and has a special interest in minimally invasive techniques.',
    photoUrl: '/path/to/dr-johnson.jpg',
    rating: 4.8,
    reviewCount: 98,
    acceptsCertificate: true,
    verified: true,
    specializations: ['Periodontal Surgery', 'Bone Grafting', 'Computer-Guided Implants']
  },
  {
    id: '3',
    name: 'Dr. Michael Rodriguez',
    credentials: 'DDS',
    specialty: 'General Dentistry and Implants',
    practiceName: 'Smile Design Dental',
    address: '789 Beach Blvd',
    city: 'Miami',
    state: 'FL',
    zipCode: '33139',
    phone: '(305) 555-4321',
    email: 'dr.rodriguez@smiledesign.com',
    bio: 'Dr. Rodriguez focuses on comprehensive dental care including implant restorations. He has completed extensive continuing education in implant dentistry and offers a patient-centered approach to treatment planning.',
    photoUrl: '/path/to/dr-rodriguez.jpg',
    rating: 4.5,
    reviewCount: 72,
    acceptsCertificate: false,
    verified: true,
    specializations: ['Implant Restoration', 'Cosmetic Dentistry', 'General Dentistry']
  },
  {
    id: '4',
    name: 'Dr. Emily Wilson',
    credentials: 'DDS, PhD',
    specialty: 'Prosthodontics',
    practiceName: 'Wilson Prosthodontics & Implant Center',
    address: '1010 Oak Street',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60611',
    phone: '(312) 555-8765',
    email: 'dr.wilson@wilsonimplants.com',
    website: 'https://wilsonimplants.com',
    bio: 'Dr. Wilson is a prosthodontist who specializes in complex implant cases and full mouth reconstruction. Her doctoral research focused on implant biomaterials, and she lectures internationally on advances in implant dentistry.',
    photoUrl: '/path/to/dr-wilson.jpg',
    rating: 4.7,
    reviewCount: 104,
    acceptsCertificate: true,
    verified: false,
    specializations: ['All-on-4 Implants', 'Full Mouth Reconstruction', 'Implant-Supported Dentures']
  },
  {
    id: '5',
    name: 'Dr. James Thompson',
    credentials: 'DMD, DABOI/ID',
    specialty: 'Oral & Maxillofacial Surgery',
    practiceName: 'Pacific Oral Surgery',
    address: '555 Harbor Drive',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    phone: '(206) 555-9876',
    email: 'dr.thompson@pacificoralsurgery.com',
    website: 'https://pacificoralsurgery.com',
    bio: 'Dr. Thompson is a Diplomate of the American Board of Oral Implantology/Implant Dentistry. He specializes in advanced bone grafting procedures and complex implant cases, with particular expertise in zygomatic implants.',
    photoUrl: '/path/to/dr-thompson.jpg',
    rating: 4.9,
    reviewCount: 132,
    acceptsCertificate: true,
    verified: true,
    specializations: ['Zygomatic Implants', 'Bone Grafting', 'Complex Implant Cases']
  },
  {
    id: '6',
    name: 'Dr. Lisa Kim',
    credentials: 'DDS',
    specialty: 'General Dentistry',
    practiceName: 'Golden Gate Dental Care',
    address: '222 Marina Blvd',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94123',
    phone: '(415) 555-2345',
    email: 'dr.kim@goldengatedental.com',
    bio: 'Dr. Kim provides comprehensive dental care with a focus on implant restorations and cosmetic dentistry. She takes a holistic approach to patient care and emphasizes education and prevention.',
    photoUrl: '/path/to/dr-kim.jpg',
    rating: 4.6,
    reviewCount: 89,
    acceptsCertificate: false,
    verified: false,
    specializations: ['Implant Restoration', 'Cosmetic Dentistry', 'General Dentistry']
  }
];

export default SpecialistsPage;
