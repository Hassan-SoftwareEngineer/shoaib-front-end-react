import React from 'react'
import { styled } from '@mui/material/styles';
import theme from '../assets/Theme';

const Label = styled('span')(({ theme }) => ({
    position: 'relative',
    display:"inline-block",
    fontFamily: 'inherit',
    fontWeight: 400,
    letterSpacing:"2px",
    textTransform:"uppercase",
    color:`${theme.palette.black.main}`,
    [theme.breakpoints.up('xs')]: {
        fontSize:"1.2rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:"1.4rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize:"1.5rem",
        paddingLeft:"30px",

    },
    [theme.breakpoints.up('lg')]: {
        fontSize:"1.7rem",
        paddingLeft:"30px",

    },
    [theme.breakpoints.up('xl')]: {
        fontSize:"1.9rem",
    paddingLeft:"30px",

    },
}));

const TVTitle = (props) => {
  return (
    <Label {...props}>
        {props.children}
    </Label>
  )
}

export default TVTitle