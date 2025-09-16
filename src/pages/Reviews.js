import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Rating,
  Chip,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviews.css";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const VideoCard = styled(Card)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
  "&:hover .play-overlay": {
    opacity: 1,
  },
}));

const PlayOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.4)",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));

const testimonials = [
  {
    id: 1,
    name: "MEENAKSHI SHARMA",
    course: "Full Stack Development",
    rating: 5,
    review:
      "Hands down, one of the best courses I’ve done! MERN Stack always seemed intimidating with all the moving parts – MongoDB, Express, React, Node. But the way CSE Pathshala broke it down made learning full-stack development much easier.The instructor’s teaching style was super friendly and practical. Also, I got guidance on how to deploy my apps on Render and Netlify which was a bonus for me.",
    image: "/review/Meenakashi-sharma.png",
  },
  {
    id: 2,
    name: "ABHISHEK JAMWAL",
    course: "Data Structures & Algorithms",
    rating: 5,
    review:
      "Loved the practical part of this course! From creating login pages to building small forms and dashboards, everything was taught step by step. As an engineering student, this helped me with my mini-projects and internal assessments. The explanation of OOP concepts with GUI applications was the best part. Totally worth it.",
    image: "/review/Abhishek.png",
  },
  {
    id: 3,
    name: "PAVVY GREWAL",
    course: "C/C++",
    rating: 4.5,
    review:
      "I joined the C++ course to strengthen my basics and prepare for college placements, and it definitely served the purpose. Topics like OOPs, STL, pointers, and memory management were covered in great detail. The course was beginner-friendly and also included some advanced-level problem-solving, which was perfect for me. The practice sets at the end of each module made a big difference.",
    image: "/review/pavvy.png",
  },
  {
    id: 4,
    name: "AMIT CHAUDHARY",
    course: "Java with GUI",
    rating: 4.5,
    review:
      "Loved the practical part of this course! From creating login pages to building small forms and dashboards, everything was taught step by step. As an engineering student, this helped me with my mini-projects and internal assessments. The explanation of OOP concepts with GUI applications was the best part. Totally worth it.",
    image: "/review/Amit.png",
  },
  {
    id: 5,
    name: "RAKSHIT THAKUR",
    course: "DSA",
    rating: 4.5,
    review:
      "CSE Pathshala truly lives up to its name. The course structure was excellent—everything from supervised to unsupervised learning was explained so well. The best part was the doubt support and the mentor sessions. I felt like I had personal guidance throughout. This is the kind of platform students really need in India.",
    image: "/review/Rakshit.png",
  },
  {
    id: 5,
    name: "DIVYA MEHTA",
    course: "Data Science",
    rating: 4.5,
    review:
      "I joined CSE Pathshala on a friend’s recommendation and I’m glad I did. Their C++ course not only improved my programming but also boosted my confidence for technical interviews. They’re really doing a great job for CSE students like us.",
    image: "/review/Divya.png",
  },
];

{
  /*const videoReviews = [
  {
    id: 1,
    title: "My Journey with CSE Pathshala",
    thumbnail: "/video-thumb1.jpg",
    duration: "5:30",
    views: "2.5K",
  },
  {
    id: 2,
    title: "How I Landed My Dream Job",
    thumbnail: "/video-thumb2.jpg",
    duration: "8:45",
    views: "3.8K",
  },
  {
    id: 3,
    title: "Learning Experience Review",
    thumbnail: "/video-thumb3.jpg",
    duration: "6:15",
    views: "1.9K",
  },
];*/
}

const Reviews = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

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
    <>
      <div className="reviews-bg-clr">
        <Container sx={{ py: 8 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                sx={{ mb: 6 }}
              >
                Student Reviews & Testimonials
              </Typography>
            </motion.div>

            <Box sx={{ mb: 8 }}>
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <Box key={testimonial.id} sx={{ px: 2 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <StyledCard className="stat-bg-clr">
                        <CardContent sx={{ textAlign: "center" }}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <Avatar
                              src={testimonial.image}
                              alt={testimonial.name}
                              sx={{
                                width: 120,
                                height: 120,
                                mx: "auto",
                                mb: 2,
                              }}
                            />
                          </motion.div>
                          <Typography variant="h5" gutterBottom>
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                          >
                            {testimonial.designation}
                          </Typography>
                          <Rating
                            value={testimonial.rating}
                            precision={0.5}
                            readOnly
                            sx={{ mb: 2 }}
                          />
                          <Typography variant="body1" paragraph>
                            "{testimonial.review}"
                          </Typography>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <Chip
                              className="review-chip-label"
                              label={testimonial.course}
                              color="primary"
                            />
                          </motion.div>
                        </CardContent>
                      </StyledCard>
                    </motion.div>
                  </Box>
                ))}
              </Slider>
            </Box>

            {/*<motion.div variants={itemVariants}>
          <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
            Video Reviews
          </Typography>
        </motion.div>*/}

            {/*<Grid container spacing={4}>
          {videoReviews.map((video, index) => (
            <Grid xs={12} md={4} key={video.id}>
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VideoCard>
                  <CardMedia
                    component="img"
                    height="240"
                    image={video.thumbnail}
                    alt={video.title}
                  />
                  <PlayOverlay className="play-overlay">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: "50%", minWidth: 64, height: 64 }}
                      >
                        ▶
                      </Button>
                    </motion.div>
                  </PlayOverlay>
                  <CardContent>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {video.title}
                      </Typography>
                    </motion.div>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {video.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {video.views} views
                      </Typography>
                    </Box>
                  </CardContent>
                </VideoCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>*/}
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Reviews;
