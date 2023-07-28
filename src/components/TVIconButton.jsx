
import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const DTPrimaryBtn = styled(Button)(({ theme }) => ({
  color: "#fff",
  borderRadius: "3px",
  backgroundColor:"#fff",
  boxShadow: "none",
  fontFamily: 'Rubik',
  fontStyle: "normal",
  minWidth:"20px",
  fontWeight: 600,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  textTransform:'unset',
  whiteSpace:"pre",
  border:"1px solid #E5E7EC",
  height:"40px",
  width:"40px",
  '&:hover': {
    // backgroundColor: "rgba(30, 208, 252, 0.35)",
    // boxShadow: "rgba(30, 208, 252, 0.35) 0px 5px 21px",

  },
  "&:disabled": {
    // backgroundColor: "rgba(255, 7, 135, 0.3)",
    // color:"#fff"
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",

  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.2rem",

  },
}));


const TVIconButton = (props) => {
  return (
    <DTPrimaryBtn  {...props}>
        {props.children}
    </DTPrimaryBtn>
  )
}

export default TVIconButton