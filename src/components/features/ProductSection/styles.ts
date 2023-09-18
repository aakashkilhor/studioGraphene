import { SxProps } from "@mui/material";

const styles : Record<string, SxProps>={
    container:{
        display:"flex",
        flexDirection:{xs:"column",sm:"row"},
        flexWrap:"wrap",
        margin:"2% 0% 2% 5%",
        alignItems:"center",
        gap:"40px"
    },
    heading:{
        fontSize:{xs:"70px",sm:"90px"},
        fontWeight:"600",
        fontFamily:"syne",
        width:{xs:"100%",sm:"70%"},
    },
    divider: {
        borderTop: "1px solid #000",
        width: "70%",
        position: "relative",
      },
      star: {
        position: "absolute",
        marginLeft: "0%",
        marginTop: "-11.5px",
      },
      arrows:{
        width:"25%",
        display:"flex",
        padding:{xs:"40px",md:"0px"},
        gap:"10px",
        order:{xs:"4",md:"0"}
      },
      categoryContainer:{
        display:"flex",
        alignSelf:"flex-start",
        flexDirection:{xs:"row",sm:"column"},
        gap:"10px",
        width:"18%",
      },
      item:{
        fontSize:{xs:"14px",sm:"18px"},
        fontFamily:"work sans"
      },
      itemActive:{
        fontSize:{xs:"18px",sm:"26px"},
        fontFamily:"syne"
      },
      cardContainer:{
        display:"flex",
        width:{xs:"95%",md:"78%"},
        gap:"20px",
        overflowX:"scroll"
    },
      card:{
        width:"310px",
      },
      cardImage:{
        height:"322px",
        width:"310px",
      },
      cardTitle:{
        fontSize:"20px",
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        padding:"5px 20px",
      },
      cardDescription:{
        height:"68px",
        overflow:"hidden",
        textOverflow:"ellipsis"
      },
}

export default styles;