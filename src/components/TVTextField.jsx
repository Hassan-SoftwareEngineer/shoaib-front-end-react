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
    border:"1px solid transparent",
    letterSpacing: "1px",
    width: "100%",
    height:"100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",

    "&::placeholder": {
      color: theme.palette.gray.main,
    },
    "&:focus-within": {
      border: `2px solid #00E4FE`,
    },
    "&:focus-visible": {
      border: `2px solid #00E4FE`,
    },
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(0, 1),
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 1.3),
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 1.6),
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(0, 2.5),
    },
  },
}));

const TVTextField = (props) => {
  return (
    <MDInput {...props} >
      {props.child}
    </MDInput>
  );
};

export default TVTextField;
