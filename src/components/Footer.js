import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(6, 0),
  marginTop: "auto",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.secondary.light,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const socialIcons = [
  { Icon: Facebook, name: "facebook" },
  { Icon: Twitter, name: "twitter" },
  { Icon: Instagram, name: "instagram" },
  { Icon: LinkedIn, name: "linkedin" },
  { Icon: YouTube, name: "youtube" },
];

const Footer = () => {
  const sections = [
    {
      title: "Courses",
      items: [
        { text: "Tech Courses", link: "/courses/tech" },
        { text: "Non-Tech Courses", link: "/courses/non-tech" },
        { text: "Tutorials", link: "/courses/tutorials" },
        { text: "Live Sessions", link: "/courses/live" },
      ],
    },
    {
      title: "Resources",
      items: [
        { text: "Student Reviews", link: "/reviews" },
        { text: "Testimonials", link: "/testimonials" },
        { text: "FAQ", link: "/faq" },
        { text: "Blog", link: "/blog" },
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About Us", link: "/about" },
        { text: "Contact", link: "/contact" },
        { text: "Careers", link: "/careers" },
        { text: "Privacy Policy", link: "/privacy" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" gutterBottom>
                  CSE Pathshala
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Your journey to mastering Computer Science starts here. Join
                  our community of learners and excel in your career.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {socialIcons.map(({ Icon, name }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <SocialButton aria-label={name}>
                        <Icon />
                      </SocialButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {sections.map((section, index) => (
              <Grid xs={12} sm={6} md={2} key={section.title}>
                <motion.div variants={itemVariants}>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                  <List dense>
                    {section.items.map((item) => (
                      <ListItem key={item.text} disablePadding>
                        <ListItemText>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <FooterLink to={item.link}>{item.text}</FooterLink>
                          </motion.div>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </motion.div>
              </Grid>
            ))}

            <Grid xs={12} sm={6} md={2}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" paragraph>
                  Email: support@csepathshala.com
                </Typography>
                <Typography variant="body2" paragraph>
                  Calling Number: 7889100907
                </Typography>
                <Typography variant="body2" paragraph>
                  WhatsApp number: +91 7889153352
                </Typography>
                <Typography variant="body2">
                  Address: Cs1/16 sector 25 jvsas market noida 201301
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
          <Divider
            sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          />
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", pt: 2 }}>
              <Typography variant="body2">
                © {new Date().getFullYear()} CSE Pathshala. All rights reserved.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
