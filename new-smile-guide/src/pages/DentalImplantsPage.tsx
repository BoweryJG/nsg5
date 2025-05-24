import React from 'react';
import { Container, Typography, Box, Paper, Tabs, Tab, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DentalImplantsPage: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
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
            Understanding Dental Implants
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Comprehensive information to help you make informed decisions about your dental implant journey.
          </Typography>
          <Button
            component={RouterLink}
            to="/courses"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Take Our Free Course
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Navigation Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="What Are Dental Implants?" />
            <Tab label="The Procedure" />
            <Tab label="Benefits" />
            <Tab label="Costs & Financing" />
            <Tab label="Aftercare" />
            <Tab label="FAQs" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              What Are Dental Implants?
            </Typography>
            <Typography variant="body1" paragraph>
              Dental implants are titanium posts that are surgically placed into the jawbone beneath your gums to serve as a replacement for the root of a missing tooth. Once in place, they allow your dentist to mount replacement teeth onto them.
            </Typography>
            <Typography variant="body1" paragraph>
              A dental implant consists of three parts:
            </Typography>
            <Box component="ul" sx={{ pl: 4 }}>
              <Box component="li">
                <Typography variant="body1">
                  <strong>The implant:</strong> A titanium screw that is placed in the jawbone and acts as a tooth root
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1">
                  <strong>The abutment:</strong> A connector that supports and holds the tooth or set of teeth
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1">
                  <strong>The crown:</strong> The visible part of the tooth that is custom-made to match your natural teeth
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Dental implants are designed to look, feel, and function like your natural teeth. They provide a long-term solution for tooth replacement and are considered the gold standard in tooth replacement options.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Types of Dental Implants
            </Typography>
            <Typography variant="body1" paragraph>
              There are several types of dental implants available, each suited to different clinical situations:
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                1. Endosteal Implants
              </Typography>
              <Typography variant="body1">
                The most common type, placed directly into the jawbone. Typically made of titanium and shaped like small screws.
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                2. Subperiosteal Implants
              </Typography>
              <Typography variant="body1">
                Placed under the gum but on or above the jawbone. These are used for patients who don't have enough healthy jawbone and cannot undergo a bone augmentation procedure.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                3. Zygomatic Implants
              </Typography>
              <Typography variant="body1">
                The longest and most complex implant option, placed in the cheekbone (zygoma) rather than the jawbone. These are used when there is significant bone loss in the upper jaw.
              </Typography>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h4" component="h2" gutterBottom>
            The Dental Implant Procedure
          </Typography>
          <Typography variant="body1" paragraph>
            The dental implant procedure typically involves several steps spread out over 3-9 months, depending on your specific situation. Here's what you can expect during the process:
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              1. Initial Consultation and Planning
            </Typography>
            <Typography variant="body1">
              Your dentist will conduct a thorough examination, take X-rays, and create a treatment plan tailored to your specific needs. This may include CT scans to evaluate bone quality and quantity.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              2. Bone Grafting (if necessary)
            </Typography>
            <Typography variant="body1">
              If your jawbone is too thin or soft to support an implant, bone grafting may be required to create a solid foundation. This may add several months to the process as the graft needs time to heal.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              3. Implant Placement
            </Typography>
            <Typography variant="body1">
              The oral surgeon places the dental implant into the jawbone during a minor surgical procedure. Local anesthesia is typically used, though sedation options are available for anxious patients.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              4. Osseointegration Period
            </Typography>
            <Typography variant="body1">
              After the implant is placed, it needs time to fuse with the jawbone through a process called osseointegration. This typically takes 3-6 months and is crucial for creating a stable base for your replacement tooth.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              5. Abutment Placement
            </Typography>
            <Typography variant="body1">
              Once osseointegration is complete, the abutment (connector) is attached to the implant. This requires a minor surgical procedure to reopen the gum and expose the implant.
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" gutterBottom>
              6. Crown Placement
            </Typography>
            <Typography variant="body1">
              After your gums heal (usually within 2 weeks of abutment placement), impressions of your mouth are taken to create a custom crown. Once the crown is ready, it's attached to the abutment, completing the implant process.
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h4" component="h2" gutterBottom>
            Benefits of Dental Implants
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
            <Paper elevation={1} sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Natural Look and Feel
              </Typography>
              <Typography variant="body1">
                Dental implants are designed to look, feel, and function like your natural teeth. The crown is custom-made to match the color of your existing teeth, making it virtually indistinguishable.
              </Typography>
            </Paper>
            
            <Paper elevation={1} sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Improved Speech
              </Typography>
              <Typography variant="body1">
                Unlike removable dentures that can slip and cause you to mumble or slur your words, implants allow you to speak without worry of teeth slipping out of place.
              </Typography>
            </Paper>
            
            <Paper elevation={1} sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Enhanced Comfort
              </Typography>
              <Typography variant="body1">
                Because they become part of you, implants eliminate the discomfort of removable dentures and the need for messy adhesives to keep them in place.
              </Typography>
            </Paper>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Paper elevation={1} sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Improved Oral Health
              </Typography>
              <Typography variant="body1">
                Dental implants don't require reducing other teeth, as a tooth-supported bridge does. Because nearby teeth are not altered to support the implant, more of your own teeth are left intact, improving long-term oral health.
              </Typography>
            </Paper>
            
            <Paper elevation={1} sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Durability
              </Typography>
              <Typography variant="body1">
                Implants are very durable and can last many years. With good care, many implants last a lifetime, making them a long-term solution for tooth replacement.
              </Typography>
            </Paper>
            
            <Paper elevation={1} sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Prevents Bone Loss
              </Typography>
              <Typography variant="body1">
                Empty spaces from missing teeth can lead to additional health issues, such as the deterioration of the jawbone. Dental implants are the only tooth replacement option that actually stimulates bone growth and prevents bone loss.
              </Typography>
            </Paper>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h4" component="h2" gutterBottom>
            Costs & Financing
          </Typography>
          <Typography variant="body1" paragraph>
            Dental implants represent an investment in your long-term oral health and quality of life. While the upfront cost may be higher than other tooth replacement options, their durability and benefits often make them more cost-effective over time.
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Average Costs
            </Typography>
            <Typography variant="body1" paragraph>
              The cost of dental implants varies based on several factors, including:
            </Typography>
            <Box component="ul" sx={{ pl: 4 }}>
              <Box component="li">
                <Typography variant="body1">
                  The number of implants needed
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1">
                  Whether preparatory procedures (like bone grafts) are required
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1">
                  The type of implant and restoration used
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1">
                  Geographic location and the provider's expertise
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 2, fontWeight: 500 }}>
              Single Tooth Implant: $3,000-$6,000
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Multiple Tooth Implants: $10,000-$30,000
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Full Mouth Implants: $25,000-$50,000+
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h5" gutterBottom>
              Financing Options
            </Typography>
            <Typography variant="body1" paragraph>
              Many patients utilize one or more of these options to make dental implants more affordable:
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Dental Insurance
              </Typography>
              <Typography variant="body1">
                While coverage varies, some dental insurance plans now cover a portion of implant procedures. Check with your provider for specific details.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Flexible Spending Accounts (FSAs) or Health Savings Accounts (HSAs)
              </Typography>
              <Typography variant="body1">
                These accounts allow you to use pre-tax dollars for medical expenses, including dental implants.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Dental Office Payment Plans
              </Typography>
              <Typography variant="body1">
                Many dental offices offer in-house financing options or payment plans to help spread the cost over time.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Third-Party Financing
              </Typography>
              <Typography variant="body1">
                Companies like CareCredit offer healthcare-specific credit cards and financing options for dental procedures.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight={600} color="secondary.main">
                New Smile Guide $500 Certificate
              </Typography>
              <Typography variant="body1" paragraph>
                Complete our comprehensive dental implant course to receive a $500 certificate that can be applied toward your procedure with participating specialists.
              </Typography>
              <Button
                component={RouterLink}
                to="/courses"
                variant="contained"
                color="secondary"
                size="small"
                sx={{ mt: 1 }}
              >
                Learn More About Our Certificate Program
              </Button>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Dental Implant Aftercare
          </Typography>
          <Typography variant="body1" paragraph>
            Proper aftercare is essential for the long-term success of your dental implants. Here's what you need to know about caring for your implants immediately after surgery and in the long term.
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Immediate Post-Surgery Care (First 1-2 Weeks)
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Managing Discomfort
              </Typography>
              <Typography variant="body1">
                Some pain, swelling, and minor bleeding are normal after implant surgery. Take prescribed pain medications as directed and use cold compresses to reduce swelling.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Diet Recommendations
              </Typography>
              <Typography variant="body1">
                Stick to soft foods for the first week and avoid chewing directly on the implant site. Good options include smoothies, yogurt, mashed potatoes, and well-cooked pasta.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Oral Hygiene
              </Typography>
              <Typography variant="body1">
                Keep your mouth clean but be gentle around the surgical site. Your dentist may recommend a special antimicrobial mouthwash to help prevent infection.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                Activity Restrictions
              </Typography>
              <Typography variant="body1">
                Avoid strenuous activity for at least 48-72 hours after surgery, as it can increase bleeding and swelling. Avoid smoking and drinking alcohol during the healing process.
              </Typography>
            </Box>
          </Box>
          
          <Box>
            <Typography variant="h5" gutterBottom>
              Long-Term Implant Care
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Daily Oral Hygiene
              </Typography>
              <Typography variant="body1">
                Brush twice daily with a soft-bristled toothbrush and clean around the implant with interdental brushes or floss designed for implants. Consider using an oral irrigator for thorough cleaning.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Regular Dental Check-ups
              </Typography>
              <Typography variant="body1">
                Visit your dentist at least twice a year for professional cleanings and to check the health of your implants. Your dentist may recommend more frequent visits initially.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Avoid Harmful Habits
              </Typography>
              <Typography variant="body1">
                Don't use your teeth as tools (to open packages, for example), and avoid chewing very hard items like ice or hard candy, which can damage the crown. If you grind your teeth, consider getting a night guard.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                Address Problems Promptly
              </Typography>
              <Typography variant="body1">
                Contact your dentist immediately if you notice any of the following: pain or discomfort around the implant, swelling or redness in the gums, loosening of the implant or crown, or difficulty chewing.
              </Typography>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            Frequently Asked Questions
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Are dental implants painful?
            </Typography>
            <Typography variant="body1">
              Most patients report that the discomfort during and after the procedure is less than they expected. Local anesthesia is used during the surgery, so you shouldn't feel pain during the procedure. Post-surgery, some discomfort, swelling, and minor bleeding are normal, but these can typically be managed with over-the-counter or prescribed pain medications.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              How long do dental implants last?
            </Typography>
            <Typography variant="body1">
              With proper care and maintenance, dental implants can last a lifetime. The crown attached to the implant may need replacement after 10-15 years due to normal wear and tear, but the implant itself can remain in place indefinitely if kept healthy.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Am I a good candidate for dental implants?
            </Typography>
            <Typography variant="body1">
              Most people with good general and oral health are candidates for implants. You need adequate bone in your jaw to support the implant, and healthy gums free of periodontal disease. Some medical conditions and habits like smoking can affect the success of implants. A thorough evaluation by a dental professional is necessary to determine if implants are right for you.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              How long does the entire implant process take?
            </Typography>
            <Typography variant="body1">
              The entire process typically takes 3-9 months from the initial consultation to the final placement of the crown. This timeline can vary based on individual healing times, whether bone grafting is needed, and other factors specific to your case.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              What's the success rate of dental implants?
            </Typography>
            <Typography variant="body1">
              Dental implants have a success rate of approximately 95-98%. Success rates can vary based on where in the jaw the implants are placed, the patient's overall health, and adherence to aftercare instructions.
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" gutterBottom>
              Can I get an implant years after tooth extraction?
            </Typography>
            <Typography variant="body1">
              Yes, you can get a dental implant even years after tooth extraction. However, bone loss occurs naturally in areas where teeth are missing, which may necessitate a bone graft before an implant can be placed. Your dentist will evaluate your specific situation to determine the best approach.
            </Typography>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
};

// TabPanel component for tab content
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
      id={`implant-tabpanel-${index}`}
      aria-labelledby={`implant-tab-${index}`}
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

export default DentalImplantsPage;
