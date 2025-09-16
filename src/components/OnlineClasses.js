import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import "./onlineClasses.css";

const OnlineClasses = () => {
  const features = [
    {
      title: "Guest Expert Sessions",
      description:
        "Be inspired by prominent guest speakers, renowned for their wealth of academic and industry experience, enriching every course",
      icon: "bi-person-video",
      bgcolor: "#e8f5f1",
      iconBg: "#d5eee8",
    },
    {
      title: "Live Sessions:",
      description:
        "Engage in 100% live sessions with our expert trainers, where real-time interaction and personalized guidance ensure an immersive learning experience. Elevate your skills through dynamic discussions, Q/A sessions, and hands-on exercises, fostering collaboration and enriching educational journey",
      icon: "bi-broadcast-pin",
      bgcolor: "#ffe4ec",
      iconBg: "#ffd4e4",
    },
    {
      title: "Projects",
      description:
        "Apply your knowledge on real-life projects, and evaluations will be based on your project's performance and impact.",
      icon: "bi-kanban",
      bgcolor: "#e8eaf6",
      iconBg: "#d8dbf5",
    },
    {
      title: "Scholarship and Rewards",
      description:
        "Reward your dedication with a 50% scholarship for future courses and cash rewards for the top 3% of students, fostering motivation and achievement.",
      icon: "bi-award",
      bgcolor: "#fff3e0",
      iconBg: "#ffe4c4",
    },
  ];

  return (
    <Box className="online-section">
      <Container maxWidth="lg">
        <Typography className="online-subtitle">OUR ECOSYSTEM</Typography>

        <Typography className="online-title">
          Online <span>Classes</span> For Remote Learning.
        </Typography>

        <Typography className="online-description">
          Experienced and Certified Trainers: Gain valuable insights from
          certified trainers with extensive experience who understand both
          academic and industry requirements.
        </Typography>

        <Box className="feature-wrapper">
          <Grid container spacing={3} className="feature-grid">
            {features.map((feature, index) => (
              <Grid item key={index}>
                <Card
                  className="feature-card"
                  style={{ backgroundColor: feature.bgcolor }}
                >
                  <CardContent className="card-content">
                    <Box
                      className="icon-wrapper"
                      style={{ backgroundColor: feature.iconBg }}
                    >
                      <i className={`bi ${feature.icon}`}></i>
                    </Box>

                    <Box>
                      <Typography className="feature-title">
                        {feature.title}
                      </Typography>
                      <Typography className="feature-description">
                        {feature.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OnlineClasses;
