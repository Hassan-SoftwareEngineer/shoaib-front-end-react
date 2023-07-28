import React from 'react'
import { styled } from '@mui/material/styles';

const Title = styled('span')(({ theme }) => ({
    position: 'relative',
    fontFamily: 'Montserrat',
    color:"#2D2929",
    fontWeight:700,
    display:"block",
    [theme.breakpoints.up('xs')]: {
        fontSize:"1.5rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:"1.5rem",

    },
    [theme.breakpoints.up('md')]: {
        fontSize: "1.8rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "2rem",

    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "2.2rem",
    },
}));

const TVHeadingPrimary = (props) => {
  return (
    <Title {...props}>
        {props.children}
    </Title>
  )
}



export default TVHeadingPrimary