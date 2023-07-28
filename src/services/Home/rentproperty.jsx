import { Box, Grid } from "@mui/material";
import React from "react";
import rentImage from "../../assets/images/home/5.png";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import TVHeading from "../../components/TVHeading";
import { useNavigate } from "react-router-dom";

const Rentproperty = () => {
  const navigate= useNavigate()

  return (
    <Box sx={{ my: {xs:"3rem",md:"6rem",lg:"10rem"} }}>
      <Grid container spacing={{xs:3,md:6,lg:8}}>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <div className="rent-sec-img">
            <img src={rentImage} alt="rent_media" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <TVHeading sx={{mt:{xs:"0px",md:"20px",lg:"26px"},mb:{xs:"20px",md:"40px",lg:"60px"}}}>Rent a Property</TVHeading>
          <p className="paragrapg-primary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"3rem"}}>
            <MDButtonPrimary 
            onClick={()=>navigate("/filter-property/downtown")}
            >Find a Property</MDButtonPrimary>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rentproperty;
