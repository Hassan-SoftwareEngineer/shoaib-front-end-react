import logo from "./logo.svg";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/Theme";

import Login from "./auth/login/signin";
import SignUp from "./auth/signup/signup";
import PrivateRoutes from "./utils/private-routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./auth/forGotpassword/forGotPassword";
import Home from "./services/Home";
import CompleteProfile from "./services/CompleteProfile";
import AddProperty from "./services/AddProperty";
import EuropePage from "./services/EuropeListing";
import CaribListing from "./services/CaribListing";
import SouthListing from "./services/SouthListing";
import CentralPage from "./services/CentralListing";
import NorthListing from "./services/NorthListingPage";
import WishList from "./services/WishList";
import Cart from "./services/Cart";
import Terms from "./services/Info/term";
import PrivacyPolicy from "./services/Info/privacypolicy";
import ContactUs from "./services/Info/contactus";
import PropertydDetail from "./services/PropertydDetail";
import PropertyByTypeListing from "./services/PropertyByTypeListing";
import Hostplan from "./services/HostPlan";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CurrentCordinates } from "./redux/listingPoperty/listingSlice";
import ResetPassword from "./auth/forGotpassword/ResetPassword";
import PurchasePlan from "./services/PurchasePlan";
import MyListings from "./services/MyListing";
import MyPlanCard from "./services/MyPlan/MyPlanCard";
import MyPlan from "./services/MyPlan";
import FilterData from "./services/FilterData";
// import NotFound from "./services/NotFound"; 
import "react-phone-input-2/lib/material.css";
import VerifyEmail from "./auth/forGotpassword/VerifyEmail";

function App() {
  const isAuthenticated = localStorage.getItem("auth");
const dispatch=useDispatch()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
dispatch(CurrentCordinates({latitude:position.coords.latitude,longitude:position.coords.longitude}))
          // setLatitude(position.coords.latitude);
          // setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="main-app-body">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {isAuthenticated ? (
              <Route element={<PrivateRoutes />}>
                <Route path="opd" element="hy" />
                <Route path="opd/all-patient" element="hy" />
                <Route path="indoor" element="hy" />
              </Route>
            ) : (
              <>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/purcahse-plan" element={<PurchasePlan />} />
                <Route path="/hostplan" element={<Hostplan />} />

              </>
            )}

            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/north-listing" element={<NorthListing />} />
            <Route path="/central-listing" element={<CentralPage />} />
            <Route path="/south-listing" element={<SouthListing />} />
            <Route path="/carib-listing" element={<CaribListing />} />
            <Route path="/europe-listing" element={<EuropePage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user-profile" element={<CompleteProfile />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/property-detail/:id" element={<PropertydDetail />} />
            <Route path="/filter-property/:name" element={<PropertyByTypeListing />} />
            <Route path="/hostplan" element={<Hostplan />} />
            <Route path="/purcahse-plan" element={<PurchasePlan />} />

            <Route path="/user-all-properties" element={<MyListings />} />
            <Route path="/filter-data" element={<FilterData />} />
            <Route path="/my-plan" element={<MyPlan />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/verified/:token" element={<VerifyEmail />} />

            

            

            {/* Handle Not Found */}
            <Route path="*" element="Not Found" />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
