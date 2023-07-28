import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DoubleBed from "../../assets/icons/Double bed.png";
import Bathroom from "../../assets/icons/Bath.png";
import Pool from "../../assets/icons/Swimming pool.png";
import PawPrint from "../../assets/icons/dog.svg";
import Wifi from "../../assets/icons/Wifi.png";
import checkmark from "../../assets/icons/check-mark 1.png";
import check2 from "../../assets/icons/check-mark 2.png";
import check3 from "../../assets/icons/check-mark 3.png";
import check4 from "../../assets/icons/check-mark 4.png";
import TVParagraph from "../../components/TVParagraph";

const DiscoverTulum = ({SinglePropertyDetail}) => {
  return (
    <div>
      <Stack direction="row" spacing={2} my={2}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgba(0, 228, 254, 0.56)",
          }}
        >
          Top Rated
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgba(0, 228, 254, 0.56)",
          }}
        >
          Quick Booking
        </Button>
      </Stack>
      <Box my={3}>
        <Typography variant="h2">{SinglePropertyDetail?.name}</Typography>
        <Divider />
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} md={4} alignItems="center">
            <Typography variant="h4">Overview</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={DoubleBed} alt="Bedrooms" />
              </Grid>
              <Grid item>
              <TVParagraph
                    sx={{
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    BEDROOMS : {SinglePropertyDetail?.bedrooms}
                  </TVParagraph>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={Bathroom} alt="Bathrooms" />
              </Grid>
              <Grid item>
              <TVParagraph
                    sx={{
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    WASHROOMS : {SinglePropertyDetail?.washrooms}
                  </TVParagraph>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} />
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={Wifi} alt="Wifi" />
              </Grid>
              <Grid item>
              <TVParagraph
                    sx={{
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    Wifi : {SinglePropertyDetail?.wifi == 1 ? "Yes" : "No"}
                  </TVParagraph>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={Pool} alt="Pool" />
              </Grid>
              <Grid item>
              <TVParagraph
                    sx={{
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                   Pool: {SinglePropertyDetail?.pool == 1 ? "Yes" : "No"}
                  </TVParagraph>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} />
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={PawPrint} alt="Pets" style={{width:"20px"}}/>
              </Grid>
              <Grid item>
              <TVParagraph
                    sx={{
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                 Pets: {SinglePropertyDetail?.pets == 1 ? "Yes" : "No"}
                  </TVParagraph>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} md={4} alignItems="center">
            <Typography variant="h4" sx={{fontWeight:500,fontFamily:"Inter",fontSize:"18px"}}>REASON TO BOOK</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={checkmark} alt="Bedrooms" />
              </Grid>
              <Grid item>
                <Typography variant="body1">Includes the Essentials</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={check3} alt="Bathrooms" />
              </Grid>
              <Grid item>
                <Typography variant="body1">Excellent Property</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} />
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={check2} alt="Wifi" />
              </Grid>
              <Grid item>
                <Typography variant="body1">Safe Boking</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <img src={check4} alt="Pool" />
              </Grid>
              <Grid item>
                <Typography variant="body1">Great Customer Support</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} md={4} alignItems="center">
            <Typography variant="h4"sx={{fontWeight:500,fontFamily:"Inter",fontSize:"18px"}}>DESCRIPTION</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body1" mb={2} sx={{fontWeight:300,fontFamily:"Inter",fontSize:"13px",color:"rgba(0, 0, 0, 1)"}}>Area Name</Typography>
                <Typography variant="body1" sx={{fontWeight:500,fontFamily:"Lexend",fontSize:"9px",color:"rgba(0, 0, 0, 1)"}}>
                {SinglePropertyDetail?.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} alignItems="center">
            <Typography variant="h4" sx={{fontWeight:500,fontFamily:"Inter",fontSize:"18px"}}>Additional Note</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
              <Typography variant="body1" sx={{fontWeight:500,fontFamily:"Lexend",fontSize:"9px",color:"rgba(0, 0, 0, 1)"}}>
                {SinglePropertyDetail?.additional}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DiscoverTulum;
