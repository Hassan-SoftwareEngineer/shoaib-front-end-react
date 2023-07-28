import { Alert, Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import userImg from "../../assets/icons/user.svg";
import star from "../../assets/icons/star 1.png";
import language from "../../assets/icons/Subtract.png";
import message from "../../assets/icons/chat 1.png";
import flag from "../../assets/icons/flag 1.png"
import { useDispatch } from "react-redux";
import { CheckPropertyAvailable } from "../../redux/listingPoperty/listingAPi";
import moment from "moment/moment";
import { useState } from "react";
import useAuth from "../../hooks/checkAuth";
import { toast } from "react-toastify";
import { ImgUrl } from "../../constants/baseUrl";

const InstantBooking = ({ startDate, endDate, SinglePropertyDetail, UserDetail }) => {
  const dispatch = useDispatch()
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const [booked, setBooked] = useState()
  const isLogIn = useAuth();
  const loginStatus = isLogIn;
  const modifiedString = UserDetail?.owner_detail[0]?.profile_pic.replace(/,\./g, ",").split(",");


  const handleCheckPropery = () => {

    let body = { property_id: SinglePropertyDetail?.id, booked_from_date: moment(startDate).format('YYYY-MM-DD'), booked_to_date: moment(endDate).format('YYYY-MM-DD') }
    dispatch(CheckPropertyAvailable(body)).then((res) => {
      console.log("MMMMMMMM",res)
      setStart(res?.payload?.data?.response?.booked_from_date)
      setEnd(res?.payload?.data?.response?.booked_to_date)
      setBooked(res?.payload?.data?.response?.is_booked)
      if (res?.payload?.data?.response?.message == "No record found") {
        setBooked(2)
      }
    })



  }

  return (
    <div>
      <Box
        sx={{
          width: "400px",
          margin: "auto",
          padding: "16px",
        }}
      >
        {booked == 1 &&

          <Alert severity="warning">
            From :{moment(start).format('YYYY-MM-DD')} <br></br>
            TO :{moment(end).format('YYYY-MM-DD')}
          </Alert>
        }
        {booked == 2 &&
          <Alert severity="success">
            Property Available For Booking
          </Alert>
        }

        <Button variant="contained" onClick={handleCheckPropery} fullWidth sx={{ marginTop: "16px", background: "rgba(115, 96, 255, 1)", padding: '10px', fontSize: '22px', fontFamily: "Inter", fontWeight: 700 }}>
          CHECK AVAILABILITY
        </Button>
        <Typography variant="h4" textAlign='center' sx={{ fontWeight: 700, fontSize: "23px", fontFamily: "Inter", mt: 2 }}>For Instant Booking</Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter Email"
          sx={{ marginTop: "16px" }}
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter Phone Number"
          sx={{ marginTop: "16px" }}
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Property ID"
          sx={{ marginTop: "16px" }}
        />` `
        <Button variant="contained" fullWidth sx={{ marginTop: "16px", background: "rgba(115, 96, 255, 1)", padding: '10px', fontSize: '22px', fontFamily: "Inter", fontWeight: 700 }}>
          Book Now
        </Button><Button variant="contained" fullWidth sx={{ marginTop: "16px", background: "rgba(115, 96, 255, 1)", padding: '10px', fontSize: '22px', fontFamily: "Inter", fontWeight: 700 }}>
          Contact Host
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", }}
      >
        <img src={star} />
        <Typography variant="body1">Write a Review</Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 3, gap: "8px", }}
      >
        <img src={flag} />
        <Typography variant="body1">Write a Review</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Avatar
          src={modifiedString ? ImgUrl + modifiedString : userImg}
          alt="User"
          sx={{ width: "64px", height: "64px" }}
        />
        <Box my={2}>
          <Typography variant="h4">{UserDetail?.owner_detail && UserDetail?.owner_detail[0]?.name}</Typography>
        </Box>

        <Typography variant="h6">Member since January 22, 2023</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: 2
          }}
        >
          <img src={language} />
          <Typography variant="h6">Language  :

            {Array.isArray(UserDetail?.owner_languages) ? UserDetail?.owner_languages?.map((item) => {
              return (
                " " + item?.name + ", "
              )
            }): "English"}

          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "70px",
            marginTop: 2
          }}
        >
          <Typography variant="h6">Listing {UserDetail?.owner_property_count}</Typography>
          <img src={message} />
        </Box>
      </Box>
    </div>
  );
};

export default InstantBooking;
