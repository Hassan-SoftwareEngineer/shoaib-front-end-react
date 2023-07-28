import React from 'react'
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";

const SelectOption = styled(Select)(({ theme }) => ({
    width: "100%",
    fontFamily: theme.fonts.primary,
    color: theme.palette.black.main,
    border: `1px solid transparent`,
    letterSpacing: "1px",
    fontSize: "1.6rem",
    boxShadow: "none",
    height:"51px",
    background: "#fff",
    "& .MuiSelect-outlined": {
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
    },
    ".MuiOutlinedInput-notchedOutline": {
        border: 0,
    },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
        border: 0,
    },
    "&.MuiOutlinedInput-root:active .MuiOutlinedInput-notchedOutline":
    {
      border: `2px solid #00E4FE`,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
        border: 0,
    },
   
      
}))

const TVSelect = (props) => {
  return (
    <SelectOption 
    inputProps={{ "aria-label": "Without label" }}
    {...props}
    >
        {props.children}
    </SelectOption>
  )
}

export default TVSelect