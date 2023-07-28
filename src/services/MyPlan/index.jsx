import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import termsBG from "../../assets/images/propertyBG.png";
import TVHeading from "../../components/TVHeading";
import Navbar from "../../layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetPackages } from "../../redux/listingPoperty/listingAPi";
import MyPlanCard from "./MyPlanCard";

const MyPlan = () => {
    const dispatch = useDispatch();
    const PackageCart=useSelector((state)=>state.listing.PackageCart)
    const packg = useSelector((state) => state.auth.users?.response?.user_detail?.package)
  
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
                            <TVHeading sx={{ color: "#fff" }}>My Package</TVHeading>
                        </Box>
                    </span>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
                    <h4 className="heading-third" style={{ textAlign: "start" }}>
                    SUBSCRIBED PACKAGE
          </h4>
                    <Box sx={{ mb: { xs: 2, md: 8 },mt:{ xs: 1, md: 3 } }}>
                                <MyPlanCard PackageData={packg}/>
                           
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
};


export default MyPlan