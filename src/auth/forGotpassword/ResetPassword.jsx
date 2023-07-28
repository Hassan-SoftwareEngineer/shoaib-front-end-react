import { Alert, Grid, Radio } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../../assets/images/signupImg.png";
import theme from "../../assets/Theme";
import MDButton from "../../components/MDButton";
import MDHeading from "../../components/MDHeading";
import MDTextField from "../../components/MDTextField";
import * as yup from "yup";
import { Formik, Form } from "formik";
import TVError from "../../components/TVError";
import { useDispatch } from "react-redux";
import TVTitle from "../../components/TVTitle";
import { toast } from "react-toastify";
import { ResetPasswordFun } from "../login/authSlice";
import axios from "axios";
import { useParams } from 'react-router-dom';
import apiInstance from "../../Api/axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState({ error: false, errorMSg: "",severity:"info" });
  const [userData, setUserData] = useState({ userDetail: "", jwtCode: "" });


  const [responseState, setResponseState] = useState(null);
  const { token: urlToken } = useParams();
  const token = urlToken.replace("token=", "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://34.205.32.176:3000/api/users/resetpassword/${token}`);
        if (response?.data?.response?.success === false) {
            setError((prevState) => ({
                ...prevState,
                error: true,
                severity:"error",
                errorMsg: response?.data?.response?.message
              }));
        }
        if(response?.data?.response?.success == true
        ){
            setError((prevState) => ({
                ...prevState,
                error: true,
                severity:"success",
                errorMsg: "Enter Your New Password"
              }));

            setUserData((prevState) => ({
                ...prevState,
                userDetail: response?.data?.response?.user_detail,
                jwtCode: response?.data?.response?.reset_password_token,
              }));
              
            
        }
        setResponseState(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data only if the token exists
    if (urlToken) {
      fetchData();
    }
  }, [urlToken, token]);


  const makeAxiosRequest = async (password) => {
    try {
      const requestData = {
        username:userData?.userDetail?.username,
        verificationcode:userData.jwtCode,
        password:password,
      };

      const response = await apiInstance.post("users/confirmresetpassword", requestData);
      console.log("paswweos",response)
      if(response?.data?.response?.success == true){
        toast.success("Password SuccessFully Updated")
        navigate("/signin")
      }
      if(response?.data?.response?.success == false){
        toast.error("some thing went wrong Please Resend Email")
        navigate("/forget-password")

      }

    } catch (error) {
      console.error('Error making the request:', error);
    }
  };


  const initialValues = {
    password: "",
    confirm_password: "",
  };

  let Schema = yup.object().shape({
    password: yup.string().required("Password reuqired"),
    confirm_password: yup
      .string()
      .label("confirm password")
      .required("Confirm Password reuqired")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

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
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={Schema}
                onSubmit={async (data) => {
                  makeAxiosRequest(data?.password)
                }}
              >
                {({ handleChange, touched, handleBlur, errors, values }) => (
                  <Form>
                    <Box>
                      <MDHeading
                        sx={{ mb: { xs: 3, md: 5 }, display: "block" }}
                      >
                        SIGN UP
                      </MDHeading>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TVTitle>password</TVTitle>
                          <MDTextField
                            name="password"
                            type="password"
                            value={values?.password.trim()}
                            
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password ? (
                            <TVError>{errors.password}</TVError>
                          ) : null}
                        </Grid>
                        <Grid item xs={12}>
                          <TVTitle>CONFIRM PASSWORD</TVTitle>
                          <MDTextField
                            name="confirm_password"
                            type="password"
                            value={values?.confirm_password.trim()}
                            // placeholder="Enter Password"
                            // sx={{ mt: { xs: 2, md: 4 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.confirm_password &&
                          touched.confirm_password ? (
                            <TVError>{errors.confirm_password}</TVError>
                          ) : null}
                        </Grid>
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



export default ResetPassword