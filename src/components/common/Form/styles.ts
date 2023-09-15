import { SxProps } from "@mui/material";
const styles: Record<string, SxProps> = {
  container:{
    position:"relative",
    margin:{xs:"0% 5%",sm:"none"}
  },
  input: {
    margin:"10px 0px",
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(255, 255, 255, 0.50)"
    },
  },
  submit:{
    position:"absolute",
    width:{xs:"100px",sm:"180px"},
    aspectRatio:"1",
    right:{xs:"-35px",md:"-160px"},
    bottom:{xs:"-115px",md:"-180px"},
    color:"orange",
    fontSize:{xs:"14px",md:"26px"},
    fontFamily:"Work Sans",
    border:{xs:"1px solid #f07e15",md:"2px solid #f07e15"},
    borderRadius:"50%"
  },
};

export default styles;
