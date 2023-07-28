import { Box } from '@mui/material'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <div>
        <Box sx={{height:{xs:"180px",md:"220px",lg:"284px"},borderRadius:"12px",position:"relative",overflow:"hidden"}}>
            <img src={props?.img} alt={props?.alt} className='categoryCard-img'/>
            <span className='categoryCard-heading'>{props?.alt}</span>
        </Box>
    </div>
  )
}

export default CategoryCard