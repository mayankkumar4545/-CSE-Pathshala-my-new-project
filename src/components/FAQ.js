import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faqs.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll in any course by clicking the 'Enroll Now' button on the course page. After that, you'll be directed to make the payment, and once confirmed, you'll get immediate access to the course materials.",
    },
    {
      question: "What is included in the course fee?",
      answer:
        "The course fee includes recorded video lectures, live doubt clearing sessions, project work, study materials, and lifetime access to the course content. You'll also get a certificate upon completion.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide placement assistance to students who complete our courses. This includes resume building, interview preparation, and connecting you with our industry partners.",
    },
    {
      question: "Can I access the course content after completion?",
      answer:
        "Yes, you get lifetime access to all course materials, including video lectures, assignments, and projects. You can revisit the content anytime to refresh your knowledge.",
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with the course content within the first 30 days, you can request a full refund.",
    },
    {
      question: "How long do I have to complete the course?",
      answer:
        "While the courses are self-paced, we recommend completing them within 2-3 months to maintain consistency and get the most value. However, you have lifetime access to complete at your own pace.",
    },
  ];

  return (
    <Box className="fs-bg-clr" sx={{ py: 8, backgroundColor: "#f3ececff" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ maxWidth: 800, mx: "auto", px: 3 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "#f8f8f8" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#fff" }}>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
