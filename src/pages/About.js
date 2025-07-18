import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  School,
  LiveTv,
  Code,
  Group,
  Timeline,
  WorkspacePremium,
} from "@mui/icons-material";
import "./about.css";

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  textAlign: "center",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const features = [
  {
    icon: <LiveTv sx={{ fontSize: 48 }} />,
    title: "Live Interactive Sessions",
    description: "Engage in real-time with instructors and fellow learners.",
  },
  {
    icon: <Code sx={{ fontSize: 48 }} />,
    title: "Hands-on Practice",
    description: "Extensive coding exercises and real-world projects.",
  },
  {
    icon: <Group sx={{ fontSize: 48 }} />,
    title: "Community Support",
    description: "Join a vibrant community of learners and mentors.",
  },
  {
    icon: <Timeline sx={{ fontSize: 48 }} />,
    title: "Flexible Learning",
    description: "Choose between live, self-paced, and recorded courses.",
  },
  {
    icon: <WorkspacePremium sx={{ fontSize: 48 }} />,
    title: "Industry Recognition",
    description: "Get certified and boost your career prospects.",
  },
  {
    icon: <School sx={{ fontSize: 48 }} />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of teaching experience.",
  },
];

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom>
                  Why Choose CSE Pathshala?
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Your Gateway to Excellence in Computer Science Education
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mr: 2 }}
                >
                  Start Learning
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              {/*} <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/img/pathshala.png"
                  alt="About CSE Pathshala"
                  style={{ width: "100%", maxWidth: 500 }}
                />
              </motion.div>*/}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <div className="about-bg-clr">
        <Container sx={{ py: 8 }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
            component={motion.h3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Makes Us Different
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard>
                    <div className="mission-icon-clr">
                      <Box sx={{ color: "primary.main", mb: 2 }}>
                        {feature.icon}
                      </Box>
                    </div>
                    <div className="mission-heading-clr">
                      <Typography variant="h5" gutterBottom>
                        {feature.title}
                      </Typography>
                    </div>
                    <div className="mission-des-clr">
                      <Typography variant="body1">
                        {feature.description}
                      </Typography>
                    </div>
                  </FeatureCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Mission Section */}
      <div>
        <Box
          sx={{ bgcolor: "background.paper", py: 8 }}
          className="mission-bg-clr-first"
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h3" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" paragraph>
                    At CSE Pathshala, we are committed to providing high-quality
                    computer science education that is accessible, engaging, and
                    industry-relevant. Our mission is to empower students with
                    the knowledge and skills they need to succeed in their
                    careers.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We believe in:
                  </Typography>
                  <Typography component="ul" sx={{ pl: 2 }}>
                    <li>Practical, hands-on learning experiences</li>
                    <li>Personalized attention and mentorship</li>
                    <li>Industry-aligned curriculum</li>
                    <li>Building a supportive learning community</li>
                    <li>Continuous innovation in teaching methods</li>
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="/mission.svg"
                    alt="Our Mission"
                    style={{ width: "100%", maxWidth: 500 }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </Box>
  );
};

export default About;
