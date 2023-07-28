import { Box } from '@mui/material'
import React from 'react'

const Discovercard = (props) => {
  return (
    <div>
        <Box sx={{height:{xs:"240px",md:"300px",lg:"380px"},borderRadius:"12px",position:"relative",overflow:"hidden"}}>
            <img src={props?.img} alt={props?.alt} className='categoryCard-img'/>
            <span className='categoryCard-heading'>{props?.alt}</span>
        </Box>
    </div>
  )
}


export default Discovercard