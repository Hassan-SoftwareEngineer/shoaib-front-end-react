import React from 'react'
import { styled } from '@mui/material/styles';
import theme from '../assets/Theme';

const Paragraph = styled('span')(({ theme }) => ({
    position: 'relative',
    display:"block",
    fontFamily: 'Lexend',
    fontWeight: 400,
    color:"#93959E",
    width:"100%",
    textAlign:"center",

    [theme.breakpoints.up('xs')]: {
        fontSize:"1rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:"1.2rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize:"1.4rem",

    },
    [theme.breakpoints.up('lg')]: {
        fontSize:"1.6rem",

    },
    [theme.breakpoints.up('xl')]: {
        fontSize:"1.8rem",
    },
}));

const TVParagraph = (props) => {
  return (
    <Paragraph {...props}>
        {props.children}
    </Paragraph>
  )
}


export default TVParagraph