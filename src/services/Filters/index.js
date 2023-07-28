import React from 'react'
import TVLabelPrimary from '../../components/TVLabelPrimary'
import TVSmallField from '../../components/TVSmallField'
import { Box, Grid } from '@mui/material'
import MDButtonPrimary from '../../components/MDButtonPrimary'
import FilterIcon from "../../assets/icons/Filter.svg"

const Filters = () => {
    return (
        <Grid container spacing={{xs:1,sm:3}}>
            <Grid item xs={12} sm={9} md={10}  lg={10}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <TVLabelPrimary sx={{width:"140px",mr:2}}>Price $</TVLabelPrimary>
                <TVSmallField placeholder="0" />
                <span style={{fontSize:"12px",fontWeight:600,display:"flex",justifyContent:"center",alignItems:"center",width:"100px",height:"100%"}}>
                to
                </span>
                <TVSmallField placeholder="1000"/>
                </Box>
               
            </Grid>
            <Grid item xs={12} sm={3} md={2} lg={2}>
                <MDButtonPrimary sx={{width:"100%",fontSize:"14px!important",fontWeight:500,fontFamily:"Inter",borderRadius:"8px",height:"30px",boxShadow:"none"}}>
                    Filter <img src={FilterIcon}/>
                </MDButtonPrimary>
            </Grid>
        </Grid>
    )
}

export default Filters