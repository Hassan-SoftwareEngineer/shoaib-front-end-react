import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Listingcard from "./listingcard";
import Footer from "../Footer";
import lisitingBG from "../../assets/images/mgFv.png";
import TVHeading from "../../components/TVHeading";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import TVTextField from "../../components/TVTextField";
import TVSelect from "../../components/TVSelect";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { NorthAmericaProperty } from "../../redux/listingPoperty/listingAPi";
import Navbar from "../../layouts/Navbar";

const WishList = () => {
 const favorites = useSelector((state) => state.listing.Favriout);


  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", mx: "auto" }}>
        <Box
          sx={{
            height: "270px",
            position: "relative",
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={lisitingBG}
            alt="media"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <span className="become-host">
            <Box
              sx={{
                my: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                maxWidth: "900px",
                width: "100%",
              }}
            >
              <TVHeading sx={{ color: "#fff" }}>WishList</TVHeading>
            </Box>
          </span>
        </Box>
        <Box sx={{width:{xs:"100%",md:"65%"},mx:"auto"}}>

        <Box sx={{mb:{xs:2,md:8}}}> 
          <h4 className="heading-third" style={{ textAlign: "start" }}>
            My Favourites
          </h4>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            
            {favorites.length !== 0 ? favorites.map((item) => {
              return (
                <Listingcard Data={item} />
              )
            }):<h4 className="heading-third">
            No item in favorites
          </h4>}
          </Grid>
        </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default WishList;
