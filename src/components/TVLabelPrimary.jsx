import React from "react";
import { styled } from "@mui/material/styles";

const MDTitle = styled("span")(({ theme }) => ({
  position: "relative",
  display: "block",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 600,
  color: `${theme.palette.black.main}`,
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "13px",

  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "16px",
  },
}));

const TVLabelPrimary = (props) => {
  return <MDTitle {...props}>{props.children}</MDTitle>;
};


export default TVLabelPrimary