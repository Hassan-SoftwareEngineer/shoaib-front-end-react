import React from 'react'
import { styled } from '@mui/material/styles';
import theme from '../assets/Theme';

const Paragraph = styled('span')(({ theme }) => ({
    position: 'relative',
    display:"block",
    fontFamily: 'Rubik',
    fontWeight: 400,
    color:"#000",
    width:"100%",
    textAlign:"left",

    [theme.breakpoints.up('xs')]: {
        fontSize:"1rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:"1.2rem",
        lineHeight:"1.8rem"

    },
    [theme.breakpoints.up('md')]: {
        fontSize:"1.2rem",
        lineHeight:"1.8rem"

    },
    [theme.breakpoints.up('lg')]: {
        fontSize:"1.3rem",
        lineHeight:"2rem"

    },
    [theme.breakpoints.up('xl')]: {
        fontSize:"1.3rem",
    },
}));

const TVParagraph2 = (props) => {
  return (
    <Paragraph {...props}>
        {props.children}
    </Paragraph>
  )
}


export default TVParagraph2