import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import stars from "../../assets/icons/New folder/star.svg";
import userImage from "../../assets/images/DefaultUser.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Reviews = () => {
  return (
    <div>
      <Box mt={3}>
        <Typography variant="h2">Reviews (89)</Typography>
      </Box>
      <Box sx={{mt:5}}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px",justifyContent:"start",mb:2}}>
       <StarIcon sx={{fontSize:"30px",color:"rgba(254, 64, 128, 1)",marginRight:"-6px"}}/>
       <StarIcon sx={{fontSize:"30px",color:"rgba(254, 64, 128, 1)",marginRight:"-6px"}}/>
       <StarIcon sx={{fontSize:"30px",color:"rgba(254, 64, 128, 1)",marginRight:"-6px"}}/>
       <StarBorderIcon sx={{fontSize:"30px",color:"rgba(0, 0, 0, .3)",marginRight:"-6px"}}/>
        <Typography variant="body1" sx={{ ml: 1, fontSize: "1.6rem",color:"rgba(242, 131, 0, 1)",fontWeight:700 }}>
          4.9
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "flex-start",
          marginBottom:'20px',
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px", gap: "8px", }}
        >
          <Avatar
            src={userImage}
            alt="User"
            sx={{ width: "64px", height: "64px" }}
          />
          <Box sx={{ marginLeft: "16px" }}>
            <Typography variant="h5" sx={{fontFamily:"Rubik",fontSize:"26px"}}>John Doe</Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{fontFamily:"Lexend",fontWeight:500,fontSize:"9px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
      </Box>
    </div>
  );
};

export default Reviews;
