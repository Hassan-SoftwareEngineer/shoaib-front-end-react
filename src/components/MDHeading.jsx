import React from 'react'
import { styled } from '@mui/material/styles';
import theme from '../assets/Theme';

const MDTitle = styled('span')(({ theme }) => ({
    position: 'relative',
    fontFamily: 'Montserrat',
    color:"#0F1727",
    letterSpacing:"2px",
    [theme.breakpoints.up('xs')]: {
        fontSize:"1.7rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:"2rem",

    },
    [theme.breakpoints.up('md')]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "4rem",

    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "4.4rem",
    },
}));

const MDHeading = (props) => {
  return (
    <MDTitle {...props}>
        {props.children}
    </MDTitle>
  )
}

export default MDHeading