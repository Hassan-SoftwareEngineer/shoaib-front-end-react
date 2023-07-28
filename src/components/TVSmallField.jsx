import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const MDInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.gray,
  width: "100%",
  "& .MuiInputBase-input": {
    borderRadius: "4px",
    background: theme.palette.white.main,
    fontFamily: theme.fonts.primary,
    color:theme.palette.black.main,
    border:"1px solid #FE4080",
    letterSpacing: "1px",
    backgroundColor:"#F8F7F7",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
    height:"30px",
    fontSize: "11px",
    fontWeight:500,

    "&::placeholder": {
      color: "#000",
      fontWeight:600
    },
    "&:focus-within": {
      border: `1px solid #00E4FE`,
    },
    "&:focus-visible": {
      border: `1px solid #00E4FE`,
    },
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 1.3),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 1.6),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(0, 2.5),
    },
  },
}));

const TVSmallField = (props) => {
  return (
    <MDInput {...props} >
      {props.child}
    </MDInput>
  );
};



export default TVSmallField