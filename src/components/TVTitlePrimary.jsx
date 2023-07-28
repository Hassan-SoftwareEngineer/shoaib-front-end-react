import React from 'react'
import { styled } from '@mui/material/styles';

const Label = styled('span')(({ theme }) => ({
    position: 'relative',
    display:"inline-block",
    fontFamily: 'inherit',
    fontWeight: 600,
    color:`${theme.palette.primary.main}`,
    [theme.breakpoints.up('xs')]: {
        fontSize:"1.2rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:"1.3rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize:"1.4rem",

    },
    [theme.breakpoints.up('lg')]: {
        fontSize:"1.5rem",

    },
    [theme.breakpoints.up('xl')]: {
        fontSize:"1.6rem",
    },
}));

const TVTitlePrimary = (props) => {
  return (
    <Label {...props}>
        {props.children}
    </Label>
  )
}

export default TVTitlePrimary