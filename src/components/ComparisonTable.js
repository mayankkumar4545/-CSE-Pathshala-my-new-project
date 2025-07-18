import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";
import "./comparisonTable.css";

const features = [
  { name: "Affordability", csePathshala: true, recorded: true, live: false },
  {
    name: "Learning Flexibility",
    csePathshala: true,
    recorded: true,
    live: false,
  },
  {
    name: "Instant Doubt Solving",
    csePathshala: true,
    recorded: false,
    live: true,
  },
  {
    name: "Personal Mentorship",
    csePathshala: true,
    recorded: false,
    live: false,
  },
  {
    name: "Dedicated Projects",
    csePathshala: true,
    recorded: false,
    live: true,
  },
];

const ComparisonTable = () => {
  return (
    <div className="comp-bg-table">
      <Container maxWidth="lg" className="comparison-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography className="comparison-title">
            How are we different from others?
          </Typography>

          <Box sx={{ overflowX: "auto" }}>
            <TableContainer
              component={Paper}
              className="comparison-table"
              elevation={2}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="comparison-head-cell comparison-feature-column">
                      Features
                    </TableCell>
                    <TableCell align="center" className="comparison-head-cell">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        CSE Pathshala
                      </Box>
                    </TableCell>
                    <TableCell align="center" className="comparison-head-cell">
                      Other Recorded Class Platform
                    </TableCell>
                    <TableCell align="center" className="comparison-head-cell">
                      Other Live Class Platform
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow key={feature.name} className="comparison-row">
                      <TableCell className="comparison-cell">
                        {feature.name}
                      </TableCell>
                      <TableCell align="center" className="comparison-cell">
                        {feature.csePathshala ? (
                          <CheckCircleIcon className="comparison-icon check" />
                        ) : (
                          <CancelIcon className="comparison-icon cancel" />
                        )}
                      </TableCell>
                      <TableCell align="center" className="comparison-cell">
                        {feature.recorded ? (
                          <CheckCircleIcon className="comparison-icon check" />
                        ) : (
                          <CancelIcon className="comparison-icon cancel" />
                        )}
                      </TableCell>
                      <TableCell align="center" className="comparison-cell">
                        {feature.live ? (
                          <CheckCircleIcon className="comparison-icon check" />
                        ) : (
                          <CancelIcon className="comparison-icon cancel" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default ComparisonTable;
