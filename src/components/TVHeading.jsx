import React from 'react'
import { styled } from '@mui/material/styles';
import theme from '../assets/Theme';

const Title = styled('span')(({ theme }) => ({
    position: 'relative',
    fontFamily: 'Montserrat',
    color:"#0F1727",
    fontWeight:700,
    display:"block",
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
        fontSize: "4.4rem",

    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "4.4rem",
    },
}));

const TVHeading = (props) => {
  return (
    <Title {...props}>
        {props.children}
    </Title>
  )
}


export default TVHeading