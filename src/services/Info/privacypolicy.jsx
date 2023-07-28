import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import termsBG from "../../assets/images/termsBG.png";
import TVHeading from "../../components/TVHeading";
import Navbar from "../../layouts/Navbar";
import TVParagraph2 from "../../components/TVParagraph2";
import { toast } from "react-toastify";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", mx: "auto",mt:{md:"60px"}  }}>
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
              <TVHeading sx={{ color: "#fff" }}>Privacy Policy</TVHeading>
            </Box>
          </span>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "65%" }, mx: "auto" }}>
          <Box sx={{ mb: { xs: 2, md: 8 } }}>
            <TVParagraph2
              sx={{
                wordSpacing: "4px",
                fontFamily:"Inter!important",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" },
                lineHeight:{xs:"16px!important",md:"36px!important",lg:"36px!important"},
                my: 1,
                
              }}
            >
           
            Welcome to <span style={{color:"#FE4080"}}>Tiovibe.com</span> We are committed to protecting the privacy
            of our users, and this Privacy Policy outlines how we collect, use,
            and protect your personal information. By using our website, you
            agree to the terms of this Privacy Policy.
            <br></br> Information We Collect We
            may collect the following types of personal information when you use
            our website:
            <ul style={{paddingLeft:"30px"}}>
              <li>
                Contact information, such as name, email address, and phone
                number.
              </li>
              <li>
                Payment information, such as credit card details and billing
                address.
              </li>
              <li>
                Information about the bookings you make through our website,
                such as dates, times, and locations.
              </li>
              <li>
                Information about your preferences and interests, such as the
                types of accommodations or activities you are interested in.
              </li>
             
              <li>
              Information about your device and browser, such as your IP address
              and browser type.
              </li>
            </ul>
            How We Use Your Information We may use your personal information in
            the following ways:
            <ul style={{paddingLeft:"30px"}}>
              <li>
                To provide our services to you, including processing bookings
                and payments.
              </li>
              <li>
                To communicate with you about your bookings and our services.
              </li>
              <li>
                To improve our website and services, such as by analyzing user
                behavior and preferences.
              </li>
              <li>To personalize your experience on our website.</li>{" "}
              <li>To comply with legal obligations.</li>
            </ul>
            How We Protect Your Information We take the security of your
            personal information seriously and have implemented technical and
            organizational measures to protect your data. We use secure servers
            and encryption technology to protect your data in transit, and we
            restrict access to your personal information to authorized personnel
            only. Sharing Your Information We may share your personal
            information with the following types of third parties:
            <ul style={{paddingLeft:"30px"}}>
              <li>
                Service providers who help us process payments and bookings.
              </li>
              <li>
                Business partners who provide services that are complementary to
                ours.
              </li>
              <li>
                Law enforcement or government authorities in response to legal
                requests or obligations.
              </li>
            </ul>
            Your Choices and Rights You have certain rights with respect to your
            personal information, including the right to access, correct, or
            delete your data. You may also have the right to object to or
            restrict certain types of processing. To exercise these rights,
            please contact us using the email provided below.<br></br>
            <span onClick={()=>{
              navigator.clipboard.writeText("rentals@tiovibe.com");
              toast.info("Email Copied")
              window.open('mailto:'+'rentals@tiovibe.com','_self');
            }} style={{color:"#FE4080",cursor:"pointer"}}>rentals@tiovibe.com</span>
            
            </TVParagraph2>

          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
