import { Box, Grid } from "@mui/material";
import React from "react";
import CrownIcon from "../../assets/icons/crown.svg";
import TVHeadingPrimary from "../../components/TVHeadingPrimary";
import TVHeading from "../../components/TVHeading";
import MDButton from "../../components/MDButton";
import { useDispatch, useSelector } from "react-redux";
import { AddToPackageCart } from "../../redux/listingPoperty/listingSlice";
import { toast } from "react-toastify";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ PackageData }) => {
  const dispatch=useDispatch()
  const PackageCart=useSelector((state)=>state.listing.PackageCart)
  const isProductInCart = (productId, packageCart = []) => {
    return packageCart.some((cartItem) => cartItem.id === productId);
  };
     
       const handleCart = (item) => {
        if (isProductInCart(item?.id, PackageCart)) {
          const updatedCart = PackageCart.filter((cartItem) => cartItem.id !== item.id);
          dispatch(AddToPackageCart(updatedCart));
        } else {
          dispatch(AddToPackageCart([item]));
        }
      };

  return (
    <Box
      sx={{
        borderRadius: "12px",
        border: "2px solid #FE4080",
        px: { xs: 3, md: "70px" },
        py: { xs: 2, md: 4 },

        mt:3
      }}
    >


      <Grid container>
        <Grid item xs={3} sm={2} sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
          <img src={CrownIcon} />
        </Grid>
        <Grid item xs={9} sm={6}>
          <Box >
            <TVHeadingPrimary
              sx={{
                fontfamily: "Inter",
                fontSize: {
                  lg: "26px!important",
                  color: "#FE4080",
                },
              }}
            >
              {PackageData?.packages_name}
            </TVHeadingPrimary>
            <TVHeadingPrimary
              sx={{
                fontfamily: "Inter",
                fontSize: {
                  lg: "26px!important",
                  color: "#000000",
                  lineHeight: "25px",
                },
              }}
            >
              Host Plan
            </TVHeadingPrimary>
          </Box>

        </Grid>
        <Grid item xs={6} sm={2} sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
          <TVHeading sx={{ color: "#FE4080" ,fontWeight:600}}>${PackageData?.price}</TVHeading>
        </Grid>
        <Grid item xs={6} sm={2} sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>
        {isProductInCart(PackageData?.id,PackageCart) ?(
          <MDButtonPrimary
          onClick={()=>{handleCart(PackageData)}}
            sx={{
              borderRadius: "4px",
              fontSize: "12px!important",
              padding: "2px 20px!important",
              height: "30px",

            }}
          >
            Remove From Cart
          </MDButtonPrimary>
          )
        :
          (
            <MDButton
            onClick={()=>{handleCart(PackageData)}}
              sx={{
                borderRadius: "4px",
                fontSize: "12px!important",
                padding: "2px 20px!important",
                height: "30px",
  
              }}
            >
              Add To Cart
            </MDButton>
          ) }
        </Grid>

      </Grid>


    </Box>
  );
};

export default PackageCard;
