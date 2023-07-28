import React, { useEffect, useState } from "react";
import ServicesImages from "./ServicesImages";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import DiscoverTulum from "./DiscoverTulum";
import TulumForm from "./TulumForm";
import Reviews from "./Reviews";
import InstantBooking from "./InstantBooking";
import Navbar from "../../layouts/Navbar";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import TVHeading from "../../components/TVHeading";
import lisitingBG from "../../assets/images/listingBG.png";
import SinglePropertyMap from "../SinglePropertyMap";
import { GetPropertyDetailByID } from "../../redux/listingPoperty/listingAPi";



const PropertydDetail = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { SinglePropertyDetail, ProprtyID } = useSelector((state => state.listing))

  console.log(">>>>>>>prop", SinglePropertyDetail)


  useEffect(() => {
    dispatch(GetPropertyDetailByID({ "property_id": ProprtyID }))
  }, [ProprtyID])

  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", mx: "auto", mt: { md: "60px" } }}>
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
              <TVHeading sx={{ color: "#fff" }}>Property Detail</TVHeading>
            </Box>
          </span>
        </Box>


      </Box>
      {SinglePropertyDetail ? (
        <Container maxWidth={false}>
          <Box container sx={{ display: "flex" }}>
            <Grid container spacing={{ xs: 2, md: 6 }} sx={{ flex: 1 }}>
              <Grid item xs={12} md={6}>
                <ServicesImages SinglePropertyDetail={SinglePropertyDetail?.property_detail && SinglePropertyDetail?.property_detail[0]} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SinglePropertyMap SinglePropertyDetail={SinglePropertyDetail?.property_detail && SinglePropertyDetail?.property_detail[0]} />
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={2} sx={{ flex: 1, mt: 3 }}>
            <Grid item xs={12} md={6}>
              <DiscoverTulum SinglePropertyDetail={SinglePropertyDetail?.property_detail && SinglePropertyDetail?.property_detail[0]} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TulumForm SinglePropertyDetail={SinglePropertyDetail?.property_detail && SinglePropertyDetail?.property_detail[0]} setStartDate={setStartDate} setEndDate={setEndDate} startDate={startDate} endDate={endDate} />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flex: 1 }}>
            <Grid item xs={12} md={6}>
              <Reviews />
            </Grid>
            <Grid item xs={12} md={6}>
              <InstantBooking startDate={startDate} endDate={endDate} SinglePropertyDetail={SinglePropertyDetail?.property_detail && SinglePropertyDetail?.property_detail[0]} UserDetail={SinglePropertyDetail?.owner && SinglePropertyDetail?.owner} />
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      )}

      <Footer />
    </>
  );
};

export default PropertydDetail;
