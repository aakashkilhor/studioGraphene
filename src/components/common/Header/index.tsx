import { Box } from "@mui/material";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.navbar}>
      <Box sx={styles.left}>
        <Box component="img" src="/assets/delivery.svg" />
        <Box sx={styles.text}>Free Delivery</Box>
        <Box sx={styles.separator}>|</Box>
        <Box sx={styles.text}>Return Policy</Box>
      </Box>
      <Box sx={styles.right}>
        <Box sx={styles.text}>Login</Box>
        <Box sx={styles.follow}>Follow US</Box>
        <Box sx={styles.text} component="img" src="/assets/fb.svg" />
        <Box sx={styles.text} component="img" src="/assets/li.svg" />
        <Box sx={styles.text} component="img" src="/assets/x.svg" />
        <Box sx={styles.text} component="img" src="/assets/in.svg" />
      </Box>
    </Box>
  );
};

export default Header;
