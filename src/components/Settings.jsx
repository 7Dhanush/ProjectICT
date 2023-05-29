import React from 'react';
import { Typography, Container, FormGroup, FormControlLabel, Switch, Button,
    Accordion,
    AccordionSummary,
    AccordionDetails, } from '@mui/material';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
   
    
const Settings = () => {
  // Sample state values
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleSaveSettings = () => {
    // Save settings logic
    console.log('Settings saved!');
  };
  

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
          label="Dark Mode"
        />
        <FormControlLabel
          control={<Switch checked={notifications} onChange={handleNotificationsChange} />}
          label="Notifications"
        />
      </FormGroup>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the help section. You can provide instructions and guidance to the users here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the about section. You can provide information about your e-library website or any other details here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Link to={'/v'}>
     <Button variant="contained">
      Home
     </Button>
      </Link>
      <br />
      <Button variant="contained" onClick={handleSaveSettings}>
        Save Settings
      </Button>
     
    </Container>
  );
};

export default Settings;