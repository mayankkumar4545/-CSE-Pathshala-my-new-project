import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Divider,
  Rating,
  Tab,
  Tabs,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CheckCircle as CheckCircleIcon,
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  WorkspacePremium as CertificateIcon,
  LinkedIn as LinkedInIcon,
  Business as BusinessIcon,
  ThumbUp as ThumbUpIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const HeaderSection = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(8, 0),
  position: "relative",
  minHeight: "400px",
  display: "flex",
  alignItems: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  height: "fit-content",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "& .MuiTab-root": {
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    minWidth: 100,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "white",
  "& .MuiChip-icon": {
    color: "white",
  },
}));

const StyledRatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

const courseData = {
  "Tech Courses": {
    title: "Tech Courses",
    subtitle:
      "Live courses, self-paced courses, and on-demand training for all technical subjects",
    rating: 4.8,
    studentsCount: "2,500",
    duration: "3-6 months",
    effort: "10-15 hours/week",
    level: "Beginner to Advanced",
    language: "English",
    price: "₹2100",
    description:
      "Master technical subjects through our comprehensive tech courses. Choose from live sessions, self-paced learning, or on-demand training to fit your schedule.",
    learningOutcomes: [
      "Master fundamental programming concepts",
      "Build real-world projects",
      "Learn industry-standard tools and practices",
      "Get personalized mentorship",
    ],
    skills: [
      "Programming",
      "Web Development",
      "Data Structures",
      "Algorithms",
      "System Design",
    ],
    instructors: [
      {
        name: "Dr. Rajesh Kumar",
        title: "Senior Technical Instructor",
        experience: "15+ years in software development and teaching",
      },
    ],
    reviews: [
      {
        name: "Rahul S.",
        rating: 5,
        date: "2 months ago",
        comment:
          "Excellent course! The live sessions were particularly helpful, and the instructors were very knowledgeable. The hands-on projects really helped reinforce the concepts.",
        helpful: 45,
      },
      {
        name: "Priya M.",
        rating: 4,
        date: "3 months ago",
        comment:
          "Great course structure and content. The self-paced learning option worked perfectly for my schedule. Would recommend for beginners.",
        helpful: 32,
      },
      {
        name: "Arun K.",
        rating: 5,
        date: "1 month ago",
        comment:
          "The course material is comprehensive and well-structured. The practical assignments and real-world projects were invaluable for learning.",
        helpful: 28,
      },
    ],
  },
  "Non-Tech Courses": {
    title: "Non-Tech Courses",
    subtitle: "On-demand and recorded courses for non-technical subjects",
    rating: 4.7,
    studentsCount: "1,800",
    duration: "2-4 months",
    effort: "8-10 hours/week",
    level: "All Levels",
    language: "English",
    price: "₹24,999",
    description:
      "Enhance your non-technical skills with our comprehensive courses. Perfect for developing soft skills, business acumen, and professional growth.",
    learningOutcomes: [
      "Develop essential soft skills",
      "Improve communication abilities",
      "Learn project management",
      "Master business fundamentals",
    ],
    skills: [
      "Communication",
      "Leadership",
      "Project Management",
      "Business Analysis",
      "Public Speaking",
    ],
    instructors: [
      {
        name: "Priya Sharma",
        title: "Lead Professional Development Trainer",
        experience:
          "12+ years in corporate training and leadership development",
      },
    ],
    reviews: [
      {
        name: "Sneha R.",
        rating: 5,
        date: "1 month ago",
        comment:
          "The course exceeded my expectations. The communication skills modules were particularly useful for my professional development.",
        helpful: 38,
      },
      {
        name: "Vikram P.",
        rating: 4,
        date: "2 months ago",
        comment:
          "Well-structured content with practical examples. The project management section was especially helpful.",
        helpful: 25,
      },
    ],
  },
  "Course Tutorials": {
    title: "Course Tutorials",
    subtitle: "Comprehensive tutorials with materials, compilers, and MCQs",
    rating: 4.6,
    studentsCount: "3,200",
    duration: "Self-paced",
    effort: "5-8 hours/week",
    level: "Beginner",
    language: "English",
    price: "₹19,999",
    description:
      "Access comprehensive tutorials with interactive materials, integrated compilers, and practice MCQs. Learn at your own pace with instant feedback.",
    learningOutcomes: [
      "Practice with interactive exercises",
      "Get instant feedback",
      "Access comprehensive study materials",
      "Track your progress",
    ],
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Technical Writing",
      "Code Review",
      "Testing",
    ],
    instructors: [
      {
        name: "Amit Patel",
        title: "Lead Tutorial Developer",
        experience: "10+ years in educational content development",
      },
    ],
    reviews: [
      {
        name: "Ankit G.",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "The interactive tutorials and MCQs were excellent for learning. The instant feedback system helped me track my progress effectively.",
        helpful: 42,
      },
      {
        name: "Meera S.",
        rating: 4,
        date: "1 month ago",
        comment:
          "Great learning experience. The integrated compiler made practicing code very convenient.",
        helpful: 31,
      },
    ],
  },
};

const CourseDetail = () => {
  const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName);
  const course = courseData[decodedCourseName];
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <HeaderSection>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="overline" sx={{ opacity: 0.9 }}>
                  SPECIALIZATION
                </Typography>
                <Typography variant="h3" gutterBottom fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
                  {course.subtitle}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Rating value={course.rating} precision={0.1} readOnly />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    {course.rating}
                  </Typography>
                  <Typography variant="body2" sx={{ ml: 1, opacity: 0.9 }}>
                    ({course.studentsCount} reviews)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <StyledChip
                    icon={<PeopleIcon />}
                    label={`${course.studentsCount} already enrolled`}
                  />
                  <StyledChip
                    icon={<AccessTimeIcon />}
                    label={course.duration}
                  />
                  <StyledChip
                    icon={<CalendarTodayIcon />}
                    label={course.effort}
                  />
                  <StyledChip icon={<SchoolIcon />} label={course.level} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    fontWeight="bold"
                  >
                    {course.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ mb: 2 }}
                  >
                    Buy Now
                  </Button>
                  <Typography variant="body2" align="center" sx={{ mb: 3 }}>
                    Start instantly and learn at your own schedule
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </HeaderSection>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <StyledTabs value={tabValue} onChange={handleTabChange}>
                <Tab label="About" />
                <Tab label="What You'll Learn" />
                <Tab label="Instructors" />
                <Tab label="Reviews" />
              </StyledTabs>
            </Box>

            {tabValue === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  About this Specialization
                </Typography>
                <Typography variant="body1" paragraph>
                  {course.description}
                </Typography>

                <Box sx={{ my: 4 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Applied Learning Project
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Throughout this specialization, you'll complete hands-on
                    projects that combine theory with practical application.
                    You'll build a portfolio of work that demonstrates your
                    skills and knowledge to potential employers.
                  </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Skills you'll gain
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {course.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      sx={{ margin: 0.5 }}
                    />
                  ))}
                </Box>
              </motion.div>
            )}

            {tabValue === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <List>
                  {course.learningOutcomes.map((outcome, index) => (
                    <ListItem key={index} sx={{ py: 2 }}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={outcome} />
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            )}

            {tabValue === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {course.instructors.map((instructor, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={3}>
                        <img
                          src="https://via.placeholder.com/150"
                          alt={instructor.name}
                          style={{ width: "100%", borderRadius: "8px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <Typography variant="h6" fontWeight="bold">
                          {instructor.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          gutterBottom
                        >
                          {instructor.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {instructor.experience}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </motion.div>
            )}

            {tabValue === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Student Feedback
                  </Typography>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: "center", mb: 3 }}>
                        <Typography
                          variant="h2"
                          color="primary"
                          fontWeight="bold"
                        >
                          {course.rating}
                        </Typography>
                        <Rating
                          value={course.rating}
                          precision={0.1}
                          readOnly
                          size="large"
                        />
                        <Typography variant="body2" color="text.secondary">
                          Course Rating • {course.studentsCount} reviews
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      {course.reviews.map((review, index) => (
                        <ReviewCard key={index} variant="outlined">
                          <StyledRatingBox>
                            <Rating
                              value={review.rating}
                              readOnly
                              size="small"
                            />
                            <Typography variant="subtitle2" fontWeight="bold">
                              {review.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              • {review.date}
                            </Typography>
                          </StyledRatingBox>
                          <Typography variant="body2" paragraph>
                            {review.comment}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Button size="small" startIcon={<ThumbUpIcon />}>
                              Helpful ({review.helpful})
                            </Button>
                            <Button size="small">Report</Button>
                          </Box>
                        </ReviewCard>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseDetail;
