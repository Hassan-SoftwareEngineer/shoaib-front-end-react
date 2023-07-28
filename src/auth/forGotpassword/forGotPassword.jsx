import { Alert, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
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
import TVSmallicons from "../../assets/icons/TVSmallicons.svg";
import loginImg from "../../assets/images/loginImg.png";
import { ForGotPassword } from "../login/authSlice";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error ,setError]=useState({error:false,errorMSg:"",severity:"info"})


  const initialValues = {
   email:""
  };

  let Schema = yup.object().shape({
    email: yup.string().email().required("Email reuqired"),
  });

  return (
    <>
      <Box sx={{ height: "100vh", height: "100svh" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={loginImg}
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
                  const body = {
                    username: data?.email,
                  };
                  await dispatch(ForGotPassword(body)).then((res) => {
                    if(res?.payload?.response?.success == false){
                      setError(prevState => ({
                        ...prevState,
                        error: true,
                        severity:"error",
                        errorMsg:res?.payload.response?.message[0]?.invalid_email
                      }));
                    }

                    if(res?.payload?.response?.err?.success == false){
                      setError(prevState => ({
                        ...prevState,
                        error: true,
                        severity:"error",
                        errorMsg:"Enter Correct Email"
                      }));
                    }
                    if(res?.payload?.response?.success == true){
                      setError(prevState => ({
                        ...prevState,
                        error: true,
                        severity:"success",
                        errorMsg:res?.payload.response?.message
                      }));
                      toast.success(res?.payload.response?.message)
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
                        <MDHeading sx={{ mt: 5 }}>FORGOT PASSWORD</MDHeading>
                      </Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TVTitle sx={{ mt: 5 }}>Enter Email </TVTitle>
                          <MDTextField
                            name="email"
                            value={values?.email.trim()}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            valid={errors.email}
                            touch={touched.email}
                          />
                          {errors.email && touched.email ? (
                            <TVError>{errors.email}</TVError>
                          ) : null}
                        </Grid>
                        <Grid item xs={12}>
                        {error.error && (
                          <Alert
                            sx={{
                              fontSize: "14px",
                              wdith: "100%",
                              mx: "auto",
                            }}
                            severity={error?.severity}
                          >
                            {error.errorMsg}
                          </Alert>
                        )}
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
                          SEND
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

export default ForgetPassword;
