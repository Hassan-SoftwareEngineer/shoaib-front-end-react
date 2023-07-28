import React, { useEffect, useState } from "react";
import TVHeading from "../../components/TVHeading";
import { Box, Divider, Grid, MenuItem } from "@mui/material";
import profileBG from "../../assets/images/profile/profileBG.png";
import profilemask from "../../assets/icons/imgmask.svg";
import TVTitlePrimary from "../../components/TVTitlePrimary";
import { Form, Formik } from "formik";
import TVTitle from "../../components/TVTitle";
import MDTextField from "../../components/MDTextField";
import TVError from "../../components/TVError";
import * as yup from "yup";
import TVParagraph2 from "../../components/TVParagraph2";
import TVSelect from "../../components/TVSelect";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import Footer from "../Footer";
import Navbar from "../../layouts/Navbar";
import { AddUserProfile } from "../../redux/listingPoperty/listingAPi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [language, setLanguage] = useState([1]);
  const [experience, setExperience] = useState([1]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(-1);
  const [identify, setIdentify] = useState();

  const handleIdentificationDoc = (e) => {
    if (e.target.files.length) {
      setIdentify(e.target.files[0]);
    }
  };

  const handleLanguageClick = (lang) => {
    if (language.includes(lang)) {
      setLanguage((prevLanguage) =>
        prevLanguage.filter((item) => item !== lang)
      );
    } else {
      setLanguage((prevLanguage) => [...prevLanguage, lang]);
    }
  };

  const handlExperienceClick = (exe) => {
    if (experience.includes(exe)) {
      setExperience((prevLanguage) =>
        prevLanguage.filter((item) => item !== exe)
      );
    } else {
      setExperience((prevLanguage) => [...prevLanguage, exe]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  let Schema = yup.object().shape({
    firstName: yup.string().required("First Name reuqired"),
    lastName: yup.string().required("Last Name reuqired"),
  });

  const url = "https://restcountries.com/v3.1/all";
  const AllCountry = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setCountries(result);
  };

  useEffect(() => {
    AllCountry();
  }, []);

  const sortedCountries = countries.slice().sort((a, b) => {
    const nameA = a?.name?.common?.toLowerCase();
    const nameB = b?.name?.common?.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return (
    <div>
      <Navbar />

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
          src={profileBG}
          alt="media"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
        <span className="become-host" style={{ borderRadius: "0" }}>
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
            <TVHeading sx={{ color: "#fff" }}>Profile</TVHeading>
          </Box>
        </span>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "75%" }, mx: "auto" }}>
        <h4 className="heading-third" style={{ textAlign: "start" }}>
          Complete Your Profile
        </h4>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            mb: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              height: { xs: "150px", lg: "222px" },
              width: { xs: "150px", lg: "222px" },
              borderRadius: "120px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <label htmlFor="upload-button">
                {
                  <>
                    <img
                      src={image?.preview}
                      alt="m"
                      style={{
                        position: "absolute",
                        zIndex: -1,
                        borderRadius: "120px",
                      }}
                    />

                    <img src={profilemask} style={{ width: "100%" }} />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#4848487D",
                        position: "absolute",
                        bottom: "32px",
                        left: "63px",
                      }}
                    >
                      Select Image
                    </span>
                  </>
                }
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <br />
            </div>
          </Box>
          <TVTitlePrimary
            sx={{
              color: "#000",
              borderBottom: "1px solid #00E4FE",
              px: "20px",
              marginBottom: "-60px",
              marginLeft: "30px",
            }}
          >
            washon ston
          </TVTitlePrimary>
        </Box>
        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={Schema}
            onSubmit={async (data) => {
              if(!identify){
                toast.info("IDENTIFICATION DOCUMENT MUST UPLOAD")
                return null
              }
              let formData = new FormData();
              formData.append("first_name", data?.firstName);
              formData.append("last_name", data?.lastName);
              formData.append("country", country);
              formData.append("profile_pic", image?.raw && image?.raw);
              formData.append("identity_doc", identify);
              language.forEach((lang) => {
                formData.append("languages", lang);
              });
              experience.forEach((exp) => {
                formData.append("services", exp);
              });

              for (const value of formData.values()) {
                console.log(value);
              }

              dispatch(AddUserProfile(formData)).then((res) => {
                console.log("data", res);
                if (res?.payload?.data?.response?.success == true) {
                  toast.success("User Data Addeded");
                  navigate("/");
                }
                if (res?.payload?.data?.response?.success == false) {
                  toast.error("Some thing wentwrong");
                }
              });
            }}
          >
            {({ handleChange, touched, handleBlur, errors, values }) => (
              <Form>
                <Grid container spacing={{ xs: 2, md: 6 }}>
                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      First Name
                    </TVTitle>
                    <MDTextField
                      name="firstName"
                      value={values?.firstName}
                      placeholder="First Name"
                      sx={{ mt: { xs: 1 } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      valid={errors.firstName}
                      touch={touched.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                      <TVError>{errors.firstName}</TVError>
                    ) : null}
                  </Grid>

                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      Last Name
                    </TVTitle>
                    <MDTextField
                      name="lastName"
                      value={values?.lastName}
                      placeholder="Last Name"
                      sx={{ mt: { xs: 1 } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName ? (
                      <TVError>{errors.lastName}</TVError>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                        flexWrap: "wrap",
                      }}
                    >
                      <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                        Languages
                      </TVTitle>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* <span  className="custom-selection" >Experience</span> */}
                        <span
                          className="custom-selection"
                          style={{
                            background:
                              language?.includes(1) == 1 ? "#00E4FE" : null,
                          }}
                          onClick={() => handleLanguageClick(1)}
                        >
                          English
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: language?.includes(4)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handleLanguageClick(4)}
                        >
                          Spanish
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: language?.includes(5)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handleLanguageClick(5)}
                        >
                          French
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: language?.includes(7)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handleLanguageClick(7)}
                        >
                          Portuguese
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: language?.includes(8)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handleLanguageClick(8)}
                        >
                          German
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: language?.includes(9)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handleLanguageClick(9)}
                        >
                          Italian
                        </span>
                      </Box>
                    </Box>
                    <Divider sx={{ background: "#000", my: 1 }}></Divider>
                  </Grid>
                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      Identification Document
                    </TVTitle>
                    <TVParagraph2 sx={{ px: { md: 4 }, mt: 2, mb: 1 }}>
                      To become a Tio Vibe host, you are required to upload an
                      official identification document. This is solely for
                      security purposes and to maintain the integrity of our
                      platform. Please note that all documents are kept strictly
                      confidential and will not be shared with any third party.
                    </TVParagraph2>
                    <Box sx={{ mt: 4, pl: 4 }}>
                      <div class="upload-btn-wrapper">
                        <button class="btn">Select File</button>
                        <input
                          type="file"
                          name="myfile"
                          onChange={handleIdentificationDoc}
                        />
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                        flexWrap: "wrap",
                      }}
                    >
                      <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                        Services
                      </TVTitle>
                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {/* <span  className="custom-selection" >Experience</span> */}
                        <span
                          className="custom-selection"
                          style={{
                            background: experience?.includes(1)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handlExperienceClick(1)}
                        >
                          Experiences
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: experience?.includes(2)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handlExperienceClick(2)}
                        >
                          Rents
                        </span>
                        <span
                          className="custom-selection"
                          style={{
                            background: experience?.includes(3)
                              ? "#00E4FE"
                              : null,
                          }}
                          onClick={() => handlExperienceClick(3)}
                        >
                          Transports
                        </span>
                      </Box>
                    </Box>
                    <Divider sx={{ background: "#000", my: 1 }}></Divider>
                  </Grid>
                  <Grid item xs={12}>
                    <TVSelect
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      sx={{ borderBottom: "1px solid #000" }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200, // Set the maximum height here (adjust as needed)
                          },
                        },
                      }}
                    >
                      <MenuItem value={-1}>Country</MenuItem>
                      {countries &&
                        sortedCountries?.map((item) => {
                          return (
                            <MenuItem
                              value={item?.name?.common}
                            >{`${item?.name?.common} , ${item?.name?.official}`}</MenuItem>
                          );
                        })}
                    </TVSelect>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex" }}>
                      <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                        Profile Information
                      </TVTitle>
                      <TVParagraph2
                        sx={{
                          cursor: "pointer",
                          textAlign: "center",
                          width: "200px",
                          color: "#00000024",
                          fontSize: "18px!important",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Optional
                      </TVParagraph2>
                    </Box>
                    <TVParagraph2 sx={{ px: { md: 4 }, mt: 2, mb: 1 }}>
                      To become a Tio Vibe host, you are required to upload an
                      official identification document. This is solely for
                      security purposes and to maintain the integrity of our
                      platform. Please note that all documents are kept strictly
                      confidential and will not be shared with any third party.
                    </TVParagraph2>
                    <Divider sx={{ background: "#000", my: 3 }}></Divider>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: { xs: 1, md: 3 },
                    px: { xs: 0, md: "30px" },
                  }}
                >
                  <MDButtonPrimary type="submit">Save Changes</MDButtonPrimary>
                  <TVParagraph2
                    sx={{
                      cursor: "pointer",
                      textAlign: "end",
                      color: "#00000094",
                    }}
                  >
                    Delete Account
                  </TVParagraph2>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default CompleteProfile;
