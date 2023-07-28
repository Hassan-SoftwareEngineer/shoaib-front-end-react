import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import companyicon from "../../assets/images/footer/footerCompanyIcon.svg"
import TVParagraph from '../../components/TVParagraph'
import arrowicon from "../../assets/icons/smallblackarrow.svg"
import bc from "../../assets/images/footer/footerbg.png"
import fb from "../../assets/images/footer/facebook.png"
import twitter from "../../assets/images/footer/twitter.png"
import insta from "../../assets/images/footer/insta.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const navigate=useNavigate()
    const [selected, setSelected]=useState()
    return (
        <div className='footer-container' style={{ backgroundColor: matches ? "transparent" : "rgba(0, 228, 254, 0.3)" }}>
            {matches ?
                <img src={bc} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "fill", zIndex: -1 }} />

                : null}
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={5}>
                    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", flexDirection: "column", mt: { xs: "8px", md: "9px", lg: "30px" }, width:{xs:"100%", md:"80%"},
                                mx:"auto", }}>
                        <img src={companyicon} alt="icon" />
                        <TVParagraph
                            sx={{
                                my: { xs: "8px", md: "9px", lg: "30px" },
                                textAlign: "start",
                                fontSize: "14px!important",
                                textTransfrom: "capitalize",
                                lineHeight: "26px",
                                color: "#000",
                               
                            }}
                        >
                            At Tio Vibe, we understand that a great vacation is more than just a change of scenery. It’s an opportunity to recharge, reconnect with loved ones, and create new experiences that will stay with you forever.
                        </TVParagraph>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "start", flexDirection: "column", height: "100%", pb: { xs: "8px", md: "9px", lg: "30px" }, }}>
                       
                        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", mb: 1, cursor: "pointer" }}>
                            <img src={arrowicon} alt="arrow-icon" />
                            <TVParagraph
                                sx={{
                                    textAlign: "start",
                                    fontSize: "14px!important",
                                    textTransfrom: "capitalize",
                                    color: "#000",
                                    fontWeight: 500,
                                    marginLeft: "14px"
                                }}
                                onClick={()=>{setSelected('term');navigate('/terms-and-conditions')}}
                            >
                                Terms and Conditions
                            </TVParagraph>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", mb: 1, cursor: "pointer" }}>
                            <img src={arrowicon} alt="arrow-icon" />
                            <TVParagraph
                                sx={{
                                    textAlign: "start",
                                    fontSize: "14px!important",
                                    textTransfrom: "capitalize",
                                    color: "#000",
                                    fontWeight: 500,
                                    marginLeft: "14px"
                                }}
                                onClick={()=>{setSelected('privacy');navigate('/privacy-policy')}}

                            >
                                Privacy Policy
                            </TVParagraph>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", mb: 1, cursor: "pointer" }}>
                            <img src={arrowicon} alt="arrow-icon" />
                            <TVParagraph
                                sx={{
                                    textAlign: "start",
                                    fontSize: "14px!important",
                                    textTransfrom: "capitalize",
                                    color: "#000",
                                    fontWeight: 500,
                                    marginLeft: "14px"
                                }}
                                onClick={()=>{setSelected('contact');navigate('/contact-us')}}

                            >
                                Contact Us
                            </TVParagraph>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", mb: 1, cursor: "pointer" }}>
                            <img src={arrowicon} alt="arrow-icon" />
                            <TVParagraph
                                sx={{
                                    textAlign: "start",
                                    fontSize: "14px!important",
                                    textTransfrom: "capitalize",
                                    color: "#000",
                                    fontWeight: 500,
                                    marginLeft: "14px"
                                }}
                            >
                                Blogs
                            </TVParagraph>
                        </Box>


                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "start", flexDirection: "column", height: "100%", pb: { xs: "8px", md: "9px", lg: "30px" },mt:{xs:0,lg:"-40px"},pl:{md:"50px",lg:"unset"} }}>

                        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", mb: 1, cursor: "pointer" }}>
                            <img src={arrowicon} alt="arrow-icon" />
                            <TVParagraph
                                sx={{
                                    textAlign: "start",
                                    fontSize: "14px!important",
                                    textTransfrom: "capitalize",
                                    color: "#000",
                                    fontWeight: 500,
                                    marginLeft: "14px"
                                }}
                            >
                                Host package
                            </TVParagraph>
                        </Box>
                        <Box sx={{ marginTop: "10px" }}>
                            <img src={twitter} alt="social icons" style={{  cursor: "pointer" }} />
                            <img src={fb} alt="social icons" style={{ marginLeft: "20px", marginRight: "20px",cursor: "pointer" }} />
                            <img src={insta} alt="social icons" style={{ cursor: "pointer" }} />
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}

export default Footer