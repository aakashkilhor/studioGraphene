import { SxProps } from "@mui/material";
const styles: Record<string, SxProps> = {
  container: {
    width: "100%",
    display:"flex",
    flexDirection:"column",
    alignContent:{xs:"center",sm:"flex-start"},
    minHeight:"520px",
    backgroundImage:`url("/assets/contactBg.png")`,
  },
  formContainer:{
    display:"flex",
    flexDirection:{xs:"column",sm:"row"},
    width:"100%",
    paddingTop:"60px",
  },
  news:{
    width:{xs:"94%",sm:"40%"},
    margin:{xs:"0px 20px",sm:"0px 0px 0px 100px"},
    textAlign:{xs:"center",sm:"left"}
  },
  newsHeading:{
    fontSize:"26px",
    fontFamily:"syne",
    color:"rgba(255, 255, 255, 0.50)"
  },
  form:{
    width:{xs:"90%",sm:"40%"},
  },
  newsContent:{
    fontSize:"18px",
    fontFamily:"Work Sans",
    color:"rgba(255, 255, 255, 0.50)",
    maxWidth:"337px"
  },
  getInTouch:{
    fontSize:{xs:"55px",md:"135px"},
    fontFamily:"syne",
    color:"#fff",
    fontWeight:"800",
    lineHeight:{xs:"50px",md:"110px"},
    marginLeft:{xs:"10px",md:"90px"}
  },
};

export default styles;
