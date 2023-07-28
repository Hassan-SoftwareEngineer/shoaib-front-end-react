import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import DefaultUser from "../assets/images/DefaultUser.png";
import fillheart from "../assets/icons/fillheart.svg"
import briefcase from "../assets/icons/briefcasered.svg"
import usericon from "../assets/icons/user.svg"
import useMediaQuery from '@mui/material/useMediaQuery';
import LoginIcon from "../assets/icons/loginIcon.svg"

// import theme from "../../Theme/theme";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import MDButton from "../components/MDButton";
import tiovibe from "../assets/icons/tiovibe.svg"
import { useTheme } from "@mui/styles";
import useAuth from "../hooks/checkAuth";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
const drawerWidth = 240;

const Navbar = (props) => {

    const logoStyle = {

        wordWrap: "no-rape",
        cursor: "pointer"
    };
    const theme = useTheme();

    
    const {users}=useSelector((state)=>state?.auth)
    const is_visitor=users?.response?.user_detail?.is_visitor
    
    const [selected, setSelected] = useState("");
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation()
    const navigate = useNavigate();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const matches1 = useMediaQuery(theme.breakpoints.down('lg'));
    const currentLoginData = JSON.parse(localStorage.getItem("currentLoginData"));
    const isLogIn = useAuth();

    const [anchorCurrancy, setAnchorCurrancy] = useState(null);
    const [openCurrancy, setOpenCurrancy] = useState(false);
  const [selectedCurrnancy,setSelectedCurrnancy]=useState("English")
    const handlesetCurrancyClick = (event) => {
      setAnchorCurrancy(event.currentTarget);
      setOpenCurrancy(true);
    };
  
    const handlesetCurrancyClose = (item) => {
        if(item == "Packages"){
            navigate("/my-plan")
        }
        if( item == "Profile"){
            navigate("/user-profile")
        } 
        if(item == "Signout"){
            localStorage.clear();
            navigate('/')
        }
        if(item == "Properties"){
            navigate('/user-all-properties')
        }

      setSelectedCurrnancy(item)
      setOpenCurrancy(false);
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

    useEffect(() => {
        if (location) {
            location?.pathname?.includes("north") && setSelected("north");
            location?.pathname?.includes("central") && setSelected("central");
            location?.pathname?.includes("south") && setSelected("south");
            location?.pathname?.includes("carib") && setSelected("carib");
            location?.pathname?.includes("europe") && setSelected("europe");
        }
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: "flex", height: { xs: "80px", sm: "unset" } }}>
                <CssBaseline />
                <AppBar
                    component="nav"
                    sx={{
                        background: "#fff",
                        boxShadow: "none",
                        py: 2,
                        px: { md: 0, xl: 3 },
                        maxWidth: "1440px",
                        mx: "auto",
                        left: "unset",
                        right: "unset"
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: "block", lg: "none" } }}
                        >
                            <MenuIcon sx={{ color: "#FE4080" }} />
                        </IconButton>
                        <Box sx={{ flex: 1 }}>
                            <Toolbar
                                disableGutters={true}
                                sx={{
                                    backgroundColor: "white",
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={logoStyle} onClick={() => {
                                    navigate('/')
                                }}>
                                    <img src={tiovibe} className="site-icon" />

                                </Typography>

                                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                                    <Link
                                        className={`first after ${selected == "north" ? "active" : ""}`}
                                        onClick={() => setSelected("north")}
                                        to="/north-listing"
                                    >
                                        North America
                                    </Link>
                                    <Link
                                        className={`first after ${selected == "central" ? "active" : ""
                                            }`}
                                        to="/central-listing"
                                        onClick={() => setSelected("central")}
                                    >
                                        Central America
                                    </Link>
                                    <Link
                                        className={`first after ${selected == "south" ? "active" : ""
                                            }`}
                                        to="/south-listing"
                                        onClick={() => setSelected("south")}
                                    >
                                        South America
                                    </Link>
                                    <Link
                                        className={`first after ${selected == "carib" ? "active" : ""
                                            }`}
                                        to="/carib-listing"
                                        onClick={() => setSelected("carib")}
                                    >
                                        Caribbean
                                    </Link>
                                    <Link
                                        className={`first after ${selected == "europe" ? "active" : ""
                                            }`}
                                        // to="/lab"
                                        to="/europe-listing"
                                        onClick={() => setSelected("europe")}
                                    >
                                    Europe
                                        {/* Lab Colab */}
                                    </Link>
                                </Box>
                                {matches1 === true && (isLogIn ?
<>
                                    <Button
                                        variant="outlined"
                                        sx={{

                                            color: "#FE4080",
                                            textTransform: "capitalize",
                                            background: "#fff",
                                            border: "none",
                                            fontFamily: "Montserrat",
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            fontSize: "12px",
                                            marginRight: "20px",
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            '&:hover': {
                                                backgroundColor: "#fff",
                                                boxShadow: "none",
                                                border: "none"
                                            },
                                        }}
                                        id="basic-button-currancy"
                                        aria-controls={openCurrancy ? 'basic-menu-currancy' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openCurrancy ? 'true' : undefined}
                                        onClick={handlesetCurrancyClick}

                                    >
                                        <img
                                            src={usericon}
                                            alt="user"
                                            style={{ height: "36px", width: "36px", marginRight: "10px" }}
                                        />
                                        {currentLoginData?.user_name ? currentLoginData?.user_name?.slice(0, 5) : "Name"}
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
        <MenuItem onClick={()=>handlesetCurrancyClose("Packages")} sx={{color: selectedCurrnancy == "Packages" ? "#FE4080" : "#000"}}>Packages</MenuItem>
        <MenuItem onClick={()=>handlesetCurrancyClose("Profile")} sx={{color: selectedCurrnancy == "Profile" ? "#FE4080" : "#000"}}>Profile</MenuItem>
        <MenuItem onClick={()=>handlesetCurrancyClose("Properties")} sx={{color: selectedCurrnancy == "Properties" ? "#FE4080" : "#000"}}>Properties List</MenuItem>
        <MenuItem onClick={()=>handlesetCurrancyClose("Signout")} sx={{color: selectedCurrnancy == "Signout" ? "#FE4080" : "#000"}}>Signout</MenuItem>
      </Menu>
</>
                                    :
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#0F1727D9",
                                            textTransform: "capitalize",
                                            background: "#fff",
                                            border: "none",
                                            fontFamily: "Montserrat",
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            fontSize: "12px",
                                            marginRight: "20px",
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            '&:hover': {
                                                backgroundColor: "#fff",
                                                boxShadow: "none",
                                                border: "none"
                                            },
                                        }}
                                        onClick={() => navigate("/signin")}
                                    >
                                        <img
                                            src={LoginIcon}
                                            alt="user"
                                            style={{ height: "24px", width: "24px", marginRight: "10px" }}
                                        />
                                        SignIn
                                    </Button>
                                )}
                                {matches ?
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >

                                        {(isLogIn ?
<>
                                            <Button
                                                variant="outlined"
                                                sx={{

                                                    color: "#FE4080",
                                                    textTransform: "capitalize",
                                                    background: "#fff",
                                                    border: "none",
                                                    fontFamily: "Montserrat",
                                                    fontStyle: "normal",
                                                    fontWeight: 700,
                                                    fontSize: "16px",
                                                    marginRight: "20px",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "center",
                                                    '&:hover': {
                                                        backgroundColor: "#fff",
                                                        boxShadow: "none",
                                                        border: "none",
                                                    },
                                                }}
                                                // onClick={() => navigate("/user-profile")}
                                                id="basic-button-currancy"
                                                aria-controls={openCurrancy ? 'basic-menu-currancy' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={openCurrancy ? 'true' : undefined}
                                                onClick={handlesetCurrancyClick}
        
                                            >
                                                <img
                                                    src={usericon}
                                                    alt="user"
                                                    style={{ height: "36px", width: "36px", marginRight: "10px" }}
                                                />
                                                {currentLoginData?.user_name ? currentLoginData?.user_name?.slice(0, 5) : "Name"}

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
                                            <MenuItem onClick={()=>handlesetCurrancyClose("Packages")} sx={{color: selectedCurrnancy == "Packages" ? "#FE4080" : "#000"}}>Packages</MenuItem>
                                            <MenuItem onClick={()=>handlesetCurrancyClose("Profile")} sx={{color: selectedCurrnancy == "Profile" ? "#FE4080" : "#000"}}>Profile</MenuItem>
                                            <MenuItem onClick={()=>handlesetCurrancyClose("Properties")} sx={{color: selectedCurrnancy == "Properties" ? "#FE4080" : "#000"}}>Properties List</MenuItem>
                                            <MenuItem onClick={()=>handlesetCurrancyClose("Signout")} sx={{color: selectedCurrnancy == "Signout" ? "#FE4080" : "#000"}}>Signout</MenuItem>
                                          </Menu>
                                          </>
                                            :
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    color: "#0F1727D9",
                                                    textTransform: "capitalize",
                                                    background: "#fff",
                                                    border: "none",
                                                    fontFamily: "Montserrat",
                                                    fontStyle: "normal",
                                                    fontWeight: 700,
                                                    fontSize: "16px",
                                                    marginRight: "20px",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "center",
                                                    '&:hover': {
                                                        backgroundColor: "#fff",
                                                        boxShadow: "none",
                                                        border: "none",
                                                        color: "#FE4080",
                                                    },
                                                }}
                                                onClick={() => navigate("/signin")}

                                            >
                                                <img
                                                    src={LoginIcon}
                                                    alt="user"
                                                    style={{ height: "28px", width: "28px", marginRight: "10px" }}
                                                />
                                                SignIn
                                            </Button>
                                        )}
                                        <img src={briefcase} alt="icon" onClick={() => { setSelected("cart"); navigate('/cart') }} style={{cursor:"pointer"}}/>
                                       
                                       
                                       {is_visitor !== 1 &&
                                       
                                       <MDButton sx={{
                                        borderRadius: "4px", fontSize: "12px!important", px: "10px!important", boxShadow: "none", marginLeft: "14px",

                                    }}
                                        onClick={() => {
                                            setSelected("/addproperty");


                                            isLogIn ? navigate('/add-property') : navigate('/signin')
                                        }}

                                    >List a Property</MDButton>
                                       } 
                                        <MDButton sx={{
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            fontFamily: "Montserrat",
                                            color: "#0F1727D9",
                                            fontSize: "13px!important",
                                            background: "#fff", borderRadius: "4px", px: "10px!important", boxShadow: "none", marginLeft: "20px",
                                            '&:hover': {
                                                backgroundColor: "#fff",
                                                boxShadow: "none",
                                            },
                                        }}
                                            onClick={() => { setSelected("wishlist"); navigate('/wishlist') }}

                                        >
                                            <img src={fillheart} alt="icon" style={{ marginRight: "6px" }} />
                                            Wish List</MDButton>
                                    </Box> : null}

                            </Toolbar>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: "block", md: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                        }}
                    >
                        <Link
                            className={`first after drawer-nav ${selected == "north" ? "active" : ""
                                }`}
                            onClick={() => setSelected("north")}
                            to="/north-listing"
                        >
                            North America
                        </Link>
                        <Link
                            className={`first after drawer-nav ${selected == "central" ? "active" : ""
                                }`}
                            to="/north-listing"
                            onClick={() => setSelected("central")}
                        >
                            Central America
                        </Link>
                        <Link
                            className={`first after drawer-nav ${selected == "south" ? "active" : ""
                                }`}
                            to="/south-listing"
                            onClick={() => setSelected("south")}
                        >
                            South America
                        </Link>
                        <Link
                            className={`first after drawer-nav ${selected == "carib" ? "active" : ""
                                }`}
                            to="/carib-listing"
                            onClick={() => setSelected("staff")}
                        >
                            Caribbean
                        </Link>
                        <Link
                            className={`first after drawer-nav ${selected == "europe" ? "active" : ""
                                }`}
                            to="/europe-listing"
                            onClick={() => setSelected("europe")}
                        >
                            Europe
                        </Link>
                        {is_visitor !== 1 &&
                        
                        <Link
                        className={`first after drawer-nav ${selected == "lab" ? "active" : ""
                            }`}
                        to={isLogIn ? "/add-property" : '/signin'}
                        onClick={() => { setSelected("/addproperty") }}
                    >
                        List a Property
                    </Link>
                        }
                       
                        <Link
                            className={`first after drawer-nav ${selected == "lab" ? "active" : ""
                                }`}
                            to="/wishlist"
                            onClick={() => setSelected("wishlist")}
                        >
                            Wish List
                        </Link>


                    </Drawer>
                </Box>
                <Box sx={{ height: "110px" }}></Box>
            </Box>
        </>
    );
};
Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;
// {
//   "username":"",
//   "email":"",
//   "password":"Bilal12345"
// }