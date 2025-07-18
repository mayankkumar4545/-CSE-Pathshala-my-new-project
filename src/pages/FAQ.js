import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import "./faq.css";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: theme.spacing(2, 0),
  },
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateX(8px)",
    boxShadow: theme.shadows[4],
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(2),
  },
}));

const faqSections = [
  {
    title: "General Questions",
    items: [
      {
        question: "Why should students choose CSE Pathshala?",
        answer:
          "CSE Pathshala offers a comprehensive learning experience with expert instructors, flexible learning options, and industry-relevant curriculum. Our platform combines live sessions, self-paced courses, and interactive tutorials to ensure effective learning outcomes.",
      },
      {
        question: "How are we different from others?",
        answer:
          "We differentiate ourselves through our unique blend of teaching methodologies, personalized learning paths, and extensive practice materials. Our platform offers both technical and non-technical courses, making us a one-stop solution for all your learning needs.",
      },
    ],
  },
  {
    title: "Course Related",
    items: [
      {
        question: "What types of courses do you offer?",
        answer:
          "We offer a wide range of courses including:\n- Live courses (Fixed schedule and On-demand)\n- Self-paced courses\n- Summer training programs\n- Short duration courses\n- Non-technical courses\n- Programming tutorials and practice materials",
      },
      {
        question: "How do the live courses work?",
        answer:
          "Live courses are conducted through our interactive online platform. You can choose between fixed schedule courses with predetermined timings or on-demand courses where you can schedule sessions according to your convenience.",
      },
    ],
  },
  {
    title: "Technical Support",
    items: [
      {
        question: "What technical requirements do I need?",
        answer:
          "You need:\n- A stable internet connection\n- A computer or laptop\n- Modern web browser (Chrome, Firefox, or Safari)\n- Basic software required for your chosen course",
      },
      {
        question: "How can I access course materials?",
        answer:
          "All course materials are available through our online learning platform. Once enrolled, you'll have access to video lectures, practice problems, assignments, and additional resources specific to your course.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredFAQs = faqSections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

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
      {" "}
      <div className="faq-bg-clr">
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
                Frequently Asked Questions
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchField
                fullWidth
                variant="outlined"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>

            {filteredFAQs.map((section, sectionIndex) => (
              <Box key={section.title} sx={{ mb: 4 }}>
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                    {section.title}
                  </Typography>
                </motion.div>

                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.question}
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: (sectionIndex + itemIndex) * 0.1,
                    }}
                  >
                    <StyledAccordion
                      expanded={
                        expanded === `panel${sectionIndex}-${itemIndex}`
                      }
                      onChange={handleChange(
                        `panel${sectionIndex}-${itemIndex}`
                      )}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${sectionIndex}-${itemIndex}-content`}
                        id={`panel${sectionIndex}-${itemIndex}-header`}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <Typography variant="h6">{item.question}</Typography>
                        </motion.div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              whiteSpace: "pre-line",
                              color: "text.secondary",
                            }}
                          >
                            {item.answer}
                          </Typography>
                        </motion.div>
                      </AccordionDetails>
                    </StyledAccordion>
                  </motion.div>
                ))}
              </Box>
            ))}
          </motion.div>
        </Container>
      </div>{" "}
    </>
  );
};

export default FAQ;
