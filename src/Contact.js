import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" py={10}>
      <Box>
        {/* Contact Me Section */}
        <Box py={10}>
          <Typography variant="h4" textAlign="center" mb={5}>
            Contact Me
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
