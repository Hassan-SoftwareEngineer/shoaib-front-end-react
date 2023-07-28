import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("auth");
  const currentLoginData = JSON.parse(localStorage.getItem("currentLoginData"));
  
  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/"; // Redirect to the desired location after logout
  };

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Get the current time in seconds
    console.log("current time",currentTime)
    console.log("current time exp ",currentLoginData.exp)
    if (currentLoginData && currentLoginData.exp && currentLoginData.exp < currentTime) {
      localStorage.setItem("auth",false);
      logoutUser();
    }
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;