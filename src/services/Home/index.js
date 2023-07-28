import React from 'react'
import CategoryCard from './categoryCard'
import rent from "../../assets/images/home/1.png"
import experience from "../../assets/images/home/2.png"
import hiking from "../../assets/images/home/3.png"
import kayaking from "../../assets/images/home/4.png"
import { Box, Grid } from '@mui/material'
import Rentproperty from './rentproperty'
import BecomeHost from './becomeHost'
import TopProperties from './topProperties'
import HostplanInfoCard from './hostplanInfoCard'
import DiscoverPlan from './discoverPlan'
import img8 from "../../assets/images/home/8.png"
import MDButton from '../../components/MDButton'
import Footer from '../Footer'
import Herosec from './herosec'
import Navbar from "../../layouts/Navbar"
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate()
    const AllImages = [{ name: "rent", img: rent }, { name: "experience", img: experience }, { name: "hiking", img: hiking }, { name: "kayaking", img: kayaking }]
    return (<div>
        <Navbar/>
        <Herosec/>
        <Box sx={{ width:{xs:"90%",md:"80%"}, mx: "auto",maxWidth:"1440px" }}>
            <Grid container spacing={4} sx={{mt:{xs:"10px",md:"-10rem"}}}>
                {AllImages.map((item) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={3} >
                            <CategoryCard img={item?.img} alt={item?.name} />
                        </Grid>
                    )
                })}
            </Grid>
            <Rentproperty />
            <BecomeHost />
            <TopProperties />
            <HostplanInfoCard />
            <Box sx={{ width: { xs: "100%", md: "90%", lg: "80%" }, mx: "auto" }}>
                <DiscoverPlan />
            </Box>
            <Box sx={{ height: { xs: "240px", md: "300px", lg: "450px" },my:{xs:"4rem",md:"6rem",lg:"10rem"}, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                <img src={img8} alt="media" style={{width:"100%",height:"100%",objectFit:"fill"}} />
                <span className='become-host' style={{borderRadius:"44px"}}>
                    <Box sx={{ my: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <h4 className="heading-sec" style={{

                            fontSize: " 16px", fontWeight: "600", color: "#fff"
                        }}>It’s never been easier to earn income with a booking site.</h4>
                        <MDButton
                            onClick={() => {
                                navigate("/hostplan")
                            }}
                            sx={{ mt: 2 }}
                        >
                            Become a Host
                        </MDButton>

                    </Box>
                </span>
            </Box>
            <Box>
            <h4 class="heading-sec">About Tio Vibe</h4>
            <p className="paragrapg-primary" style={{marginTop:"20px"}}>
            At Tio Vibe, we understand that a great vacation is more than just a change of scenery. It’s an opportunity to recharge, reconnect with loved ones,
and create new experiences that will stay with you forever. That’s why we’re dedicated to providing exceptional service every step of the way. With
Tio Vibe, you can rest easy knowing that you’re in good hands. So why settle for an ordinary vacation when you can have an extraordinary one
paying less? Our low rate commission guarantees the best prices in the market, because our goal is that everyone can enjoy unforgettable
moments. Start exploring our rentals today and discover the magic of Tio Vibe!
          </p>
            </Box>

        </Box>
        <Footer/>
    </div>
    )
}

export default Home