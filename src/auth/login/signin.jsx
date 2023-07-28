import { Alert, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MDButton from "../../components/MDButton";
import MDHeading from "../../components/MDHeading";
import MDTextField from "../../components/MDTextField";
import * as yup from "yup";
import { Formik, Form } from "formik";
import TVError from "../../components/TVError";
import { useDispatch } from "react-redux";
import TVTitle from "../../components/TVTitle";
import FaceBookIcon from "../../assets/icons/Facebook.svg";
import GoogleIcon from "../../assets/icons/Gmail.svg";
import MailIcon from "../../assets/icons/Letters.svg";
import TVSmallicons from "../../assets/icons/TVSmallicons.svg";
import loginImg from "../../assets/images/loginImg.png";
import TVTitlePrimary from "../../components/TVTitlePrimary";
import { login } from "./authSlice";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [error ,setError]=useState({error:false,errorMSg:""})

  const initialValues = {
    username: "",
    password: "",
  };

  let Schema = yup.object().shape({
    username: yup.string().required("UserName / Email reuqired"),
    password: yup.string().required("Password reuqired"),
  });

  return (
    <>
      <Box sx={{ height: "100vh", height: "100svh" }}>
        <Grid container>
        {matches ? 
          <Grid item xs={0} sm={0} md={6}>
            <img
              src={loginImg}
              alt="login"
              style={{ height: "100%", width: "100%", objectFit: "fill" }}
            ></img>
          </Grid> : null}
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
                width: {sx:"90%", md:"70%"},
                height: "100vh",
                margin: "auto",
                py: 6,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={Schema}
                onSubmit={async (data) => {
                  const body = {
                    username: data?.username,
                    password: data?.password,
                  };
                  await dispatch(login(body)).then((res) => {
                    if (res?.payload?.response?.success == false) {
                      setError(prevState => ({
                        ...prevState,
                        error: true,
                        errorMsg:res?.payload.response?.message[0]?.invalid_email
                      }));
                    }

                    if (res?.type == "login/fulfilled" && res?.payload?.response?.success == true) {
                        localStorage.setItem("currentLoginData",JSON.stringify(res?.payload?.response?.user_detail?.token_detail))
                        localStorage.setItem("auth",true);
                        toast.success("login Successfully")
                        navigate("/")
                    }
                  });
                }}
              >
                {({ handleChange, touched, handleBlur, errors, values }) => (
                  <Form>
                    <Box>
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
                        <MDHeading sx={{ mt: 5 }}>SIGN IN</MDHeading>                        
                      </Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TVTitle sx={{ mt: 5 }}>username / email</TVTitle>
                          <MDTextField
                            name="username"
                            value={values?.username.trim()}
                            // placeholder="Enter Email"
                            // sx={{ mt: { xs: 2, md: 5 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            valid={errors.username}
                            touch={touched.username}
                          />
                          {errors.username && touched.username ? (
                            <TVError>{errors.username}</TVError>
                          ) : null}
                        </Grid>

                        <Grid item xs={12}>
                          <TVTitle>password</TVTitle>
                          <MDTextField
                            name="password"
                            type="password"
                            value={values?.password.trim()}
                            // placeholder="Enter Password"
                            // sx={{ mt: { xs: 2, md: 4 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password ? (
                            <TVError>{errors.password}</TVError>
                          ) : null}
                           <TVTitlePrimary
                          sx={{
                            fontSize: "1.2rem!important",
                            display:"block",
                            textAlign:"end",
                            cursor: "pointer",
                          }}
                          onClick={()=>navigate('/forget-password')}
                        >
                            FORGOT PASSWORD
                          </TVTitlePrimary>
                         
                        </Grid>
                        <Grid item xs={12}>
                        { error.error && 
                     <Alert sx={{fontSize:"14px",wdith:"100%"}} severity="error">{error.errorMsg}</Alert>
                       }
                        </Grid>
                      </Grid>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mt: { xs: 1, md: 3 },
                        }}
                      >
                        <MDButton
                          onClick={() => {
                            // navigate("/")
                          }}
                          type="submit"
                        >
                          SUBMIT
                        </MDButton>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mt: { xs: 1, md: 3 },
                        }}
                      >
                        <TVTitlePrimary>OR With</TVTitlePrimary>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mt: { xs: 1, md: 3 },
                          img: {
                            "&:hover": {
                              cursor: "pointer",
                            },
                          },
                        }}
                      >
                        <LoginSocialFacebook
                          appId="774942011081172"
                          onResolve={(response) => {
                            // setProfile(response?.data);
                          }}
                          onReject={(err) => {
                            console.log("erroe", err);
                          }}
                        >
                          <img src={FaceBookIcon} />
                        </LoginSocialFacebook>
                        <LoginSocialGoogle
                          client_id={
                            "321904078802-5f512e9fhd9t4pbbiodpmt5h6e74frdn.apps.googleusercontent.com"
                          }
                          scope="openid profile email"
                          discoveryDocs="claims_supported"
                          access_type="offline"
                          onResolve={({ provider, data }) => {
                            console.log("provider", provider);
                            console.log("data", data);
                          }}
                          onReject={(err) => {
                            console.log("erroe", err);
                          }}
                        >
                          <img src={GoogleIcon} style={{ margin: "0 26px" }} />
                        </LoginSocialGoogle>
                        <img src={MailIcon} />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mt: { xs: 1, md: 3 },
                        }}
                      >
                        <TVTitlePrimary
                          sx={{
                            fontSize: {xs:"1rem!important",md:"1.8rem!important"},
                            color: "#000",
                            fontWeight: 500,
                          }}
                        >
                          OR CREATE NEW ACCOUNT
                          <TVTitlePrimary
                            sx={{
                              fontSize: {xs:"1rem!important",md:"1.8rem!important"},
                              px: 1.6,
                              cursor: "pointer",
                            }}
                            onClick={() => navigate("/signup")}
                          >
                            SIGN UP{" "}
                          </TVTitlePrimary>
                        </TVTitlePrimary>
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignIn;
