import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import termsBG from "../../assets/images/termsBG.png";
import TVHeading from "../../components/TVHeading";
import Navbar from "../../layouts/Navbar";
import TVParagraph2 from "../../components/TVParagraph2";
import MDTextField from "../../components/MDTextField";
import MDTextArea from "../../components/MDTextArea";
import MDButtonPrimary from "../../components/MDButtonPrimary";

const ContactUs = () => {
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
            src={termsBG}
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
              <TVHeading sx={{ color: "#fff" }}>Contact Us</TVHeading>
            </Box>
          </span>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "65%" }, mx: "auto" }}>
          <Box sx={{ mb: { xs: 2, md: 8 } }}>
            <TVParagraph2
              sx={{
                wordSpacing: "4px",
                fontFamily: "Inter!important",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" },
                lineHeight: {
                  xs: "16px!important",
                  md: "28px!important",
                  lg: "30px!important",
                },
                my: 1,
              }}
            >
              At Tio Vibe we are dedicated to ensuring that your vacation rental
              experience is nothing short of exceptional. We believe that
              communication is key to achieving this, and that is why we are
              always available to answer your questions, provide support, and
              any concerns you may have. Our team of friendly and experienced
              professionals is here to assist you every step of the way, from
              the moment you book your rental to the end of your stay. We’re
              committed to providing you with the highest level of customer
              service. So don’t hesitate to contact us, we are here to help make
              your vacation unforgettable!
            </TVParagraph2>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#00E4FE47",
            padding: { xs: "20px", md: "80px" },
          }}
        >
          <Box sx={{ width: {xs:"100%",md:"60%"}, mx: "auto" }}>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 0, sm: 0, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <MDTextField
                  sx={{
                    "& .MuiInputBase-input": {
                      borderRadius: "13px!important",
                      border: "2px solid transparent",
                    },
                  }}
                  placeholder="Name"
                ></MDTextField>
                <MDTextField
                  sx={{
                    "& .MuiInputBase-input": {
                      borderRadius: "13px!important",
                      border: "2px solid transparent",
                      mt: { xs: "10px", md: "20px" },
                    },
                  }}
                  placeholder="Email"
                ></MDTextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDTextArea
                  placeholder="Message"
                  sx={{ border: "2px solid transparent", borderRadius: "13px" }}
                  minRows={5}
                ></MDTextArea>
              </Grid>
              <Grid item xs={12}>
                <MDButtonPrimary
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "13px!important",
                    color: "#FE4080",
                    fontSize: "16px!important",
                    width: "200px",
                    height: "44px",
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  CONTACT US
                </MDButtonPrimary>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
