import { Box, Grid, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import termsBG from "../../assets/images/propertyBG.png";
import TVHeading from "../../components/TVHeading";
import Navbar from "../../layouts/Navbar";
import PackageCard from "./PackageCard";
import TVSelect from "../../components/TVSelect";
import { useDispatch, useSelector } from "react-redux";
import { GetPackages } from "../../redux/listingPoperty/listingAPi";
import MDButton from "../../components/MDButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hostplan = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const AllPackage =useSelector(state=>state.listing.AllPackages)
  const PackageCart=useSelector((state)=>state.listing.PackageCart)

    const AllFIlters = [{ name: "SELECT BY POPULARITY", val: 0 }, { name: "SORT BY AVERAGE RATING", val: 1 },
    { name: "SORT BY LATEST", val: 2 }, { name: "SORT BY PRICE", val: 3 }, { name: "SORT BY PRICE: LOW TO HIGH", val: 4 }, { name: "SORT BY PRICE: HIGH TO LOW", val: 5 }
    ]
    const [order,setOrder]=useState(0)
useEffect(()=>{
    dispatch(GetPackages())
},[])
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
                            <TVHeading sx={{ color: "#fff" }}>Host Package</TVHeading>
                        </Box>
                    </span>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
                    <Box sx={{display:"flex",justifyContent:"end",alignItems:"center",mb:{xs:2,md:6}}}>
                        <TVSelect
                            defaultValue={order}
                            value={order}
                            sx={{
                                border: "none",
                                maxWidth: "300px",
                                background: "#EAE7E7",
                                height:"40px",
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: "#D9D9D9",
                                    },
                                },
                            }}
                            onChange={(e) => {
                                const selectedCategory = e.target.value;
                                  setOrder(selectedCategory);
                            }}
                        >
                            {AllFIlters.map((item) => {
                                return (
                                    <MenuItem
                                        value={item.val}
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: "12px",
                                            color: item.val == 0 ? "#FE4080" :"#000",
                                            fontFamily: "Rubik",
                                        }}
                                    >
                                        {item?.name}
                                    </MenuItem>

                                )
                            })}

                        </TVSelect>
                    </Box>
                    <h4 className="heading-third" style={{ textAlign: "start" }}>
                    PACKAGES
          </h4>
                    <Box sx={{ mb: { xs: 2, md: 8 },mt:{ xs: 1, md: 3 } }}>
                        {Array.isArray(AllPackage) && AllPackage.length > 0 && AllPackage?.map((Item)=>{
                            return(
                                <PackageCard PackageData={Item}/>

                            )
                        })}
                    </Box>
                    <MDButton
          onClick={() => {
            if(PackageCart?.length == 0){
                toast.info("Please Add Plan Before Going Next")
            }else{
                navigate("/purcahse-plan")
            }
          }}
          sx={{ width: "100%", mt: 6, fontWeight: 400 }}
        >
          Checkout Cart
        </MDButton>
                </Box>
            </Box>
            <Footer />
        </>
    );
};


export default Hostplan