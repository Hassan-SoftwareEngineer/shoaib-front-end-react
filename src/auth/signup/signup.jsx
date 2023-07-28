import { Alert, Grid, Radio } from "@mui/material";
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
import { signup } from "./signupSlice";
import TVTitle from "../../components/TVTitle";
import FaceBookIcon from "../../assets/icons/Facebook.svg";
import GoogleIcon from "../../assets/icons/Gmail.svg";
import MailIcon from "../../assets/icons/Letters.svg";
import TVTitlePrimary from "../../components/TVTitlePrimary";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState({ error: false, errorMSg: "" });

  const [selectedValue, setSelectedValue] = React.useState(0);
  const handleRadioChange = (event) => {
    console.log(">>>>", event.target.value);
    setSelectedValue(event.target.value);
  };

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  };

  let Schema = yup.object().shape({
    username: yup.string().required("UserName reuqired"),
    email: yup.string().email().required("Email reuqired"),
    phone: yup.string().required("Phone Number reuqired"),
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

                  const body = {
                    username: data?.username,
                    password: data?.password,
                    phone_number: data?.phone,
                    is_visitor: selectedValue,
                    email: data?.email?.toLowerCase(),
                  };
                  await dispatch(signup(body)).then((res) => {
                    if (res?.payload?.response?.success == false) {
                      setError((prevState) => ({
                        ...prevState,
                        error: true,
                        errorMsg: res?.payload.response?.message,
                      }));
                    }
                    if (res?.payload?.response?.success == true) {
                        toast.success("Email send Please Check Yor Email");
                        navigate("/signin")
                      }
                    console.log("insight function", res);
                  });
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
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <TVTitle>User Type</TVTitle>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                            }}
                          >
                            <TVTitle>Host</TVTitle>
                            <Radio
                              checked={selectedValue == 0}
                              onChange={handleRadioChange}
                              value={0}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                },
                                color: "#FF0787",
                                "&.Mui-checked": {
                                  color: "#FF0787",
                                },
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                            }}
                          >
                            <TVTitle>Visitor</TVTitle>

                            <Radio
                              checked={selectedValue == 1}
                              onChange={handleRadioChange}
                              value={1}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                },
                                color: "#FF0787",
                                "&.Mui-checked": {
                                  color: "#FF0787",
                                },
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <TVTitle>username</TVTitle>
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
                          <TVTitle>email</TVTitle>
                          <MDTextField
                            name="email"
                            value={values?.email.trim()}
                            // placeholder="Enter Email"
                            // sx={{ mt: { xs: 2, md: 5 } }}
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
                          <TVTitle>PHONE NUMBER</TVTitle>
                          {/* <MDTextField
                            name="phone"
                            value={values?.phone.trim()}
                            // placeholder="Enter Phone"
                            // sx={{ mt: { xs: 2, md: 5 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            valid={errors.phone}
                            touch={touched.phone}
                          /> */}
                           <PhoneInput
                                    inputProps={{
                                        required: true,
                                        onBlur:handleBlur,
                                        valid:errors.phone,
                                        touch:touched.phone,
                                        name:"phone",
                                        onChange:handleChange
                                    }}
                                    defaultCountry={"pk"}
                                   
                                    country="pk"
                                    
                                    value={values?.phone}
                                    defaultErrorMessage={true}
                                    onChange={handleChange}
                                    isValid={(value, country) => {
                                        if (value.length === 0) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    }}
                                />
                          {errors.phone && touched.phone ? (
                            <TVError>{errors.phone}</TVError>
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
                            severity="error"
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
                            fontSize: "1.8rem!important",
                            color: "#000",
                            fontWeight: 500,
                          }}
                        >
                          If You Already have
                          <TVTitlePrimary
                            sx={{
                              fontSize: "1.8rem!important",
                              px: 1.6,
                              cursor: "pointer",
                            }}
                            onClick={() => navigate("/signin")}
                          >
                            SIGN IN{" "}
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

export default SignUp;
