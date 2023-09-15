import React from "react";
import Form from "../../common/Form";
import { Box } from "@mui/material";
import styles from "./styles";

const ContactUs = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.formContainer}>
      <Box sx={styles.news}>
        <Box sx={styles.newsHeading}>NewsLetter</Box>
        <Box sx={styles.newsContent}>
          Get news about articles and updates in your inbox
        </Box>
      </Box>
      <Box sx={styles.form}>
      <Form />
      </Box>
      </Box>
      <Box sx={styles.getInTouch}>GET</Box>
      <Box sx={styles.getInTouch}>IN TOUCH</Box>
    </Box>
  );
};

export default ContactUs;
