import React, { useState } from "react";
import TVHeading from "../../components/TVHeading";
import { Box, Button, Divider, Grid, ListSubheader, MenuItem, capitalize } from "@mui/material";
import profileBG from "../../assets/images/profile/profileBG.png";
import profilemask from "../../assets/icons/imgmask.svg";
import TVTitlePrimary from "../../components/TVTitlePrimary";
import { Form, Formik } from "formik";
import TVTitle from "../../components/TVTitle";
import MDTextField from "../../components/MDTextField";
import TVError from "../../components/TVError";
import * as yup from "yup";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import Footer from "../Footer";
import TVParagraph from "../../components/TVParagraph";
import wifi from "../../assets/icons/Wifi.svg";
import swimming from "../../assets/icons/Swimming.svg";
import doublebed from "../../assets/icons/Doublebed.svg";
import pet from "../../assets/icons/dog.svg";
import bath from "../../assets/icons/Bath2.svg";
import MDTextArea from "../../components/MDTextArea";
import TVTextField from "../../components/TVTextField";
import TVSelect from "../../components/TVSelect";
import SelectionMap from "./SelectLocationMap";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../layouts/Navbar";
import { AddNewProperty } from "../../redux/listingPoperty/listingAPi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "@mapbox/search-js-react";
import TvPrimaryTextField from "../../components/TvPrimaryTextField";
import PhoneInput from "react-phone-input-2";
import { AllMenu } from "../../constants/baseUrl";
import Calendar from 'react-calendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from "moment/moment";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const api =
  "pk.eyJ1Ijoic2hlcmF6NjM4NyIsImEiOiJjbGpwdmRwNHowMG5nM3BwN210ZTJ0eXAwIn0.Bwn1CuW3tgTAwFVby-AWXw";

const AddProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [wific, setWifi] = useState(1);
  const [pool, setPool] = useState(1);
  const [pets, setPets] = useState(1);
  const [additional, setAdditional] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState("Rents");
  const [bedrooms, setBedrooms] = useState(0);
  const [washrooms, setWashrooms] = useState(0);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [location, setlocation] = useState();
  const [continent, setContinent] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [propertyFile,setPropertyFile]=useState();
  const [checkIn,setCheckIn]=useState(new Date());
  const [checkOut,setCheckOut]=useState(new Date());
  const [checkInTime, setcheckInTime]=useState()
  const [checkOutTime, setcheckOutTime]=useState()
  const [bookingOffset,setBookingOffset]=useState()
  const [bookingWidow,setBookingWidow]=useState()
  const [bookinMmax,setBookingMax]=useState()
  const [bookingMin,setBookingMin]=useState()



  const {users}=useSelector((state)=>state?.auth)
  const [isCalendarCIOpen, setCalendarCIOpen] = useState(false);

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const handleDateChange = (newDate) => {
    if (newDate.length === 2) {
      setDateRange(newDate);
      setCheckIn(newDate[0]);
setCheckOut([1]);
      console.log('date range',newDate);

    } else {
      console.error('Invalid date range');
    }
    setCalendarCIOpen(!isCalendarCIOpen)
  };



  const UserName=users?.response?.user_detail?.username

  const {UserCurrnacy} =useSelector(state=>state.listing)

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handlePropertyFile=(e)=>{
    setPropertyFile(e.target.files[0])
  }

  const initialValues = {
    firstName: "",
    houseinfo: "",
    price: "",
  };

  let Schema = yup.object().shape({
    firstName: yup.string().required("Title reuqired"),
    houseinfo: yup.string().required("House Information reuqired"),
  });
  
  const handleTimeChange = (selectedTime) => {
    console.log("Selected time:", selectedTime.format("HH:mm:ss"));
    setcheckInTime(selectedTime.format("HH:mm:ss"))
  };

  const handleTimeOutChange = (selectedTime) => {
    console.log("Selected time:", selectedTime.format("HH:mm:ss"));
    setcheckOutTime(selectedTime.format("HH:mm:ss"))
  };
  
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
            <TVHeading sx={{ color: "#fff" }}>Property Listing</TVHeading>
          </Box>
        </span>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "75%" }, mx: "auto" }}>
        <h4 className="heading-third" style={{ textAlign: "start" }}>
          Property Information
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
              textTransfrom:"capitalize!important"
            }}
          >
            {UserName}
          </TVTitlePrimary>
        </Box>
        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={Schema}
            onSubmit={async (data) => {
              if(!propertyFile){
                toast.info("PROPERTY VERIFICATION DOCUMENT MUST UPLOAD")
              }
              let formData = new FormData();
              formData.append("name", data?.firstName);
              formData.append("location", location);
              formData.append("longitude", markerPosition?.lng);
              formData.append("latitude", markerPosition?.lat);
              formData.append("bedrooms", bedrooms);
              formData.append("washrooms", washrooms);
              formData.append("wifi", wific);
              formData.append("check_in",checkInTime);
              formData.append("check_out", checkOutTime);
              formData.append("night_rate", data?.price);
              formData.append("pool", pool);
              formData.append("category", category);
              formData.append("country", continent);
              formData.append("booking_note", bookingOffset);
              formData.append("booking_offset", bookingWidow);
              formData.append("booking_window", "");
              formData.append("minimum_window_duration",bookingMin);
              formData.append("maximum_booking_duration",  bookinMmax);
              formData.append("booking_import_url", "");
              formData.append("manual", "");
              formData.append("additional", additional);
              formData.append("desc", desc);
              formData.append("phone_no",phoneNo);
              


              images.forEach((img) => {
                formData.append("uploadedImages", img);
              });

              dispatch(AddNewProperty(formData)).then((res) => {
                if(res?.payload?.data?.response?.success == true){
                  toast.success("Property Added");
                  navigate("/");
                }
                if(res?.payload?.data?.response?.success == false){
                  toast.error("Some thing wentwrong, location must added");
                }

              });
            }}
          >
            {({ handleChange, touched, handleBlur, errors, values }) => (
              <Form>
                <Grid container spacing={{ xs: 2, md: 6 }}>
                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      Title
                    </TVTitle>
                    <TvPrimaryTextField
                      name="firstName"
                      value={values?.firstName}
                      placeholder="First Name"
                      sx={{ mt: { xs: 1},py:{md:"20px!important"} }}
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
                      Type
                    </TVTitle>
                    <Grid item xs={12}>
                      <TVSelect
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        sx={{ borderBottom: "1px solid #000" }}
                      >
                        {AllMenu?.map((item) => (
                  [
                    <ListSubheader
                      key={item.MenuName + "Header"}
                      value={item.name}

                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#949090",
                        fontFamily: "Inter",
                      }}
                    >
                      {item.MenuName}
                    </ListSubheader>,
                    item.subMenu.map((subItem) => (
                      <MenuItem
                        key={subItem.val}
                        value={subItem.name}
                        sx={{
                          fontWeight: 500,
                          fontSize: "16px",
                          color: "#949090",
                          fontFamily: "Inter",
                          paddingLeft: "40px"
                        }}
                      >
                        {subItem.name}
                      </MenuItem>
                    )),
                  ]
                ))}
                      </TVSelect>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      IMAGES
                    </TVTitle>
                    <Grid item xs={12}>
                      <div>
                        <input
                          type="file"
                          multiple
                          onChange={handleImageChange}
                          onClick={() => setImages([])}
                        />
                        <div>
                          {images.map((image, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                margin: "10px",
                              }}
                            >
                              <img
                                src={URL.createObjectURL(image)}
                                alt="preview"
                                style={{ width: "80px", height: "80px" }}
                              />
                              <button onClick={() => handleRemoveImage(index)}>
                                remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      House Info
                    </TVTitle>
                    <TvPrimaryTextField
                      name="houseinfo"
                      value={values?.houseinfo}
                      placeholder="House Info"
                      sx={{ mt: { xs: 1,height:{md:"45px"} } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.houseinfo && touched.houseinfo ? (
                      <TVError>{errors.houseinfo}</TVError>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      Phone Number
                    </TVTitle>
                     <PhoneInput
                                    inputProps={{
                                        required: true,
                                    }}
                                    defaultCountry={"pk"}
                                    country="pk"
                                    value={phoneNo}
                                    defaultErrorMessage={true}
                                    onChange={(e) => {
                                        setPhoneNo(e);
                                    }}
                                    isValid={(value, country) => {
                                        if (value.length === 0) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    }}
                                />
                  </Grid>

                  <Grid item xs={12}>
                    <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                      Price
                      <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              paddingLeft: 1.4,
                              color: "#000",
                              width: "max-content",
                              display:"inline-block"
                            }}
                          >
                           ({UserCurrnacy})
                          </TVParagraph> 
                    </TVTitle>
                    <TvPrimaryTextField
                      type="number"
                      name="price"
                      value={values?.price}
                      placeholder="Price"
                      sx={{ mt: { xs: 1,height:{md:"45px"} } }}

                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.price && touched.price ? (
                      <TVError>{errors.price}</TVError>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: { xs: 1, md: 3 },
                      }}
                    >
                      <TVTitle sx={{ fontSize: { lg: "28px!important" } }}>
                        Property Verification
                      </TVTitle>
                      <div style={{ zIndex: "999999", position: "relative",cursor:"pointer" }}>
                        <label htmlFor="upload-file">
                          {
                            <>
                              <MDButtonPrimary sx={{ zIndex: "-1" }}>
                                Upload File
                              </MDButtonPrimary>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  width: "200px",
                                  height: "50px",
                                }}
                              ></span>
                            </>
                          }
                        </label>
                        <input
                          type="file"
                          id="upload-file"
                          style={{ display: "none" }}
                          onChange={handlePropertyFile}
                        />
                        <br />
                      </div>
                    </Box>
                  </Grid>
                </Grid>

                <Grid container sx={{ mt: 4 }}>
                  <Grid item xs={4} sx={{ mt: 2 }}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      OVERVIEW
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            display: "flex ",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={doublebed}
                            alt="bed icon"
                            style={{ width: "23px" }}
                          />
                          <TVParagraph
                            sx={{
                              my: { xs: "8px", md: "9px", lg: "14px" },
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              paddingLeft: 1.4,
                              color: "#000",
                              width: "max-content",
                            }}
                          >
                            BEDROOMS :
                          </TVParagraph>
                          <TVTextField
                            onChange={(e) => setBedrooms(e.target.value)}
                            value={bedrooms}
                            variant="standard"
                            sx={{
                              height: "20px",
                              width: "70px",
                              padding: "0!important",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={bath}
                            alt="bed icon"
                            style={{ width: "23px" }}
                          />
                          <TVParagraph
                            sx={{
                              my: { xs: "8px", md: "9px", lg: "14px" },
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              paddingLeft: 1.4,
                              color: "#000",
                              width: "max-content",
                            }}
                          >
                            BATHROOMS :
                          </TVParagraph>
                          <TVTextField
                            onChange={(e) => setWashrooms(e.target.value)}
                            value={washrooms}
                            variant="standard"
                            sx={{
                              height: "20px",
                              width: "70px",
                              padding: "0!important",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex " }}>
                          <img
                            src={wifi}
                            alt="bed icon"
                            style={{ width: "23px" }}
                          />
                          <Box sx={{ display: "flex" }}>
                            <TVParagraph
                              sx={{
                                textAlign: "start",
                                textTransfrom: "capitalize",
                                px: 1.4,
                                color: "#000",
                                width: "max-content",
                              }}
                            >
                              WIFI :
                            </TVParagraph>
                            <span
                              className="custom-selection"
                              style={{
                                background: wific == 1 ? "#00E4FE" : null,
                                width: "50px",
                                borderRadius: "4px",
                              }}
                              onClick={() => setWifi(1)}
                            >
                              YES
                            </span>
                            <span
                              className="custom-selection"
                              style={{
                                background: wific == 0 ? "#00E4FE" : null,
                                width: "50px",
                                borderRadius: "4px",
                              }}
                              onClick={() => setWifi(0)}
                            >
                              NO
                            </span>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex " }}>
                          <img
                            src={swimming}
                            alt="bed icon"
                            style={{ width: "23px" }}
                          />
                          <Box sx={{ display: "flex" }}>
                            <TVParagraph
                              sx={{
                                textAlign: "start",
                                textTransfrom: "capitalize",
                                px: 1.4,
                                color: "#000",
                                width: "max-content",
                              }}
                            >
                              POOL :
                            </TVParagraph>
                            <span
                              className="custom-selection"
                              style={{
                                background: pool == 1 ? "#00E4FE" : null,
                                width: "50px",
                                borderRadius: "4px",
                              }}
                              onClick={() => setPool(1)}
                            >
                              YES
                            </span>
                            <span
                              className="custom-selection"
                              style={{
                                background: pool == 0 ? "#00E4FE" : null,
                                width: "50px",
                                borderRadius: "4px",
                              }}
                              onClick={() => setPool(0)}
                            >
                              NO
                            </span>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: 1 } }}>
                        <Box sx={{ display: "flex " }}>
                          <img
                            src={pet}
                            alt="bed icon"
                            style={{ width: "23px" }}
                          />
                          <Box sx={{ display: "flex" }}>
                            <TVParagraph
                              sx={{
                                textAlign: "start",
                                textTransfrom: "capitalize",
                                px: 1.4,
                                color: "#000",
                                width: "max-content",
                              }}
                            >
                              PETS :
                            </TVParagraph>
                            <span
                              className="custom-selection"
                              style={{
                                background: pets == 1 ? "#00E4FE" : null,
                                width: "50px",
                                borderRadius: "4px",
                              }}
                              onClick={() => setPets(1)}
                            >
                              YES
                            </span>
                            <span
                              className="custom-selection"
                              style={{
                                background: pets == 0 ? "#00E4FE" : null,
                                width: "50px",
                                borderRadius: "4px",
                              }}
                              onClick={() => setPets(0)}
                            >
                              NO
                            </span>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }} >
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      DESCRIPTION
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                 
                    <MDTextArea
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></MDTextArea>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      Additional Note
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                    <MDTextArea
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                    ></MDTextArea>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      BOOKING OFFSET<br></br>
                      <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              color: "#000",
                              width: "max-content",
                              display:"inline-block"
                            }}
                          >
                           (optional)
                          </TVParagraph> 
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                  <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              width: "max-content",
                              display:"inline-block",
                              fontSize:"1.2rem!important",
                              paddingLeft:"2rem"
                            }}
                          >
                           Set how many days are required prior to the booking date
                          </TVParagraph> 
                    <TvPrimaryTextField
                      value={bookingOffset}
                      onChange={(e) => setBookingOffset(e.target.value)}
                    
                    ></TvPrimaryTextField>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      BOOKING WINDOW <br></br>
                      <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              color: "#000",
                              width: "max-content",
                              display:"inline-block"
                            }}
                          >
                           (optional)
                          </TVParagraph> 
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                  <TVParagraph
                   type="number"
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              width: "max-content",
                              display:"inline-block",
                              fontSize:"1.2rem!important",
                              paddingLeft:"2rem"
                            }}
                          >
                           Set how many days in advance a booking can be made
                          </TVParagraph> 
                    <TvPrimaryTextField
                      value={bookingWidow}
                      onChange={(e) => setBookingWidow(e.target.value)}
                    ></TvPrimaryTextField>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      MINIMUM BOOKING DURATION
                      <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              paddingLeft: 1.4,
                              color: "#000",
                              width: "max-content",
                              display:"inline-block"
                            }}
                          >
                           (optional)
                          </TVParagraph> 
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                  <TVParagraph
                   type="number"
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              width: "max-content",
                              display:"inline-block",
                              fontSize:"1.2rem!important",
                              paddingLeft:"2rem"
                            }}
                          >
                           Set the minimum booking duration in days
                          </TVParagraph> 
                    <TvPrimaryTextField
                      value={bookingMin}
                      onChange={(e) => setBookingMin(e.target.value)}
                      

                    ></TvPrimaryTextField>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      MAXIMUM BOOKING DURATION
                      <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              paddingLeft: 1.4,
                              color: "#000",
                              width: "max-content",
                              display:"inline-block"
                            }}
                          >
                           (optional)
                          </TVParagraph> 
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                  <TVParagraph
                            sx={{
                              textAlign: "start",
                              textTransfrom: "capitalize",
                              width: "max-content",
                              display:"inline-block",
                              fontSize:"1.2rem!important",
                              paddingLeft:"2rem"
                            }}
                          >
                           Set the maximum booking duration in days
                          </TVParagraph> 
                    <TvPrimaryTextField
                      value={bookinMmax}
                      onChange={(e) => setBookingMax(e.target.value)}
                    ></TvPrimaryTextField>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      Select Time
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8} sx={{position:"relative"}}>
                    <Box sx={{display:"flex"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="From" onChange={handleTimeChange}/>
      </DemoContainer>
    </LocalizationProvider>
    <Box  sx={{marginLeft:2}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
      <TimePicker
          label="To"
          onChange={handleTimeOutChange}
         
        />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
   
                    </Box>
                 
                  {/* <Button
              endIcon={<CalendarMonthIcon />}
              onClick={()=>{setCalendarCIOpen(!isCalendarCIOpen)}}
              color="info"
              variant="outlined"
              
              sx={{ padding:'10px' , fontSize:'14px',background:"#fff",color:"#000",border:"1px solid transparent",borderColor:"none!important"}}
            >
             
            </Button>
                  {isCalendarCIOpen && (
            <div style={{ position: "absolute", top: "100%", zIndex: 9999999 }}>
             <Calendar
        selectRange
        onChange={handleDateChange}
        value={dateRange}
      />
            </div>
          )} */}
              
                  </Grid>

                </Grid>
                <Grid container sx={{ mt: {xs:3,md:5} }}>
                  <Grid item xs={4}>
                    <TVTitle
                      sx={{
                        fontSize: {
                          lg: "24px!important",
                          fontWeight: 600,
                          letterSpacing: "0",
                        },
                      }}
                    >
                      Location
                    </TVTitle>
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ mb: 3,height:"40px" }}>
                      <SearchBox
                        accessToken={api}
                        value=""
                        onRetrieve={(val) => {
                          console.log("?????ret", val);
                          console.log(
                            "?????ret lat",
                            val?.features[0]?.properties?.coordinates?.latitude
                          );
                          console.log(
                            "?????ret long ",
                            val?.features[0]?.properties?.coordinates?.longitude
                          );
                          console.log(
                            "?????ret contry",
                            val?.features[0]?.properties?.context?.country
                              ?.country_code
                          );
                          console.log(
                            "?????ret long ",
                            val?.features[0]?.properties?.full_address
                              ? val?.features[0]?.properties?.full_address
                              : val?.features[0]?.properties?.name +
                                  "," +
                                  val?.features[0]?.properties?.place_formatted
                          );
                          setContinent(
                            val?.features[0]?.properties?.context?.country
                              ?.country_code
                          );
                          setMarkerPosition({
                            lat: val?.features[0]?.properties?.coordinates?.latitude || 0,
                            lng: val?.features[0]?.properties?.coordinates?.longitude || 0,
                          });
                          setlocation(
                            val?.features[0]?.properties?.full_address
                              ? val?.features[0]?.properties?.full_address
                              : val?.features[0]?.properties?.name +
                                  "," +
                                  val?.features[0]?.properties?.place_formatted
                          );
                        }}
                      />
                    </Box>
                    <SelectionMap
                      markerPosition={markerPosition}
                      setMarkerPosition={setMarkerPosition}
                      setlocation={setlocation}
                    />
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    mt: { xs: 1, md: 3 },
                    px: { xs: 0, md: "30px" },
                  }}
                >
                  <MDButtonPrimary type="submit">Submit</MDButtonPrimary>
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

export default AddProperty;
