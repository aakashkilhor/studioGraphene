import { SxProps } from "@mui/material";

const styles : Record<string, SxProps>={
    container:{
        display:"flex",
        flexWrap:"wrap",
        margin:"2% 0% 2% 5%",
        alignItems:"center",
        gap:"40px"
    },
    heading:{
        fontSize:"90px",
        fontWeight:"600",
        fontFamily:"syne",
        width:"70%"
    },
    divider: {
        borderTop: "1px solid #000",
        width: "50%",
        position: "relative",
      },
      star: {
        position: "absolute",
        marginLeft: "0%",
        marginTop: "-11.5px",
      },
      arrows:{
        width:"25%"
      },
      categoryContainer:{
        display:"flex",
        alignSelf:"flex-start",
        flexDirection:{xs:"row",sm:"column"},
        gap:"10px",
      },
      item:{
        fontSize:"18px",
        fontFamily:"work sans"
      },
      itemActive:{
        fontSize:"26px",
        fontFamily:"syne"
      },
      cardContainer:{
        display:"flex",
        width:"84%",
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