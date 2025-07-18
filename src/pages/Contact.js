import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        paragraph
        sx={{ mb: 6 }}
      >
        Have questions? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </Typography>

      <Grid container spacing={6}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ my: 3 }}>
                <IconButton color="primary">
                  <EmailIcon />
                </IconButton>
                <Typography variant="body1">info@csepathshala.com</Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <IconButton color="primary">
                  <PhoneIcon />
                </IconButton>
                <Typography variant="body1">+91 (123) 456-7890</Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <IconButton color="primary">
                  <LocationIcon />
                </IconButton>
                <Typography variant="body1">
                  123 Education Street,
                  <br />
                  Tech Hub, Bangalore
                  <br />
                  Karnataka, India
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
