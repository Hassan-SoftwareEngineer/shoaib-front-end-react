import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import sendIcon from "../../assets/icons/send 1.png";
import heartIcon from"../../assets/icons/heart 1.png";
import map from "../../assets/icons/Maps and Flags.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import rating from '../../assets/icons/rating 1.png'
import { toast } from "react-toastify";


const TulumForm = ({SinglePropertyDetail,setStartDate,setEndDate,startDate,endDate}) => {
  const [selectedDays, setSelectedDays]=useState(0)
  const [isCalendarCIOpen, setCalendarCIOpen] = useState(false);
  const [isCalendarCOOpen, setCalendarCOOpen] = useState(false);

  

 
  const handleStartDateChange = (date) => {
    if (endDate ) {
      setStartDate(date);
      setCalendarCIOpen(false)
    }
   
  };

  const handleEndDateChange = (date) => {
    if (date > startDate) {
      setEndDate(date);
      setCalendarCOOpen(false)
    } else{
      toast.info("Select Correct Date")
    }
  };

  useEffect(()=>{
    const differenceInMilliseconds = Math.abs(startDate.getTime() - endDate.getTime());
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    setSelectedDays(differenceInDays)
  },[endDate,startDate])

  const disablePastDates = ({ date }) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return date < currentDate;
  };


  return (
    <>
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        padding: "16px",
        border: "2px solid pink",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <Typography variant="body1">Property ID: {SinglePropertyDetail?.id}</Typography>
        <Stack direction="row" spacing={1}>
          <img
            src={sendIcon}
            alt="Send"
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src={heartIcon}
            alt="Heart"
            style={{ width: "24px", height: "24px" }}
          />
        </Stack>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ padding: "8px" }}>
        <Typography variant="h4" color='#00E4FE'>{SinglePropertyDetail?.name}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
          <img
            src={map}
            alt="Map"
            style={{ width: "12px", height: "12px" }}
          />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {SinglePropertyDetail?.location}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
          <Typography variant="h5">Bedrooms: {SinglePropertyDetail?.bedrooms}</Typography>
          <Typography variant="h5" sx={{ ml: 2 }}>Bathrooms: {SinglePropertyDetail?.washrooms}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "8px", gap:'8px' }}>
          <Typography variant="h6">4.9</Typography>
          <img src={rating}/>
          <Typography variant="h6" sx={{ ml: 1 }}>“Excellent”</Typography>
          <Typography variant="h6" sx={{ ml: 1 }}>(89 rating)</Typography>
        </Box>
        <Box my={3} style={{ position: "relative" }}>
          <Typography  sx={{ backgroundColor: "rgba(0, 228, 254, 0.32)", padding:'10px', fontSize:'13px',fontFamily:"Inter" }}>Choose dates for accurate prices</Typography>
          <ButtonGroup variant="contained" aria-label="date range" fullWidth sx={{border:"1px solid #000",boxShadow:"none"}}>
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={()=>{setCalendarCOOpen(false);setCalendarCIOpen(!isCalendarCIOpen)}}
              color="info"
              variant="outlined"
              
              sx={{ padding:'10px' , fontSize:'14px',background:"#fff",color:"#000",border:"1px solid transparent",borderColor:"none!important"}}
            >
              Check-In
            </Button>
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={()=>{setCalendarCIOpen(false);setCalendarCOOpen(!isCalendarCOOpen)}}
              color="info"
              variant="outlined"
              sx={{ padding:'10px' , fontSize:'14px',background:"#fff",color:"#000",border:"1px solid transparent"}}
            >
              Check-Out
            </Button>
          </ButtonGroup>
          {isCalendarCIOpen && (
            <div style={{ position: "absolute", top: "100%", zIndex: 999 }}>
              <Calendar value={startDate} onChange={handleStartDateChange} tileDisabled={disablePastDates}/>
            </div>
          )}
          {isCalendarCOOpen && (
            <div style={{ position: "absolute", top: "100%", zIndex: 999 }}>
               <Calendar value={endDate} onChange={handleEndDateChange} minDate={startDate}/>
            </div>
          )}
        </Box>
        <Typography>From : {startDate.toDateString()}</Typography>
        <Typography>To : {endDate.toDateString()}</Typography>
        <Box>
          <Typography variant="h6" sx={{ color: "#FE4080", fontWeight: "bold" }}>${SinglePropertyDetail?.night_rate}/NIGHT</Typography>
          <Box display="flex" justifyContent="space-between" mt={2} alignItems="center" >
            <Typography sx={{fontSize:"16px",fontFamily:"Inter"}}>C$ {SinglePropertyDetail?.night_rate} x {selectedDays} nights</Typography>
            <Typography sx={{ color: "#FE4080", fontWeight: "bold" }}>${SinglePropertyDetail?.night_rate * selectedDays}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Typography sx={{fontSize:"16px",fontFamily:"Inter"}}>Weekly Discount</Typography>
            <Typography sx={{ color: "#FE4080", fontWeight: "bold" }}>C$200</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between"  alignItems="center"  mt={2}>
            <Typography sx={{fontSize:"16px",fontFamily:"Inter"}}>Service fee</Typography>
            <Typography sx={{ color: "#FE4080", fontWeight: "bold" }}>C$200</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center"  my={2}>
            <Typography sx={{ color: "#FE4080", fontWeight: "bold",fontSize:"16px",fontFamily:"Inter" }}>Total</Typography>
            <Typography sx={{ color: "#FE4080", fontWeight: "bold",fontSize:"16px",fontFamily:"Inter" }}>C$600</Typography>
          </Box>
          <Typography variant="h4" SX={{fontSize:"16px",fontWeight:400,fontFamily:"Inter"}}>Cancellation Policy</Typography>
          <Typography variant="body1" sx={{mt:1,fontFamily:"Lexend",fontSize:"9px"}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore ijunj magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit loborti nisl ut
          </Typography>
        </Box>
      </Box>
    </Box>
   </>
  );
};

export default TulumForm;
