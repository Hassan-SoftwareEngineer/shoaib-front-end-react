import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import termsBG from "../../assets/images/termsBG.png";
import TVHeading from "../../components/TVHeading";
import Navbar from "../../layouts/Navbar";
import TVHeadingSub from "../../components/TVHeadingSub";
import TVParagraph2 from "../../components/TVParagraph2";

const Terms = () => {
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
              <TVHeading sx={{ color: "#fff" }}>Terms and Conditions</TVHeading>
            </Box>
          </span>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "65%" }, mx: "auto" }}>
          <Box sx={{ mb: { xs: 2, md: 8 } }}>
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Terms and Conditions for Tiovibe.com</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Welcome to Tiovibe.com, a booking directory site that connects
              hosts with guests. By accessing or using our website, you agree to
              be bound by the following terms and conditions:
            </TVParagraph2>
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Use of the Site</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              You must be at least 18 years old and have the legal capacity to
              enter into contracts to use Tiovibe.com. You agree to use the site
              in accordance with these terms and conditions and all applicable
              laws and regulations.
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Listing Properties</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              As a host, you may list your property on Tiovibe.com. By listing
              your property, you agree to provide accurate and complete
              information about your property, including availability and
              pricing. In the other hand, by listing your property you accept
              that Tiovibe.com will charge a commission in every booking that
              you made. This commission could be <b>12.5% </b>if you are using the <b>Free
              Host Plan</b>, <b>or 0% for life</b>, if you are using the <b>Premium Vibe Host
              Plan</b>. You are responsible for maintaining the availability and
              pricing information of your property and ensuring that it is up to
              date.
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Booking Properties</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              As a guest, you may book properties listed on Tiovibe.com. By
              booking a property, you agree to pay the total amount listed for
              the booking, including any taxes and fees. You also agree to
              comply with the host’s house rules and any other terms and
              conditions specified by the host.
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Payment</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Tiovibe.com uses a secure payment system to process all
              transactions. Payment must be made in full at the time of booking,
              and you authorize Tiovibe.com to charge your payment method for
              the total amount of the booking.
            </TVParagraph2>
            {/* ------end------- */}

            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Cancellation and Refunds</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Cancellation policies may vary depending on the host’s
              preferences. Guests are responsible for reading and understanding
              the cancellation policy before booking a property. If you cancel a
              booking, any refunds will be subject to the host’s cancellation
              policy.
            </TVParagraph2>
            {/* ------end------- */}

            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Prohibited Activities</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              You agree not to engage in any activity that violates these terms
              and conditions, including but not limited to:
            </TVParagraph2>
            {/* ------end------- */}

            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Using the site for any illegal purpose</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Posting false, misleading, or fraudulent information
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>
              Interfering with or disrupting the site or its servers
            </TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Attempting to bypass any security measures or access any data or
              information that you are not authorized to access.
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Intellectual Property</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              All content on Tiovibe.com, including but not limited to text,
              images, graphics, logos, and trademarks, is owned by Tiovibe.com
              or its licensors and is protected by copyright and other
              intellectual property laws. You may not use any content on the
              site without the express written permission of Tiovibe.com.
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Disclaimer of Warranties</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Tiovibe.com does not warrant that the site will be error-free or
              uninterrupted, and we make no representations or warranties about
              the accuracy, completeness, or reliability of any content or
              information on the site. The site is provided on an “as is” basis.
            </TVParagraph2>
            {/* ------end------- */}

            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Limitation of Liability</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              In no event shall Tiovibe.com be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with the use or inability to use the site, even if we
              have been advised of the possibility of such damages. Our total
              liability to you for any claim arising out of or in connection
              with the use of the site shall not exceed the amount paid by you
              for the booking.
            </TVParagraph2>
            {/* ------end------- */}

            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Indemnification</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              You agree to indemnify and hold Tiovibe.com and its affiliates,
              officers, agents, and employees harmless from any claim or demand,
              including reasonable attorneys’ fees, arising out of or in
              connection with your use of the site or your violation of these
              terms and conditions.
            </TVParagraph2>
            {/* ------end------- */}

            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Governing Law</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              These terms and conditions shall be governed by and construed in
              accordance with the laws of the jurisdiction in which Tiovibe.com
              is located, without giving effect to any choice of law or conflict
              of law provisions.
            </TVParagraph2>
            {/* ------end------- */}
            {/* ------start------- */}
            <TVHeadingSub sx={{marginTop:{xs:"16px",md:"20px"},fontFamily:"Inter!important"}}>Changes to the Terms and Conditions</TVHeadingSub>
            <TVParagraph2
              sx={{
                wordSpacing:"4px",
                fontSize: { xs: ".9rem", md: "1rem", lg: "1.6rem" }, fontFamily:"Inter!important",
                lineHeight:{xs:"16px!important",md:"28px!important",lg:"30px!important"},
                my: 1,
              }}
            >
              Tiovibe.com reserves the right to modify these terms and
              conditions at any time.
            </TVParagraph2>
            {/* ------end------- */}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Terms;
