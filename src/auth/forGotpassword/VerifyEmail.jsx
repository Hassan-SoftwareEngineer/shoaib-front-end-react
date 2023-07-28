import { Alert, Grid, Radio } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/images/signupImg.png";
import theme from "../../assets/Theme";
import MDHeading from "../../components/MDHeading";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from 'react-router-dom';
import apiInstance from "../../Api/axios";
import TVSmallicons from "../../assets/icons/TVSmallicons.svg";


const VerifyEmail = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ error: false, errorMSg: "",severity:"info" });

  const { token: urlToken } = useParams();

  const token = urlToken ? urlToken.replace("token=", "") : "notoken";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://34.205.32.176:3000/api/users/accountConfirmation/${token}`);
        console.error('Error fetching data:', response);

        if (response?.data?.response?.success === false) {
            setError((prevState) => ({
                ...prevState,
                error: true,
                severity:"error",
                errorMsg: "Please Try Again Token Expire"
              }));
              toast.error("Verification Failed");
        }
        if(response?.data?.response?.success == true
        ){
            setError((prevState) => ({
                ...prevState,
                error: true,
                severity:"success",
                errorMsg: "User Verication SuccessFull"
              }));
              toast.success("User Verify Success Full");

              navigate("/signin")
            
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (urlToken) {
      fetchData();
    }
  }, [urlToken, token]);




  return (
    <>
      <Box sx={{ height: "100vh", height: "100svh" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={signupImg}
              alt="login"
              style={{ height: "100%", width: "100%", objectFit: "fill" }}
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              background: `${theme.palette.white.main}`,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "70%",
                height: "100vh",
                margin: "auto",
                py: 6,
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
               <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          mt: { xs: 1, md: 3 },
                          img: {
                            "&:hover": {
                              cursor: "pointer",
                            },
                          },
                        }}
                      >
                        <img src={TVSmallicons} alt="login"></img>
                        <MDHeading sx={{ mt: 5 }}>USER VERIFICATION</MDHeading>
                       
                      </Box>
             {error.error && (
               <Alert
                            sx={{
                              fontSize: "14px",
                              wdith: "100%",
                              mx: "auto",
                              mt: 2,
                            }}
                            severity={error?.severity}
                            >
                            {error.errorMsg}
                          </Alert>
                        )}
                        <Box sx={{display:"flex",justifyContent:"center",mt:5}}>
                        <Link to="/signin">Back to login</Link>

                        </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};




export default VerifyEmail