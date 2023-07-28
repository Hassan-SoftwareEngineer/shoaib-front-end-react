import React from "react";
import Discovercard from "./discovercard";
import { Grid } from "@mui/material";
import img1 from "../../assets/images/home/9.png";
import img2 from "../../assets/images/home/10.png";
import img3 from "../../assets/images/home/11.png";
import img4 from "../../assets/images/home/12.png";
import img5 from "../../assets/images/home/13.png";
import { useNavigate } from "react-router-dom";

const DiscoverPlan = () => {
  const navigate = useNavigate();
  const AllCountry = [
    { name: "Toronto, Canada.", img: img1, url:"/north-listing" },
    { name: "Nauyaca, Costa Rica.", img: img2,url:"/north-listing" },
    { name: "San Pedro de Atacama, Chile.", img: img3,url:"/south-listing" },
    { name: "Rome, Italy.", img: img4 ,url:"/carib-listing"},
    { name: "Exuma, Bahamas.", img: img5 ,url:"/europe-listing"},
  ];
  return (
    <div>
      <h4 className="heading-sec">Let’s discover new places!</h4>
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        sx={{
          mt: { xs: 2, md: 2, lg: 10 },
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        {AllCountry.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} onClick={()=>{navigate(item?.url)}}>
              <Discovercard img={item?.img} alt={item?.name} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DiscoverPlan;
