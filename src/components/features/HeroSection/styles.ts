import { SxProps } from "@mui/material";
const styles: Record<string, SxProps> = {
  container: {
    width: "100%",
    backgroundImage: `url("/assets/heroSectionBg.png")`,
    backgroundSize: "cover",
    paddingBottom:"30px"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    padding: "20px 5% 0px 5%",
    alignItems: "center",
  },
  titleRight: {
    display: {xs:"none",md:"flex"},
    fontSize: "14px",
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Work Sans",
    gap: "10px",
  },
  titleName: {
    fontSize: "40px",
    fontWeight: "300",
    color: "#fff",
  },
  divider: {
    borderTop: "1px solid #fff",
    width: "90%",
    margin: "0 auto",
    position: "relative",
  },
  star: {
    position: "absolute",
    marginLeft: "40%",
    marginTop: "-11.5px",
  },
  navbar: {
    display: {xs:"none",md:"flex"},
    padding: "1% 10%",
    width: "55%",
    justifyContent: "space-between",
  },
  menuItem: {
    fontSize: "18px",
    color: "#fff",
    fontFamily: "work sans",
    fontWeight: "600",
  },
  menuItemList: {
    fontSize: "18px",
    color: "#fff",
    fontFamily: "work sans",
    fontWeight: "400",
    padding: "0px 20px 0px 0px",
    textDecoration: "underline",
  },
  subMenu: {
    border: "1px solid #fff",
  },
  childList: {
    fontSize: "14px",
    fontWeight: "300",
    fontFamily: "work sans",
    color: "#fff",
    lineHeight: "28px",
  },
  tagContainer: {
    fontSize: "135px",
    fontFamily: "syne",
    fontWeight: "800",
    lineHeight: "80%",
    paddingBottom:"60px",
  },
  tagLine: {
    marginLeft: "10%",
    color: "#fff",
    position:"relative",
    zIndex:"25"
  },
  tagBottomLine: {
    marginLeft: "15%",
    color: "#fff",
    position:"relative",
    zIndex:"25"
  },
  tagOutLine: {
    marginLeft: "25%",
    color: "transparent",
    WebkitTextStroke: "#fff",
    WebkitTextStrokeWidth: "1px",
    position:"relative",
    zIndex:"25"
  },
  dividerStar: {
    borderTop: "1px solid #fff",
    width: "70%",
    position: "relative",
    zIndex:"25"
  },
  starBottom: {
    position: "absolute",
    marginLeft: "100%",
    marginTop: "-11.5px",
  },
  seeMore:{
    fontSize:"18px",
    fontFamily:"work sans",
    color:"#fff",
    marginLeft:"10%",
    padding:"0px 5px",
    marginTop:"30px",
    width:"fit-content",
    border:"1px solid #fff"
  },
  orangeContainer:{
    position:"relative",
    width:"100%"
  },
  orange:{
    position:"absolute",
    zIndex:"10",
    height:"354px",
    width:"199px",
    opacity:"0.2",
    backgroundColor:"#f07e15",
    right:"0",
    minWidth:"993px",
    bottom:"-100px",
  },
  orangeBg:{
    position:"absolute",
    zIndex:"1",
    height:"354px",
    width:"199px",
    backgroundColor:"#f07e15",
    right:"0",
    minWidth:"993px",
    bottom:"-100px",
  },
  boy:{
    position:"absolute",
    display:{xs:"none",md:"block"},
    zIndex:"5",
    right:"0",
    bottom:"-145px",
  },
  smBoy:{
    position:"absolute",
    display:{xs:"block",md:"none"},
    zIndex:"5",
    right:"0",
    bottom:"-145px",
  },
};

export default styles;
