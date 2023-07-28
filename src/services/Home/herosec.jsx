import { Box, Button, Grid, ListSubheader, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import bgImg from "../../assets/images/home/heroBG.png";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import TVSelect from "../../components/TVSelect";
import TVTextField from "../../components/TVTextField";
import { MapApiKey } from "../../context/Constant";
import { SearchBox } from "@mapbox/search-js-react";
import { FilterProperty, NorthAmericaProperty } from "../../redux/listingPoperty/listingAPi";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import currancyIcon from "../../assets/icons/currency.svg"
import translateIcon from "../../assets/icons/translate.svg"
import { useEffect } from "react";
import { SetUserCurrnacy } from "../../redux/listingPoperty/listingSlice";


const Herosec = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState();
  const [location, setLocation] = useState();
  const [category, setCategory] = useState("All Categories");

  const AllMenu = [
    {
      MenuName: "Rents",
      subMenu: [
        { name: "Appartments", val: 1 },
        { name: "Room", val: 2 },
        { name: "Houses", val: 3 },
      ],
    },
    {
      MenuName: "Experiences",
      subMenu: [
        { name: "Hiking/Trekking", val: 5 },
        { name: "Kayaking/Rafting", val: 6 },
        { name: "Tours", val: 7 },
      ],
    },
  ];

  const CallApi = () => {
    dispatch(
      FilterProperty({
        body: {
          skip: 0,
          top: 10,
          location: location,
          tage: keyWord,
        },
      })
    );
    navigate("/filter-data")
  }
  
  const [anchorLanguage, setAnchorLanguage] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedLang,setSelectedLang]=useState("English")

  const handleClick = (event) => {
    setAnchorLanguage(event.currentTarget);
    setOpen(true);
  };

  const handleLanguageClose = (lang="English") => {
    setSelectedLang(lang)
    setOpen(false);
  };

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      if (anchorLanguage && !anchorLanguage.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener to the document when the menu is open
    if (open) {
      document.addEventListener('click', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open, anchorLanguage]);


  const [anchorCurrancy, setAnchorCurrancy] = useState(null);
  const [openCurrancy, setOpenCurrancy] = useState(false);
const [selectedCurrnancy,setSelectedCurrnancy]=useState("English")
  const handlesetCurrancyClick = (event) => {
    setAnchorCurrancy(event.currentTarget);
    setOpenCurrancy(true);
  };

  const handlesetCurrancyClose = (lang="USD") => {
    setSelectedCurrnancy(lang)
    setOpenCurrancy(false);
    dispatch(SetUserCurrnacy(lang))
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorCurrancy && !anchorCurrancy.contains(event.target)) {
        setOpenCurrancy(false);
      }
    };

    if (openCurrancy) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openCurrancy, anchorCurrancy]);



  return (
    <Box sx={{ position: "relative", minHeight: { xs: "600px", md: "540px" }, mt: { md: "60px", backgroundColor: "rgba(0, 0, 0, 0.4)" } }}>
      <img
        src={bgImg}
        alt="BackgroundImgage"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: -1,

        }}
      />
      <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", position:"absolute",right:"100px",top:"50px",zIndex:1}}>
      
      <Button
        id="basic-button-currancy"
        sx={{ color: "#fff", fontSize: "10px", fontFamily: "Inter" }}
        aria-controls={openCurrancy ? 'basic-menu-currancy' : undefined}
        aria-haspopup="true"
        aria-expanded={openCurrancy ? 'true' : undefined}
        onClick={handlesetCurrancyClick}
      >
        Currancy <img src={currancyIcon} alt="translate" style={{ marginLeft: "10px" }} />
      </Button>
      <Menu
        id="basic-menu-currancy"
        anchorEl={anchorCurrancy}
        open={openCurrancy}
        onClose={handlesetCurrancyClose}
        sx={{"& .MuiMenuItem-root": {
          fontSize: "10px", fontFamily: "Inter"
      }}}
        MenuListProps={{
          'aria-labelledby': 'basic-button-currancy',
        }}
        anchorOrigin={{
          vertical: 'bottom', // Change to 'top', 'center', or 'bottom'
          horizontal: 'center', // Change to 'left', 'center', or 'right'
        }}
        transformOrigin={{
          vertical: 'top', // Change to 'top', 'center', or 'bottom'
          horizontal: 'center', // Change to 'left', 'center', or 'right'
        }}

      >
        <MenuItem onClick={()=>handlesetCurrancyClose("USD")} sx={{color: selectedCurrnancy == "USD" ? "#FE4080" : "#000"}}>USD</MenuItem>
        <MenuItem onClick={()=>handlesetCurrancyClose("CAD")} sx={{color: selectedCurrnancy == "CAD" ? "#FE4080" : "#000"}}>CAD</MenuItem>
        <MenuItem onClick={()=>handlesetCurrancyClose("REAL")} sx={{color: selectedCurrnancy == "REAL" ? "#FE4080" : "#000"}}>REAL</MenuItem>
        <MenuItem onClick={()=>handlesetCurrancyClose("EURO")} sx={{color: selectedCurrnancy == "EURO" ? "#FE4080" : "#000"}}>EURO</MenuItem>
      </Menu>
        
      
      <Button
        sx={{ color: "#fff", fontSize: "10px", fontFamily: "Inter" }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Languages <img src={translateIcon } alt="currency" style={{ marginLeft: "10px" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorLanguage}
        open={open}
        onClose={handleLanguageClose}
        anchorOrigin={{
          vertical: 'bottom', // Change to 'top', 'center', or 'bottom'
          horizontal: 'center', // Change to 'left', 'center', or 'right'
        }}
        transformOrigin={{
          vertical: 'top', // Change to 'top', 'center', or 'bottom'
          horizontal: 'center', // Change to 'left', 'center', or 'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{"& .MuiMenuItem-root": {
          fontSize: "10px", fontFamily: "Inter"
      }}}
      >
        <MenuItem onClick={()=>handleLanguageClose("English")} sx={{color: selectedLang == "English" ? "#FE4080" : "#000"}}>English</MenuItem>
        <MenuItem onClick={()=>handleLanguageClose("Spanish")} sx={{color: selectedLang == "Spanish" ? "#FE4080" : "#000"}}>Spanish</MenuItem>
        <MenuItem onClick={()=>handleLanguageClose("French")} sx={{color: selectedLang == "French" ? "#FE4080" : "#000"}}>French</MenuItem>
        <MenuItem onClick={()=>handleLanguageClose("Portuguese")} sx={{color: selectedLang == "Portuguese" ? "#FE4080" : "#000"}}>Portuguese</MenuItem>
      </Menu>

       

      </Box>

      <Box sx={{ width: { xs: "95%", md: "85%", lg: "75%" }, mx: "auto", pt: { xs: "16px", md: "30px", lg: "50px" } }}>
        <h4 className="heading-sec" style={{ textAlign: "start", color: "#fff", }}>Experience the joy of travel with tio vibe</h4>

        <h4
          className="heading-sec"
          style={{
            fontSize: " 22px",
            fontWeight: "500",
            color: "#fff",
            textAlign: "start",
            marginBottom: "20px",
            marginTop: "20px"


          }}
        >
          Join our community of adventurers today and let us be your guide{" "}
          <br></br>
          to an amazing vacation experience!.
        </h4>
        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", flexWrap: 'wrap', my: { xs: "10px", md: "16px", lg: "30px" } }}>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/downtown") }}>DOWNTOWN</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/luxury") }}>LUXURY</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/minimal-list") }}>MINIMALLIST</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/rural") }}>RURAL</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/rustic") }}>RUSTIC</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/seaside") }}>SEASIDE</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/spacious") }}>SPACIOUS</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.3rem!important", borderRadius: "4px", padding: "0px 10px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/filter-property/stylish") }}>STYLISH</MDButtonPrimary>
          <MDButtonPrimary sx={{ fontSize: "1.6rem!important", borderRadius: "8px", padding: "6px 20px!important", marginRight: "10px", marginBottom: "10px" }} onClick={() => { navigate("/contact-us") }}>Contact</MDButtonPrimary>

        </Box>
        <Box sx={{ mb: { xs: "10px", md: "16px", lg: "30px" } }}>
          <Grid container sx={{ background: "#fff", borderRadius: "8px" }}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <TVTextField
                id="outlined-basic"
                label="Keyword"
                variant="outlined"
                placeholder="Keyword"
                onChange={(e) => { setKeyWord(e.target.value) }}
                sx={{
                  height: "50px",
                  marginTop: ".16rem",
                  borderRight: {
                    xs: `1px solid transparent`,
                    md: `1px solid #CECCCC`,
                  },
                  mb: { xs: 1, md: 0 },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <SearchBox
                theme={{
                  variables: {
                    width: "100%",
                    height: "100%",
                    unit: "1.6rem",
                    border: "none!important",
                    boxShadow: "none",
                    ":focus": {
                      border: "none!important"
                    }
                  }
                }}
                accessToken={MapApiKey}
                value="Search"
                onRetrieve={(val) => {
                  setLocation({ lat: val?.features[0]?.properties?.coordinates?.latitude, lng: val?.features[0]?.properties?.coordinates?.longitude })
                }}
              />

            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <TVSelect
                defaultValue={category}
                value={category}
                sx={{
                  borderRight: {
                    xs: `1px solid transparent`,
                    md: `1px solid #CECCCC`,
                  },
                  borderLeft: {
                    xs: `1px solid transparent`,
                    md: `1px solid #CECCCC`,
                  },
                }}
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  setCategory(selectedCategory);
                }}
              >
                <MenuItem
                  value="All Categories"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#949090",
                    fontFamily: "Inter",
                  }}
                >
                  All Categories
                </MenuItem>
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
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <MDButtonPrimary
                onClick={CallApi}
                sx={{
                  borderRadius: "4px",
                  fontSize: "18px!important",
                  width: "100%",
                  height: "53px",
                }}
              >
                Search Property
              </MDButtonPrimary>
            </Grid>
          </Grid>
        </Box>
        <h4 className="heading-sec" style={{ color: "#fff", letterSpacing: "2px", marginTop: "40px" }}>Search for Vibes world wide</h4>

      </Box>
    </Box>
  );
};

export default Herosec;
