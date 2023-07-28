import { Alert, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Listingcard from "./listingcard";
import Footer from "../Footer";
import TVHeading from "../../components/TVHeading";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../layouts/Navbar";
import mycartBG from "../../assets/images/mycart.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TVHeadingSub from "../../components/TVHeadingSub";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import TVError from "../../components/TVError";
import * as yup from "yup";
import { Formik, Form } from "formik";
import MDTextField from "../../components/MDTextField";
import TVTitle from "../../components/TVTitle";
import { useEffect } from "react";
import moment from "moment/moment";
import { BookProperty, CheckPropertyAvailable } from "../../redux/listingPoperty/listingAPi";
import { toast } from "react-toastify";
const Cart = () => {
    const dispatch = useDispatch();
    const AllCart = useSelector((state) => state.listing.AllCart);
    const [selectedDateTo, setSelectedDateTo] = useState(null);
    const [ids, setIds] = useState([]);
    const [selectedDateFrom, setSelectedDateFrom] = useState(null);
    const [experience, setExperience] = useState([1]);
    const handleDateChangeTo = (date) => {
        setSelectedDateTo( date);
    };

    const handleDateChangeFrom = (date) => {
        setSelectedDateFrom(date);
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


    const initialValues = {
        firstname:"",
        lastname:"",
        cardNumber:"",
        exe:"",
        cvv:""
      };
    
      let Schema = yup.object().shape({
        firstname: yup.string().required("First Name Reuqired"),
        lastname: yup.string().required("Last Name Reuqired"),
        cardNumber: yup.string().required("Card Number Reuqired"),
        exe: yup.string().required("Expiry Reuqired"),
        cvv: yup.string().required("CVV Reuqired"),

      });

      useEffect(() => {
        const extractedIds = AllCart && AllCart.map(item => item.id);
        setIds(extractedIds);
      }, [AllCart]);


      const ConfirmBooking = async () => {
        try {
          const promises = ids.map(async (id) => {
            const body = {
              property_id: id,
              booked_from_date: moment(selectedDateFrom).format('YYYY-MM-DD'),
              booked_to_date: moment(selectedDateTo).format('YYYY-MM-DD'),
            };
            const res = await dispatch(CheckPropertyAvailable(body));
            const start = res?.payload?.data?.response?.booked_from_date;
            const end = res?.payload?.data?.response?.booked_to_date;
            const isBooked = res?.payload?.data?.response?.is_booked;
      
            if (res?.payload?.data?.response?.message === 'No record found') {
              return { id, start: null, end: null, isBooked: 2 };
            } else {
              return { id, start, end, isBooked };
            }
          });
      
          const results = await Promise.all(promises);

          if (results.length !== 0) {
            alert("hy")
            await Promise.all(
              results.map(async (item) => {
                if (item?.isBooked == 2) {
                  const bodySecond = {
                    property_id: item?.id,
                    booked_from_date: moment(selectedDateFrom).format('YYYY-MM-DD'),
                    booked_to_date: moment(selectedDateTo).format('YYYY-MM-DD'),
                    is_manual: 0,
                  };
                  try {
                    await dispatch(BookProperty(bodySecond));
                    toast.success("Property Booked Successfully")
                  } catch (error) {
                    console.error('Error:', error);
                    // Handle the error if needed
                  }
                }
              })
            );
          }
          console.log(results); 
        } catch (error) {
          console.error('Error:', error);
        }
      };


    return (
        <>
            <Navbar />
            <Box sx={{ width: "100%", mx: "auto" }}>
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
                        src={mycartBG}
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
                            <TVHeading sx={{ color: "#fff" }}>My Bag</TVHeading>
                        </Box>
                    </span>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "65%" }, mx: "auto" }}>
                    <Box sx={{ mb: { xs: 2, md: 8 } }}>
                        <h4 className="heading-third" style={{ textAlign: "start" }}>
                            My Bag
                        </h4>
                    </Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            {AllCart.length !== 0 ? (
                                AllCart.map((item) => {
                                    return <Listingcard Data={item} />;
                                })
                            ) : (
                                <h4 className="heading-third">No item in Bag</h4>
                            )}
                        </Grid>
                    </Grid>
                    <Box sx={{ mb: { xs: 2, md: 8 } }}>
                        <h4 className="heading-third" style={{ textAlign: "start", fontSize: "26px" }}>
                            Information
                        </h4>
                        <Grid container spacing={3} sx={{ mt: 1 }}>
                            <Grid xs={12} md={2} item sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <TVHeadingSub>
                                    Select Time
                                </TVHeadingSub>
                            </Grid>
                            <Grid xs={12} md={5} item>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={["DateTimePicker"]}>
                                        <DateTimePicker label="From"
                                            value={selectedDateFrom}
                                            onChange={handleDateChangeFrom}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid xs={12} md={5} item>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={["DateTimePicker"]}>
                                        <DateTimePicker label="To"
                                            value={selectedDateTo}
                                            onChange={handleDateChangeTo}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 3 }}>
                            <h4 className="heading-third" style={{ textAlign: "start", fontSize: "26px" }}>
                                PURPOSE
                            </h4>
                            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                                {/* <span  className="custom-selection" >Experience</span> */}
                                <span
                                    className="custom-selection"
                                    style={{
                                        background: experience?.includes(1)
                                            ? "#FE4080"
                                            : null,
                                        color: experience?.includes(1)
                                            ? "#fff"
                                            : null,
                                    }}
                                    onClick={() => handlExperienceClick(1)}
                                >
                                    Rents

                                </span>
                                <span
                                    className="custom-selection"
                                    style={{
                                        background: experience?.includes(2)
                                            ? "#FE4080"
                                            : null,
                                        color: experience?.includes(2)
                                            ? "#fff"
                                            : null,
                                    }}
                                    onClick={() => handlExperienceClick(2)}
                                >
                                    Host
                                </span>
                                <span
                                    className="custom-selection"
                                    style={{
                                        background: experience?.includes(3)
                                            ? "#FE4080"
                                            : null,
                                        color: experience?.includes(3)
                                            ? "#fff"
                                            : null,
                                    }}
                                    onClick={() => handlExperienceClick(3)}
                                >
                                    Tour
                                </span>
                            </Box>
                        </Box>

                        <Box sx={{ border: "2px solid #00E4FE", px: 5,py:4, borderRadius: "8px",width:{xs:"100%",md:"70%",margin:"auto"} }}>
                            <TVHeadingSub sx={{ color: "#FE4080", textTransform: "uppercase", textAlign: "center" }}>
                                Order summary
                            </TVHeadingSub>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading">
                                    Product
                                </span>
                                <span className="bag-heading">
                                    Subtotal
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Weekly Discount
                                </span>
                                <span className="bag-heading-primary">
                                    $200
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Service Fee
                                </span>
                                <span className="bag-heading-primary">
                                    $100
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Total
                                </span>
                                <span className="bag-heading-primary" style={{ color: "#FE4080" }}>
                                    $100
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Would you like travel insurance
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Travel Insurance
                                </span>
                                <span className="bag-heading-primary" style={{ color: "#FE4080" }}>
                                    $100
                                </span>
                            </Box> <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                <span className="bag-heading-primary">
                                    Sub-Total
                                </span>
                                <span className="bag-heading-primary" style={{ color: "#FE4080" }}>
                                    $100
                                </span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 3 }}>
                                <MDButtonPrimary
                                    sx={{
                                        borderRadius: "4px",
                                        fontSize: "14px!important",
                                        padding: "3px 16px!important",

                                    }}
                                    onClick={ConfirmBooking}
                                >
                                    Proceed to Checkout
                                </MDButtonPrimary>
                            </Box>
                        </Box>
                        <Box sx={{my:3}}>

                        <h4 className="heading-third" style={{ textAlign: "start", fontSize: "26px",textTransform:"uppercase" }}>
                        Checkout Process
                        </h4>
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
                 
                }}
              >
                {({ handleChange, touched, handleBlur, errors, values }) => (
                  <Form>
                    <Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TVTitle sx={{ mt: 5 }}>username / email</TVTitle>
                          <MDTextField
                            name="firstname"
                            value={values?.firstname.trim()}
                            // placeholder="Enter Email"
                            // sx={{ mt: { xs: 2, md: 5 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            valid={errors.firstname}
                            touch={touched.firstname}
                          />
                          {errors.firstname && touched.firstname ? (
                            <TVError>{errors.firstname}</TVError>
                          ) : null}
                        </Grid>

                        <Grid item xs={12}>
                          <TVTitle>password</TVTitle>
                          <MDTextField
                            name="lastname"
                            value={values?.lastname.trim()}
                            // placeholder="Enter Password"
                            // sx={{ mt: { xs: 2, md: 4 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.lastname && touched.lastname ? (
                            <TVError>{errors.lastname}</TVError>
                          ) : null}
                        </Grid>
                        <Grid item xs={12}>
                          <TVTitle>Card Number</TVTitle>
                          <MDTextField
                            name="cardNumber"
                            value={values?.cardNumber.trim()}
                            // placeholder="Enter Password"
                            // sx={{ mt: { xs: 2, md: 4 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.cardNumber && touched.cardNumber ? (
                            <TVError>{errors.cardNumber}</TVError>
                          ) : null}
                        </Grid>
                        <Grid item xs={12}>
                          <TVTitle>Expiray </TVTitle>
                          <MDTextField
                            name="password"
                            value={values?.exe.trim()}
                            // placeholder="Enter Password"
                            // sx={{ mt: { xs: 2, md: 4 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.exe && touched.exe ? (
                            <TVError>{errors.exe}</TVError>
                          ) : null}
                        </Grid>
                        <Grid item xs={12}>
                          <TVTitle>CVV</TVTitle>
                          <MDTextField
                            name="cvv"
                            value={values?.cvv.trim()}
                            // placeholder="Enter Password"
                            // sx={{ mt: { xs: 2, md: 4 } }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.cvv && touched.cvv ? (
                            <TVError>{errors.cvv}</TVError>
                          ) : null}
                        </Grid>
                      </Grid>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Cart;
