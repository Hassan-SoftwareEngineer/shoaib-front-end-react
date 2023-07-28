import { Box, Grid, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import termsBG from "../../assets/images/propertyBG.png";
import TVHeading from "../../components/TVHeading";
import Navbar from "../../layouts/Navbar";
import TVSelect from "../../components/TVSelect";
import { useDispatch, useSelector } from "react-redux";
import { AssignPackageToUser, GetPackages } from "../../redux/listingPoperty/listingAPi";
import PackageCard from "../HostPlan/PackageCard";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import TVHeadingSub from "../../components/TVHeadingSub";
import { toast } from "react-toastify";

const PurchasePlan = () => {
    const dispatch = useDispatch();
    const userid = useSelector((state) => state.auth.users?.response?.user_detail?.token_detail?.user_id);
    const AllPackage = useSelector((state) => state.listing.AllPackages);
    const PackageCart = useSelector((state) => state.listing.PackageCart);
  
    const [pkgID, setPkgID] = useState();
  
    const ConfirmBooking = () => {
      let body = {
        package_id: pkgID,
        user_id: userid,
      };
      dispatch(AssignPackageToUser(body)).then((res) => {
        console.log("package assign", res);
        if(res?.payload?.data?.response?.success == false){
            toast.error("Some Thing went Wrong Try Later!")
        }
        if(res?.payload?.data?.response?.success == true){
            toast.success(res?.payload?.data?.response?.message)
        }
      });
    };
  
    useEffect(() => {
      dispatch(GetPackages());
    }, []);
  
    useEffect(() => {
      // Check if PackageCart is not empty and if pkgID is not already set
      if (PackageCart.length > 0 && !pkgID) {
        setPkgID(PackageCart[0]?.id);
      }
    }, [PackageCart, pkgID]);
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
                            <TVHeading sx={{ color: "#fff" }}>Purchase Host Package</TVHeading>
                        </Box>
                    </span>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
                    <h4 className="heading-third" style={{ textAlign: "start" }}>
                    PACKAGES
          </h4>
                    <Box sx={{ mb: { xs: 2, md: 8 },mt:{ xs: 1, md: 3 } }}>
                        {Array.isArray(PackageCart) && AllPackage.length > 0 && PackageCart?.map((Item)=>{
                            return(
                                <PackageCard PackageData={Item}/>
                            )
                        })}
                    </Box>
                </Box>
                <Box sx={{ border: "2px solid #00E4FE", px: 5,py:4, borderRadius: "8px",width:{xs:"100%",md:"70%",margin:"auto"} }}>
                            <TVHeadingSub sx={{ color: "#FE4080", textTransform: "uppercase", textAlign: "center" }}>
                                Order summary
                            </TVHeadingSub>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading">
                                    Product
                                </span>
                                <span className="bag-heading">
                                    Subtotal
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Weekly Discount
                                </span>
                                <span className="bag-heading-primary">
                                    $200
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Service Fee
                                </span>
                                <span className="bag-heading-primary">
                                    $100
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Total
                                </span>
                                <span className="bag-heading-primary" style={{ color: "#FE4080" }}>
                                    $100
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Would you like travel insurance
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Travel Insurance
                                </span>
                                <span className="bag-heading-primary" style={{ color: "#FE4080" }}>
                                    $100
                                </span>
                            </Box> <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Sub-Total
                                </span>
                                <span className="bag-heading-primary" style={{ color: "#FE4080" }}>
                                    $100
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 3 }}>
                                <MDButtonPrimary
                                    sx={{
                                        borderRadius: "4px",
                                        fontSize: "14px!important",
                                        padding: "3px 16px!important",

                                    }}
                                    onClick={ConfirmBooking}
                                >
                                    Proceed to Checkout
                                </MDButtonPrimary>
                            </Box>
                        </Box>
            </Box>
            <Footer />
        </>
    );
};


export default PurchasePlan