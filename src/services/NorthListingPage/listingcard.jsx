import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import demoImg from "../../assets/images/imageDemo.svg";
import MDButton from "../../components/MDButton";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import map from "../../assets/icons/Maps.svg";
import like from "../../assets/icons/Like.svg";
import wifi from "../../assets/icons/Wifi.svg";
import swimming from "../../assets/icons/Swimming.svg";
import msg from "../../assets/icons/msg.svg";
import doublebed from "../../assets/icons/Doublebed.svg";
import bath from "../../assets/icons/Bath2.svg";
import heartFill from "../../assets/icons/fillheart.svg";

import TVParagraph from "../../components/TVParagraph";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToFavrite,
  RemoveFromFavorite,
  SetPropertyIDToGetDetail,
} from "../../redux/listingPoperty/listingSlice";
import { useNavigate } from "react-router-dom";
import { GetPropertyDetailByID } from "../../redux/listingPoperty/listingAPi";
import { ImgUrl } from "../../constants/baseUrl";

const Listingcard = (props) => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const favorites = useSelector((state) => state.listing.Favriout);

  const isProductInFavorites = (productId, favorites=[]) => {
    return favorites.some((item) => item.id == productId);
  };

  const handleAddToFav = (item) => {
    if (isProductInFavorites(item?.id, favorites)) {
      const updatedFavorites =
        favorites && favorites.filter((favorite) => favorite.id !== item.id);
      dispatch(RemoveFromFavorite(updatedFavorites));
    } else {
      dispatch(AddToFavrite([...favorites, item]));
    }
  };

  const modifiedString = props?.Data?.property_img.replace(/,\./g, ",").split(",");
console.log(">>>id",props?.Data?.idx)
  return (
    <Box
      sx={{
        mb: 4,
        maxWidth: {xs:"100%",md:"700px"},
        borderRadius: { xs: "8px", lg: "0px" },
        overflow: "hidden",
        border: { xs: "1px solid #00E4FE", md: "none" },
      }}
      onClick={()=>{
        dispatch(SetPropertyIDToGetDetail(props?.Data?.id))
        dispatch(GetPropertyDetailByID({"property_id":props?.Data?.id}))
        navigate(`/property-detail/${props?.Data?.id}}`)
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <Box
            sx={{ position: "relative", minheight:{md:"254px"}, height: {xs:"200px",md:"100%"} }}
          >
            <img
              src={modifiedString ? ImgUrl+modifiedString[0] : demoImg}
              alt="propert image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box sx={{
               position: "absolute",
               bottom: 0,
               display:"flex",justifyContent:"center",alignItems:"center",width:"100%"
            }}>
 <MDButtonPrimary
              sx={{
                borderRadius: "4px",
                fontSize: "12px!important",
                padding: "2px 10px!important",
                mr:2
              }}
            >
              <b>{props?.Data?.category}</b>
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
            </Box>
           
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <Box
            sx={{
              borderTopRightRadius: { xs: "0px", md: "20px" },
              borderBottomRightRadius: { xs: "0px", md: "20px" },
              border: "1px solid rgba(0, 228, 254, 1)",
              width: "100%",
              height: "100%",
              py: "20px",
              px: "30px",
            }}
          >
            <h4
              className="heading-sec"
              style={{ color: "#00E4FE", textAlign: "start" }}
            >
              {props?.Data?.name}
            </h4>
            <Box sx={{ display: "flex", my: "1rem" }}>
              <img src={map} alt="bed icon" style={{ width: "23px" }} />
              <TVParagraph
                sx={{
                  my: { xs: "8px", md: "9px", lg: "14px" },
                  textAlign: "start",
                  textTransfrom: "capitalize",
                  paddingLeft: 1.4,
                  fontFamily:"Rubik",
                  color: "#000",
                }}
              >
                {props?.Data?.location}
              </TVParagraph>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={6} md={12} lg={6}>
                <Box sx={{ display: "flex " }}>
                  <img
                    src={doublebed}
                    alt="bed icon"
                    style={{ width: "23px" }}
                  />
                  <TVParagraph
                    sx={{
                      my: { xs: "8px", md: "9px", lg: "14px" },
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    BEDROOMS : {props?.Data?.bedrooms}
                  </TVParagraph>
                </Box>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Box sx={{ display: "flex " }}>
                  <img src={bath} alt="bed icon" style={{ width: "23px" }} />
                  <TVParagraph
                    sx={{
                      my: { xs: "8px", md: "9px", lg: "14px" },
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    BATHROOMS : {props?.Data?.washrooms}
                  </TVParagraph>
                </Box>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Box sx={{ display: "flex " }}>
                  <img src={wifi} alt="bed icon" style={{ width: "23px" }} />
                  <TVParagraph
                    sx={{
                      my: { xs: "8px", md: "9px", lg: "14px" },
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    WIFI : {props?.Data?.wifi == true ? "Yes" : "No"}
                  </TVParagraph>
                </Box>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Box sx={{ display: "flex " }}>
                  <img
                    src={swimming}
                    alt="bed icon"
                    style={{ width: "23px" }}
                  />
                  <TVParagraph
                    sx={{
                      my: { xs: "8px", md: "9px", lg: "14px" },
                      textAlign: "start",
                      textTransfrom: "capitalize",
                      paddingLeft: 1.4,
                      color: "#000",
                      fontSize:"13px!important"

                    }}
                  >
                    POOL : {props?.Data?.pool  == true ? "Yes" : "No"}
                  </TVParagraph>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ background: "#000", mt: 2, mb: 1.6 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#FE4080",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize:"13px"
                }}
              >
                ${props?.Data?.night_rate}/ night
              </span>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                 <img src={msg} style={{ width: "23px" }} />
                {isProductInFavorites(props?.Data?.id,favorites) ? (
                  <img
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAddToFav(props?.Data)}}
                    src={heartFill}
                    style={{ width: "23px", margin: "0 12px 0 20px" }}
                  />
                ) : 
                (
                    <img
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToFav(props?.Data)}}
                      src={like}
                      style={{ width: "23px", margin: "0 12px 0 20px" }}
                    />
                  ) 
                }
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Listingcard;
