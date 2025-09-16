import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Tabs,
  Tab,
  Rating,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CheckCircle as CheckCircleIcon,
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
  Language as LanguageIcon,
  School as SchoolIcon,
  LinkedIn as LinkedInIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import PaymentPage from "./PaymentPage";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "1000px",
    width: "100%",
    margin: theme.spacing(2),
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(3),
  "& .MuiTab-root": {
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    minWidth: 100,
  },
}));

const CourseEnrollDialog = ({ open, onClose, course }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  if (!course) return null;

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleBuyClick = () => {
    setShowPayment(true);
  };

  if (showPayment) {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogContent>
          <PaymentPage course={course} onClose={() => setShowPayment(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  const renderAboutTab = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Typography variant="h6" gutterBottom sx={{ margin: 3 }}>
        Course Overview
      </Typography>
      <Typography variant="body1" sx={{ margin: 3 }} paragraph>
        {course.description}
      </Typography>

      <Box sx={{ mt: 4, margin: 3 }}>
        <Typography variant="h6" gutterBottom>
          Skills you'll gain
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", margin: 1 }}>
          {course.skills?.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{ margin: 0.5 }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 4, margin: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements
        </Typography>
        <List>
          {course.requirements?.map((requirement, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={requirement} />
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );

  const renderLearningTab = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <List>
        {course.learningOutcomes?.map((outcome, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={outcome} />
          </ListItem>
        ))}
      </List>
    </motion.div>
  );

  const renderInstructorsTab = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={course.instructor?.image}
            />
            <Box>
              <Typography variant="h6">{course.instructor?.name}</Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {course.instructor?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {course.instructor?.experience}. {course.instructor?.bio}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );

  const renderReviewsTab = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" color="primary" fontWeight="bold">
                {course.rating}
              </Typography>
              <Rating
                value={course.rating}
                precision={0.1}
                readOnly
                size="large"
              />
              <Typography variant="body2" color="text.secondary">
                Course Rating
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            {course.reviews?.map((review, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar sx={{ mr: 2 }}>{review.name.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant="subtitle2">{review.name}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography variant="caption" color="text.secondary">
                        {new Date(review.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  "{review.comment}"
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );

  const renderSyllabusTab = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box sx={{ mb: 4 }}>
        {course.syllabus?.map((module, index) => (
          <Box
            key={index}
            sx={{
              mb: 3,
              p: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              {module.week}
            </Typography>
            <List dense>
              {module.content.map((item, itemIndex) => (
                <ListItem
                  key={itemIndex}
                  sx={{
                    pl: item.startsWith("-") ? 4 : 2,
                    py: 0.5,
                  }}
                >
                  <ListItemText
                    primary={item.startsWith("-") ? item.substring(2) : item}
                    primaryTypographyProps={{
                      variant: item.startsWith("-") ? "body2" : "subtitle1",
                      fontWeight: item.startsWith("-") ? "normal" : "bold",
                      color: item.startsWith("-")
                        ? "text.secondary"
                        : "text.primary",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </motion.div>
  );

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      scroll="paper"
      maxWidth="lg"
      fullWidth
    >
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            {course.title}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            <Chip
              icon={<SchoolIcon />}
              label={course.level}
              variant="outlined"
              color="primary"
            />
            <Chip
              icon={<AccessTimeIcon />}
              label={`${course.duration?.live || "N/A"}`}
              variant="outlined"
            />
            <Chip
              icon={<LanguageIcon />}
              label={course.language}
              variant="outlined"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Rating value={course.rating} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary">
              ({course.rating})
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Right Section - Payment Box on top */}
          <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }} sx={{ margin: 3 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1,
                position: { md: "sticky" },
                top: { md: 24 },
              }}
            >
              <Typography variant="h5" gutterBottom>
                ₹{course.price}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {(course.duration?.live || course.duration?.recorded) && (
                    <>
                      {course.duration.live && (
                        <Typography variant="body2">
                          <AccessTimeIcon
                            fontSize="small"
                            sx={{ mr: 1, verticalAlign: "middle" }}
                          />
                          Live class: {course.duration.live}
                        </Typography>
                      )}
                      {course.duration.recorded && (
                        <Typography variant="body2">
                          <AccessTimeIcon
                            fontSize="small"
                            sx={{ mr: 1, verticalAlign: "middle" }}
                          />
                          Recorded Lecture: {course.duration.recorded}
                        </Typography>
                      )}
                    </>
                  )}
                  <Typography variant="body2">
                    <CalendarTodayIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle" }}
                    />
                    Class start: {course.class || "N/A"}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={handleBuyClick}
              >
                Buy Now
              </Button>
            </Box>
          </Grid>

          {/* Left Section - Tabs and Content */}
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            <StyledTabs value={currentTab} onChange={handleTabChange}>
              <Tab label="About" />
              <Tab label="What You'll Get" />
              <Tab label="Syllabus" />
              <Tab label="Instructors" />
              <Tab label="Reviews" />
            </StyledTabs>

            <Box sx={{ mt: 3 }}>
              {currentTab === 0 && renderAboutTab()}
              {currentTab === 1 && renderLearningTab()}
              {currentTab === 2 && renderSyllabusTab()}
              {currentTab === 3 && renderInstructorsTab()}
              {currentTab === 4 && renderReviewsTab()}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </StyledDialog>
  );
};

export default CourseEnrollDialog;
