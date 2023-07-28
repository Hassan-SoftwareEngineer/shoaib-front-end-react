import React, { useEffect, useState } from "react";
import { Box, Grid, Card, CardMedia, Button, Stack } from "@mui/material";
import demoImg from "../../assets/images/demoHosueImg.png";
import { ImgUrl } from "../../constants/baseUrl";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import MDButton from "../../components/MDButton";

const ServicesImages = ({SinglePropertyDetail}) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const modifiedString = SinglePropertyDetail?.property_img.replace(/,\./g, ",").split(",");

  useEffect(()=>{
    setSelectedImage(modifiedString && modifiedString[0])
  },[])
  return (
    <Box>
      <Stack direction="row" spacing={2} my={2}>
      <MDButtonPrimary
              sx={{
                borderRadius: "4px",
                fontSize: "12px!important",
                padding: "2px 10px!important",
               
              }}
            >
              <b>HOUSES</b>
            </MDButtonPrimary>
            <MDButton
              sx={{
                borderRadius: "4px",
                fontSize: "12px!important",
                padding: "2px 20px!important",
                
               
              }}
            >
              <b>RENT</b>
            </MDButton>
      </Stack>
      <Card>
        <CardMedia
          component="img"
          alt="Main Image"
          image={selectedImage && ImgUrl+selectedImage }
          sx={{
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            // '@media (min-width: 600px)': {
            //   height: 400,
            // },
          }}
        />
      </Card>
      <Grid container spacing={1} mt={2}>
        {modifiedString && modifiedString.map((image, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Card
              onClick={() => handleImageClick(image)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={`Thumbnail ${index + 1}`}
                image={modifiedString ? ImgUrl+modifiedString[index] : demoImg}
                sx={{
                  height: "auto",
                  objectFit: "fill",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesImages;
