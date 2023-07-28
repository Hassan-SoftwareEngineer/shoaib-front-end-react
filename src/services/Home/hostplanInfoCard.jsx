import React from "react";
import lock from "../../assets/icons/lock.svg";
import cup from "../../assets/icons/cup.svg";
import flag from "../../assets/icons/flag.svg";
import { Box, Grid } from "@mui/material";
import TVParagraph from "../../components/TVParagraph";
import useMediaQuery from '@mui/material/useMediaQuery';

const HostplanInfoCard = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Grid container spacing={{xs:3,md:4,lg:6}} sx={{mb:{xs:3,md:6,lg:8},display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Grid item xs={12} md={6} lg={4}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <span
                    style={{
                        background: "rgba(0,0,0,0.1)",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "26px",
                        height:"88px",
                        width:"88px",
                    }}
                >
                    <img src={lock} alt="lock icon" />
                </span>
                <h4
                    className="heading-sec"
                    style={{ fontSize: "24px", marginTop: "26px",fontWeight:600}}
                >
                    Easy and safe
                </h4>
                <TVParagraph
                    sx={{
                        mt: { xs: "8px", md: "9px", lg: "26px" },
                        textTransform: "capitalize",
                        paddingLeft: 1.4,
                        color: "#000",
                        width: "80%",
                        mx: "auto",
                    }}
                >
                    Find your perfect place and book with our verified Hosts
                </TVParagraph>
            </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt:{xs:"0",md:"-27px"}
                }}
            >
                <span
                    style={{
                        background: "rgba(0,0,0,0.1)",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "26px",
                        height:"88px",
                        width:"88px",
                    }}
                >
                    <img src={flag} alt="lock icon" />
                </span>
                <h4
                    className="heading-sec"
                    style={{ fontSize: "24px", marginTop: "26px",fontWeight:600 }}
                >
                    Save money
                </h4>
                <TVParagraph
                    sx={{
                        mt: { xs: "8px", md: "9px", lg: "26px" },
                        textTransform: "capitalize",
                        paddingLeft: 1.4,
                        color: "#000",
                        width: "80%",
                        mx: "auto",
                    }}
                >
                  The best prices are guarantee
                </TVParagraph>
            </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <span
                    style={{
                        background: "rgba(0,0,0,0.1)",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "26px",
                        height:"88px",
                        width:"88px",

                    }}
                >
                    <img src={cup} alt="lock icon" />
                </span>
                <h4
                    className="heading-sec"
                    style={{ fontSize: "24px", marginTop: "26px",fontWeight:600 }}
                >
                    Enjoy
                </h4>
                <TVParagraph
                    sx={{
                        mt: { xs: "8px", md: "9px", lg: "26px" },
                        textTransform: "capitalize",
                        paddingLeft: 1.4,
                        color: "#000",
                        width: "80%",
                        mx: "auto",
                    }}
                >
                  Pack your clothes and be ready for an
amazing time
                </TVParagraph>
            </Box>
            </Grid>
           
        </Grid>
    );
};

export default HostplanInfoCard;
