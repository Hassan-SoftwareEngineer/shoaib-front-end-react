import * as React from "react";
import { styled } from "@mui/material/styles";
import TextareaAutosize from '@mui/base/TextareaAutosize';

const MDInput = styled(TextareaAutosize)(({ theme }) => ({
  color: theme.palette.gray,
    borderRadius: theme.shape.primary,
    background: theme.palette.white.main,
    fontFamily: theme.fonts.primary,
    letterSpacing: "1px",
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    border: `2px solid #00E4FE`,


    "&::placeholder": {
      color: theme.palette.gray.main,
    },
    "&:focus-within": {
      border: `2px solid #FE4080`,

    },
    "&:focus-visible": {
      border: `2px solid #FE4080!important`,
      },
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(0.6, 1),
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 2.6),
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1.1, 3),
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(1.4, 3.2),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(1.7, 3.5),
    },
}));


const MDTextArea = (props) => {
  return (
    <MDInput {...props} >
      {props.children}
    </MDInput>
  )
}

export default MDTextArea