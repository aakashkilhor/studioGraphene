import { SxProps } from "@mui/material";
const styles: Record<string, SxProps> = {
  navbar: {
    width: "100%",
    height: "auto",
    padding: "12px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1A1A1A",
  },
  left: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
    marginLeft: { xs: "10px", md: "80px" },
  },
  right: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
    marginRight: { xs: "10px", md: "80px" },
  },
  text: {
    fontSize: "12px",
    color: "#626262",
    fontFamily: "poppins",
    fontWeight: "400",
    cursor:"pointer"
  },
  separator: {
    fontSize: "18px",
    color: "#626262",
    fontFamily: "poppins",
    fontWeight: "400",
    cursor:"pointer"
  },
  follow: {
    display: { xs: "none", sm: "block" },
    fontSize: "12px",
    color: "#626262",
    fontFamily: "poppins",
    fontWeight: "400",
    cursor:"pointer"
  },
};

export default styles;
