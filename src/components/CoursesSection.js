import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./courseSection.css";

const CourseSection = () => {
  const StyledCourseCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-8px)",
    },
  }));

  const courseCategories = [
    {
      title: "Course Tutorials",
      description:
        "Comprehensive tutorials with materials, compilers, and MCQs",
      image: "/img/tutorials.jpg",
      path: "/courses/tutorials",
    },
    {
      title: "Non-Tech Courses",
      description: "On-demand and recorded courses for non-technical subjects",
      image: "/img/non-technical-skills.jpg",
      path: "/courses/non-tech",
    },
    {
      title: "Tech Courses",
      description:
        "Live courses, self-paced courses, and on-demand training for all technical subjects",
      image: "/img/tech-courses.jpg",
      path: "/courses/tech",
    },
  ];

  return (
    <>
      {" "}
      <div className="course-section-bg-clr">
        <Container sx={{ py: 8 }}>
          <Typography
            variant="h2"
            className="course-section-heading"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Course Categories
          </Typography>

          <Grid container spacing={4}>
            {courseCategories.map((category, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                key={category.title}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <StyledCourseCard className="course-section-card">
                    <CardMedia
                      component="img"
                      height="200"
                      image={category.image}
                      alt={category.title}
                    />
                    <CardContent>
                      <Typography variant="h5" className="course-section-title">
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="course-section-description"
                        paragraph
                      >
                        {category.description}
                      </Typography>
                      <Button
                        variant="contained"
                        className="course-section-button"
                        component={Link}
                        to={category.path}
                      >
                        View Courses
                      </Button>
                    </CardContent>
                  </StyledCourseCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>{" "}
    </>
  );
};

export default CourseSection;
