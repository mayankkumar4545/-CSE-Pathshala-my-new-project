import React from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Button,
  Tab,
  Tabs,
  Rating,
  Stack,
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  School as SchoolIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import "./home.css";

const CourseDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: "1 1 600px" }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "#37474f" }}
          >
            Data Structures and Algorithm using Python
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Chip
              icon={<SchoolIcon />}
              label="Intermediate"
              variant="outlined"
              sx={{ borderRadius: "16px" }}
            />
            <Chip
              icon={<AccessTimeIcon />}
              label="15 hours"
              variant="outlined"
              sx={{ borderRadius: "16px" }}
            />
            <Chip
              icon={<LanguageIcon />}
              label="English"
              variant="outlined"
              sx={{ borderRadius: "16px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
            <Rating value={4.8} precision={0.1} readOnly />
            <Typography variant="body1" color="text.secondary">
              (4.8) • 950 students
            </Typography>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="course tabs"
            >
              <Tab label="About" />
              <Tab label="What You'll Learn" />
              <Tab label="Syllabus" />
              <Tab label="Instructors" />
              <Tab label="Reviews" />
            </Tabs>
          </Box>

          {value === 0 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Course Overview
              </Typography>
              <Typography variant="body1" paragraph>
                Learn and implement essential data structures using Python
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Skills you'll gain
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
                <Chip label="Python" />
                <Chip label="Data Structures" />
                <Chip label="Algorithms" />
                <Chip label="Problem Solving" />
                <Chip label="Code Optimization" />
              </Box>

              <Typography variant="h5" gutterBottom>
                Requirements
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    ✓
                  </Box>
                  <Typography>Basic Python knowledge</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    ✓
                  </Box>
                  <Typography>Understanding of programming concepts</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    ✓
                  </Box>
                  <Typography>Computer with Python installed</Typography>
                </Box>
              </Stack>
            </Box>
          )}
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: "0 1 400px",
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            alignSelf: "flex-start",
            position: "sticky",
            top: 24,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "medium" }}>
              ₹2100
            </Typography>
            <Box
              sx={{
                border: "2px solid #e91e63",
                borderRadius: 1,
                p: 1,
                color: "#e91e63",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "1.2rem",
                letterSpacing: "0.5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: 1,
              }}
            >
              Move
              <Box component="span" sx={{ fontSize: "2rem", mt: 0.5 }}>
                ↑
              </Box>
              here
            </Box>
          </Box>

          <Typography variant="h6" gutterBottom>
            Course Duration:
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AccessTimeIcon />
              <Typography>Recorded: 15 hours</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AccessTimeIcon />
              <Typography>Project: 15 hours</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SchoolIcon />
              <Typography>Live Support: up to 15 hours</Typography>
            </Box>
          </Stack>

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              mb: 2,
              bgcolor: "#37474f",
              "&:hover": {
                bgcolor: "#263238",
              },
            }}
          >
            Buy Now
          </Button>

          <Typography variant="body2" color="text.secondary" align="center">
            30-Day Money-Back Guarantee
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CourseDetails;
