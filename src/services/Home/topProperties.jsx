import React from "react";
import TVParagraph from "../../components/TVParagraph";
import Propertycard from "./propertycard";
import { Box, Grid } from "@mui/material";
import MDButton from "../../components/MDButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TVHeading from "../../components/TVHeading";

const TopProperties = () => {
  const navigate=useNavigate()
  const { NorthAmerica } = useSelector((state) => state.listing);
  const AllData =Array.isArray(NorthAmerica?.data?.response?.data) && NorthAmerica?.data?.response?.data?.slice(0, 3) || [];
  return (
    <div>
      <h4 className="heading-sec">Top Properties</h4>

      <TVParagraph
        sx={{
          mt: { xs: "10px", md: "12px", lg: "18px" },
          lineHeight: "30px",
          mb: { xs: "10px", md: "20px", lg: "10rem" },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor
        incididunt <br></br>0 labore dolore magna aliqua enim.
      </TVParagraph>
      <Grid container spacing={6}>
        {AllData?.length !== 0 ? (
          <>

              {Array.isArray(AllData) &&
                AllData?.length !== 0 &&
                AllData?.map((item) => {
                  return(
                  <Grid item xs={12} md={6} lg={4}>
                    <Propertycard Data={item} />;
                  </Grid>)
                })}
          </>
        ) : (
          <TVHeading sx={{ color: "#000", textAlign: "center",display:"block",mx:"auto" }}>
            No Data Found
          </TVHeading>
        )}
      </Grid>
      <Box sx={{ my: 10 }}>
        <h4 className="heading-sec">Start earning what you deserve</h4>
        <MDButton
          onClick={() => {
            navigate("/hostplan")
          }}
          sx={{ width: "100%", mt: 6, fontWeight: 400 }}
        >
          Tio Vibe Host Plans
        </MDButton>
        
      </Box>
    </div>
  );
};

export default TopProperties;
