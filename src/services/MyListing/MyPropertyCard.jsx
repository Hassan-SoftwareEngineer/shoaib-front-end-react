import { Box } from "@mui/material";
import React from "react";
import currentIcon from "../../assets/icons/currentIcon.svg";
import defaultIcon from "../../assets/icons/defaultImg.svg";
import demyIMG from "../../assets/images/home/7.png";
import TVHeadingPrimary from "../../components/TVHeadingPrimary";
import TVIconButton from "../../components/TVIconButton";
import HeartIcon from "../../assets/icons/heartIcon.svg";
import TwoWayDirection from "../../assets/icons/TwoWayDirection.svg";
import TVParagraph from "../../components/TVParagraph";
import BedIcon from "../../assets/icons/bed.svg";
import bathIcon from "../../assets/icons/bath.svg";
import squareIcon from "../../assets/icons/square.svg";
import { ImgUrl } from "../../constants/baseUrl";
import { GetPropertyDetailByID } from "../../redux/listingPoperty/listingAPi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToFavrite, RemoveFromFavorite } from "../../redux/listingPoperty/listingSlice";
import heartFill from "../../assets/icons/fillheart.svg";
import { toast } from "react-toastify";

const MyPropertyCard = (props) => {
    const modifiedString = props?.Data?.property_img.replace(/,\./g, ",").split(",");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const favorites = useSelector((state) => state.listing.Favriout);

    const isProductInFavorites = (productId, favorites = []) => {
        return favorites.some((item) => item.id == productId);
    };

    const handleAddToFav = (item) => {
        if(props?.Data?.is_approved == 1 && props?.Data?.is_pending == 0){
            if (isProductInFavorites(item?.id, favorites)) {
                const updatedFavorites =
                    favorites && favorites.filter((favorite) => favorite.id !== item.id);
                dispatch(RemoveFromFavorite(updatedFavorites));
            } else {
                dispatch(AddToFavrite([...favorites, item]));
            }
        }
        else{
            toast.info("Property Not Approved")
        }
       
    };
    return (
        <Box
            sx={{ borderRadius: "12px", position: "relative", overflow: "hidden", border: "2px solid #00E4FE" }}
        >
            <Box sx={{ position: "relative" }}>
                <div className="property-card-img">
                    <img
                        src={modifiedString ? ImgUrl + modifiedString[0] : demyIMG}
                        alt="propert image"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <img
                    src={currentIcon}
                    alt=""
                    style={{ position: "absolute", top: 0, left: "25px" }}
                />

                <span
                    style={{
                        position: "absolute",
                        top: "9px",
                        left: "65px",
                        background: "#F2B241",
                        color: "#FFF",
                        textDecoration: "uppercase",
                        borderRadius: "4px",
                        fontSize: "12px",
                        padding: "6px 8px",
                    }}
                >
                    FEATURED
                </span>
            </Box>
            <Box
                sx={{
                    boxShadow: "0px 10px 30px 0px #0000001A",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px",
                    borderRadius: "12px",
                    width: "80%",
                    margin: "auto",
                    marginTop: "-45px",
                    position: "relative",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={defaultIcon}
                        alt=""
                        style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "fill",
                            marginRight: "16px",
                        }}
                    />
                    <span style={{ display: "inline-block", fontWeight: "bold" }}>
                        Michael Bean
                    </span>
                </div>
                <button
                    style={{
                        background: props?.Data?.is_approved == 1 && props?.Data?.is_pending == 0 ? "#7360FF" :"rgb(242, 178, 65)" ,
                        borderRadius: "3px",
                        color: "#fff",
                        border: "none",
                        boxShadow: "none",
                        padding: "6px 12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                    }}
                >
                   {props?.Data?.is_approved == 1 && props?.Data?.is_pending == 0 ? "APPROVED" :"NOT APPROVED"}
                </button>
            </Box>

            <Box sx={{ p: "30px" }}>
                <TVHeadingPrimary> {props?.Data?.name}</TVHeadingPrimary>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        my: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "left",
                            flexDirection: "column",
                        }}
                    >
                        <TVHeadingPrimary
                            sx={{
                                color: "#93959E",
                                fontSize: "1.5rem!important",
                                fontWeight: "600",
                            }}
                        >
                            Start From
                        </TVHeadingPrimary>
                        <TVHeadingPrimary
                            sx={{ color: "#2DBE6C", my: 0.6, fontSize: { lg: "2.2rem" } }}
                        >
                            ${props?.Data?.night_rate}
                        </TVHeadingPrimary>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                        }}
                    >
                        <TVIconButton>
                            <img src={TwoWayDirection} />
                        </TVIconButton>
                        <TVIconButton sx={{ marginLeft: 1.6 }}>
                            {isProductInFavorites(props?.Data?.id, favorites) ? (
                                <img
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleAddToFav(props?.Data)
                                    }}
                                    src={heartFill}
                                    style={{ width: "30px" }}
                                />
                            ) :
                                (
                                    <img
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleAddToFav(props?.Data)
                                        }}
                                        src={HeartIcon}
                                    />
                                )
                            }
                        </TVIconButton>
                    </Box>
                </Box>
                <Box>
                    <TVParagraph
                        sx={{
                            my: { xs: "8px", md: "9px", lg: "14px" },
                            textAlign: "start",
                            lineHeight: { xs: "16px", md: "20px", lg: "30px" },
                        }}
                    >
                        {props?.Data?.description}
                    </TVParagraph>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex " }}>
                        <img src={BedIcon} alt="bed icon" />
                        <TVParagraph
                            sx={{
                                my: { xs: "8px", md: "9px", lg: "14px" },
                                textAlign: "start",
                                textTransfrom: "capitalize",
                                paddingLeft: 1.4,
                            }}
                        >
                            {props?.Data?.bedrooms} Beds
                        </TVParagraph>
                    </Box>
                    <Box sx={{ display: "flex " }}>
                        <img src={bathIcon} alt="bed icon" />
                        <TVParagraph
                            sx={{
                                my: { xs: "8px", md: "9px", lg: "14px" },
                                textAlign: "start",
                                textTransfrom: "capitalize",
                                paddingLeft: 1.4,
                            }}
                        >
                            {props?.Data?.washrooms} Beds
                        </TVParagraph>
                    </Box>
                    <Box sx={{ display: "flex " }}>
                        <img src={squareIcon} alt="bed icon" />
                        <TVParagraph
                            sx={{
                                my: { xs: "8px", md: "9px", lg: "14px" },
                                textAlign: "start",
                                textTransfrom: "capitalize",
                                paddingLeft: 1.4,
                            }}
                        >
                            600 Sq ft
                        </TVParagraph>
                    </Box>
                </Box>
                <TVIconButton
                    onClick={() => {
                        dispatch(GetPropertyDetailByID({ "property_id": props?.Data?.id }))
                        navigate(`/property-detail/${props?.Data?.id}}`)
                    }}
                    sx={{ mt: 2.6, fontFamily: "Rubik!important", width: "200px", height: "60px", color: "#93959E!important", fontSize: { xs: "1.2rem", md: "1.6rem", lg: "2rem" } }}> See Details</TVIconButton>
            </Box>
        </Box>
    );
};



export default MyPropertyCard