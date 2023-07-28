import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import demoImg from "../../assets/images/demoHosueImg.png";
import MDButton from "../../components/MDButton";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import map from "../../assets/icons/Maps.svg";
import like from "../../assets/icons/fillheart.svg";
import wifi from "../../assets/icons/Wifi.svg";
import swimming from "../../assets/icons/Swimming.svg";
import msg from "../../assets/icons/msg.svg";
import doublebed from "../../assets/icons/Doublebed.svg";
import bath from "../../assets/icons/Bath2.svg";

import TVParagraph from "../../components/TVParagraph";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    AddToCart,
    AddToFavrite,
    RemoveFromFavorite,
  } from "../../redux/listingPoperty/listingSlice";

const Listingcard = (props) => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.listing.Favriout);
    const AllCart = useSelector((state) => state.listing.AllCart);

  
    const isProductInFavorites = (productId, favorites=[]) => {
      return favorites.some((item) => item.id == productId); // Use `some` method and compare IDs
    };

    const isProductInCart = (productId, AllCart=[]) => {
        return AllCart.some((item) => item.id == productId); // Use `some` method and compare IDs
      };
    
  
    const handleRemoveFromFav = (item) => {
      if (isProductInFavorites(item?.id, favorites)) {
        const updatedFavorites =
          favorites && favorites.filter((favorite) => favorite.id !== item.id);
        dispatch(RemoveFromFavorite(updatedFavorites));
      } else {
        dispatch(AddToFavrite([...favorites, item]));
      }
    };

    const handleAddToCart = (item) => {
        if (isProductInCart(item?.id, AllCart)) {
          const updatedFavorites =
          AllCart && AllCart.filter((cartItem) => cartItem.id !== item.id);
          dispatch(AddToCart(updatedFavorites));
        } else {
          dispatch(AddToCart([...AllCart, item]));
        }
      };
    return (
        <Box sx={{mb:4,maxWidth:"700px",borderRadius:{xs:"8px",lg:"0px"},overflow:"hidden",border:{xs:"1px solid #00E4FE",md:"none"}}} onClick={()=>{
            navigate(`/property-detail/:id`)
        }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <Box sx={{ position: "relative", minheight: "254px",height:"100%" }}>
                        <img
                            src={demoImg}
                            alt="propert image"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <MDButtonPrimary
                            sx={{
                                borderRadius: "4px",
                                fontSize: "12px!important",
                                padding: "2px 10px!important",
                                position: "absolute",
                                bottom: 0,
                                left: "35%",
                                transform: "translate(-50%, 0%)"
                            }}
                        >
                            <b>HOUSES</b>
                        </MDButtonPrimary>
                        <MDButton
                            sx={{
                                borderRadius: "4px",
                                fontSize: "12px!important",
                                padding: "2px 20px!important",
                                position: "absolute",
                                bottom: 0,
                                left: "65%",
                                transform: "translate(-50%, 0%)"
                            }}
                        >
                            <b>RENT</b>
                        </MDButton>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                    <Box
                        sx={{
                            borderTopRightRadius: {xs:"0px",md:"20px"},
                            borderBottomRightRadius: {xs:"0px",md:"20px"},
                            border: "1px solid rgba(0, 228, 254, 1)",
                            width: "100%",
                            height: "100%",
                            py: "20px",
                            px: "30px",
                            position:"relative"

                
                        }}
                    >
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"self-start"}}>
                        <h4
                            className="heading-sec"
                            style={{ color: "#00E4FE", textAlign: "start" }}
                        >
                            {props?.Data?.name}
                        </h4>
                        <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                    pt:2
                                    
                                }}
                            >
                                <img src={msg} style={{ width: "23px" }}
                                
                                />
                                <img
                                    src={like}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleRemoveFromFav(props?.Data)}}
                                    style={{ width: "23px", margin: "0 12px 0 20px" }}
                                />
                            </Box>
                            </Box>
                        <Box sx={{ display: "flex", my: "1rem" }}>
                            <img src={map} alt="bed icon" style={{ width: "23px" }} />
                            <TVParagraph
                                sx={{
                                    my: { xs: "8px", md: "9px", lg: "14px" },
                                    textAlign: "start",
                                    textTransfrom: "capitalize",
                                    paddingLeft: 1.4,
                                    color: "#000",
                                }}
                            >
                             {props?.Data?.address}
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
                                        }}
                                    >
                                        WIFI : 2
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
                                        }}
                                    >
                                        POOL : {props?.Data?.pool}
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
                                    fontFamily: "Rubik",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                }}
                            >
                             ${props?.Data?.night_rate} 
                                / night
                            </span>

                            <Box>

                            {isProductInCart(props?.Data?.id,AllCart) ? (
                                <MDButtonPrimary sx={{px:"10px!important",fontSize:"12px!important"}} onClick={(e)=>{e.stopPropagation();handleAddToCart(props?.Data)}}>Remove from Bag</MDButtonPrimary>

                ) : 
                (
                    <MDButton sx={{px:"10px!important",fontSize:"12px!important"}} onClick={(e)=>{e.stopPropagation();handleAddToCart(props?.Data)}}>Add to Bag</MDButton>

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
