import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import ComparisonTable from "../components/ComparisonTable";
import FAQ from "../components/FAQ";
import Reviews from "../pages/Reviews";
import OnlineClasses from "../components/OnlineClasses";
import "./home.css";
import CourseSection from "../components/CoursesSection";

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: "#fff",
  padding: theme.spacing(15, 0, 10),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/hero-pattern.svg")',
    opacity: 0.1,
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleEnrollClick = (course) => {
    navigate(`/course/${encodeURIComponent(course.title)}`);
  };

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            p={3}
            alignItems="center"
            sx={{ position: "relative" }}
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom>
                  Welcome to CSE Pathshala
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Your journey to mastering Computer Science starts here
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontSize: {
                      xs: "1rem",
                      sm: "1rem",
                      md: "1.3rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box component="div">
                      Unlocking the Future of Technology through
                    </Box>
                    <Box
                      sx={{
                        display: "inline-flex",
                        position: "relative",
                        minWidth: {
                          xs: "150px",
                          sm: "180px",
                          md: "200px",
                        },
                        height: {
                          xs: "32px",
                          sm: "40px",
                          md: "45px",
                        },
                        ml: { xs: 0, sm: 2 },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          right: "-4px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                      }}
                    >
                      <motion.div
                        style={{
                          position: "absolute",
                          color: "#ff1744",
                        }}
                      >
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{
                            width: ["0%", "100%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            times: [0, 0.4, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 4,
                          }}
                          style={{
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            fontSize: "inherit",
                          }}
                        >
                          Immersive
                        </motion.span>
                      </motion.div>

                      <motion.div
                        style={{
                          position: "absolute",
                          color: "#ff1744",
                        }}
                      >
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{
                            width: ["0%", "100%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            times: [0, 0.4, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 4,
                            delay: 2,
                          }}
                          style={{
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            fontSize: "inherit",
                          }}
                        >
                          Affordable
                        </motion.span>
                      </motion.div>

                      <motion.div
                        style={{
                          position: "absolute",
                          color: "#ff1744",
                        }}
                      >
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{
                            width: ["0%", "100%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            times: [0, 0.4, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 4,
                            delay: 4,
                          }}
                          style={{
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            fontSize: "inherit",
                          }}
                        >
                          Easy
                        </motion.span>
                      </motion.div>
                    </Box>
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1rem",
                        md: "1.3rem",
                      },
                      mt: { xs: 0, sm: 0 },
                    }}
                  >
                    learning with CSE Pathshala.
                  </Typography>
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/courses"
                  sx={{ mr: 2 }}
                  className="hero-btn-cls"
                >
                  Explore Courses
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  component={Link}
                  to="/about"
                  sx={{ borderColor: "white", color: "white" }}
                  className="hero-btn-learn"
                >
                  Learn More
                </Button>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.up("md")]: {
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  justifyContent: "flex-end",
                },
                [theme.breakpoints.down("md")]: {
                  mt: 4,
                  justifyContent: "center",
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/img/hero-illustration.png"
                  alt="Education Illustration"
                  style={{
                    width: "auto",
                    height: "400px",
                    maxWidth: "100%",
                    [theme.breakpoints.down("md")]: {
                      height: "300px",
                    },
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>
      <OnlineClasses />
      <ComparisonTable />
      <CourseSection />
      <Reviews />
      <FAQ />
    </Box>
  );
};

export default Home;
