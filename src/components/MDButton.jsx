import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const DTPrimaryBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.white.main,
  borderRadius: theme.shape.secondary,
  backgroundColor: theme.palette.primary.main,
  boxShadow: "rgba(255, 7, 135, 0.35) 0px 5px 21px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  textTransform:'capitalize',
  whiteSpace:"pre",
  '&:hover': {
    backgroundColor: "rgba(30, 208, 252, 0.35)",
    boxShadow: "rgba(30, 208, 252, 0.35) 0px 5px 21px",

  },
  "&:disabled": {
    backgroundColor: "rgba(255, 7, 135, 0.3)",
    color:"#fff"
  },
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(0.2, 5),
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0.2, 5),
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0.2, 5),
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0.2, 5),
    fontSize: "1.7rem",

  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(0.3, 5),
    fontSize: "1.8rem",

  },
}));


const MDButton = (props) => {
  const { btn_text, type, btnStatus } = props
  return (
    <DTPrimaryBtn type={type} disabled={btnStatus} {...props}>
      {props.icon}{btn_text}{props.children}
    </DTPrimaryBtn>
  )
}


export default MDButton