import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  School as SchoolIcon,
  Payment as PaymentIcon,
} from "@mui/icons-material";

const PaymentPage = ({ course, onClose }) => {
  // Generate a unique payment ID based on course
  const getPaymentId = (courseTitle) => {
    const timestamp = Date.now().toString().slice(-6);
    return `${courseTitle.slice(0, 3).toLowerCase()}${timestamp}`;
  };

  const paymentId = getPaymentId(course?.title || "");

  // Get course-specific QR code
  const getQRCodeImage = (courseTitle) => {
    const qrCodes = {
      "Data visualization using power BI": "/qr/cse-qr-img.png",
      "Essential of cyber security": "/qr/cse-qr-img.png",
      "Fundamental of computer network": "/qr/cse-qr-img.png",
      "Computer Architecture and Designs": "/qr/cse-qr-img.png",
      "Advanced Python for ML & AI": "/qr/cse-qr-img.png",
      "Data Structures and Algorithm using Python": "/qr/cse-qr-img.png",
      "Advanced Java Programming with GUI": "/qr/cse-qr-img.png",
      "C++ Programming: OOPs and DSA": "/qr/cse-qr-img.png",
      "Full Stack Web Development: Angular and Next.js": "/qr/cse-qr-img.png",
      "Data Science With Excel, Tableau & R Programming": "/qr/cse-qr-img.png",
      "C Programming Language": "/qr/cse-qr-img.png",
    };
    return qrCodes[courseTitle] || "/qr-codes/default.png";
  };

  // Get course-specific UPI ID
  const getUPIId = (courseTitle) => {
    const upiIds = {
      "Advanced Python for ML & AI": "pythonml@csepathshala",
      "Data Structures and Algorithm using Python": "pythondsa@csepathshala",
      "Advanced Java Programming with GUI": "javagui@csepathshala",
      "C++ Programming: OOPs and DSA": "cppdsa@csepathshala",
      "Full Stack Web Development: Angular and Next.js":
        "angularjs@csepathshala",
      "Data Science With Excel, Tableau & R Programming":
        "datascience@csepathshala",
      "C Programming Language": "clang@csepathshala",
    };
    return upiIds[courseTitle] || "default@csepathshala";
  };

  const handleCopyUPI = () => {
    const upiId = getUPIId(course?.title);
    navigator.clipboard.writeText(upiId);
    // You could add a toast notification here to show "UPI ID copied!"
  };

  // Get course-specific Google Form link
  const getGoogleFormLink = (courseTitle) => {
    const formLinks = {
      "Data visualization using power BI": "/",
      "Essential of cyber security":
        "https://docs.google.com/forms/d/e/1FAIpQLSe9qICMUXjPvHY28l8r8ZijPvvW_YwrNEAakj7Z1n47lVb5vg/viewform?usp=sharing&ouid=116362153301398627615",
      "Fundamental of computer network":
        "https://docs.google.com/forms/d/e/1FAIpQLSexB8uINVTgy9C5H3rRjov20Ny2iO7KPPkgKkvwOSAaZbowtg/viewform?usp=sharing&ouid=116362153301398627615",
      "Computer Architecture and Designs":
        "https://docs.google.com/forms/d/e/1FAIpQLSf1-ROf0CYP7RK4c_aAblL2Q8Pz6SyHS0D9b72bsmgLAEGNiA/viewform?usp=sharing&ouid=116362153301398627615",
      "Advanced Python for ML & AI": "https://forms.gle/vebfKUmiiSbFsV328",
      "Data Structures and Algorithm using Python":
        "https://docs.google.com/forms/d/e/1FAIpQLSeciLM-_wZyq3NBgTuorRpHHj-UMhWf5rJEGmH7KzFYYVO8QA/viewform?usp=sharing",
      "Advanced Java Programming with GUI":
        "https://docs.google.com/forms/d/e/1FAIpQLSctw-79vQ2T1LGCHGB326v9FUOBTTlDbTgnmyyY8ELBoqhc2Q/viewform?usp=sharing",
      "C++ Programming: OOPs and DSA":
        "https://docs.google.com/forms/d/e/1FAIpQLSezDv1AfGL7tV7opQOI1qw68HmCFG775D082p_BhoJLgQgPEQ/viewform?usp=sharing",
      "Full Stack Web Development: Angular and Next.js":
        "https://docs.google.com/forms/d/e/1FAIpQLSdUMwDHSd3zmosdpmhEmXEGtoOm30fWPaTgEeiSZOd4KW7z3w/viewform?usp=sharing",
      "Data Science With Excel, Tableau & R Programming":
        "https://docs.google.com/forms/d/e/1FAIpQLSenoeSnDZNXnJba2RiIWepKWorg-ALoaJMvElDOTpIqXIS-Og/viewform?usp=sharing",
      "C Programming Language":
        "https://docs.google.com/forms/d/e/1FAIpQLSeAh-CY9xoxXntPMP0TigNK4Vv9Nvio1TCJqNMjbqn4BNmzKw/viewform?usp=sharing",
    };
    return formLinks[courseTitle] || "https://forms.gle/Ld3UPuYRvxgbhT9Y7"; // default form
  };

  const handleFormSubmit = () => {
    const formLink = getGoogleFormLink(course?.title);
    window.open(formLink, "_blank");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 1, backgroundColor: "#fff", borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4">Payment Details</Typography>
          <Button variant="outlined" onClick={onClose}>
            Back
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 4 }}>
          {/* Left side - QR Code */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <img
              src={getQRCodeImage(course?.title)}
              alt="Payment QR Code"
              style={{
                width: "200px",
                height: "200px",
                marginBottom: "24px",
              }}
            />

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1,
                mb: 2,
                p: 2,
                bgcolor: "#f8f9fa",
                borderRadius: 1,
                lineHeight: 1.8,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  mb: 1,
                  color: "#1976d2",
                }}
              >
                Payment Instructions
              </Box>

              <Box
                component="ol"
                sx={{
                  pl: 2,
                  mb: 1,
                  "& li": {
                    mb: 0.5,
                  },
                }}
              >
                <li>Scan the QR code and complete your payment</li>
                <li>
                  Save the payment confirmation screenshot for your records
                </li>
                <li>Click the "Submit Your Details" button below</li>
                <li>
                  Complete the registration form with accurate information
                </li>
              </Box>
            </Typography>
          </Box>
          {/* Right side - Course Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Course Details
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Course Name" secondary={course?.title} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Duration"
                  secondary={course?.duration?.live || "15 hours"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Amount"
                  secondary={`₹${course?.price || 2199}`}
                />
              </ListItem>
            </List>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 3,
                mb: 2,
                p: 2,
                bgcolor: "#f8f9fa",
                borderRadius: 1,
                lineHeight: 1.8,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontWeight: "bold",
                  mb: 0.5,
                  color: "#1976d2",
                }}
              >
                After successful payment and form submission, you will receive:
              </Box>

              <Box
                component="ul"
                sx={{
                  pl: 3,
                  mb: 1,
                  "& li": {
                    mb: 0.5,
                    listStyleType: "disc",
                  },
                }}
              >
                <li>Course registration confirmation</li>
                <li>WhatsApp channel access link</li>
              </Box>
            </Typography>

            <Button
              variant="contained"
              fullWidth
              onClick={handleFormSubmit}
              sx={{
                mt: 1,
                py: 2,
                backgroundColor: "#37474f",
                "&:hover": {
                  backgroundColor: "#263238",
                },
              }}
            >
              Submit Your Details
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentPage;
