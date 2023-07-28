import React from "react";
import { styled } from "@mui/material/styles";

const MDTitle = styled("span")(({ theme }) => ({
  position: "relative",
  display: "block",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  color: `${theme.palette.black.main}`,
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",

  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.8rem",
  },
}));

const TVHeadingSub = (props) => {
  return <MDTitle {...props}>{props.children}</MDTitle>;
};


export default TVHeadingSub