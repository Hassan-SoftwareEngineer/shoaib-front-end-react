import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import apiInstance from "../../Api/axios"
import apiInstanceV2 from "../../Api/axios2";


//#######################################  Hospital ###########################################

export const NorthAmericaProperty = createAsyncThunk("NorthAmericaProperty", async (params) => {
    let result = await apiInstance.post(`listproperties`,params?.body).then(function (response) {
        if(response?.status >= 200 && response?.status < 300){
        }
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});


export const FilterProperty = createAsyncThunk("FilterProperty", async (params) => {
    let result = await apiInstance.post(`listproperties`,params?.body).then(function (response) {
        if(response?.status >= 200 && response?.status < 300){
        }
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});


export const AssignPackageToUser = createAsyncThunk("AssignPackageToUser", async (params) => {
    let result = await apiInstanceV2.post(`assignpackage`,params).then(function (response) {
        if(response?.status >= 200 && response?.status < 300){
        }
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const UserListProperty = createAsyncThunk("UserListProperty", async (params) => {
    let result = await apiInstanceV2.post(`listuserproperties`,params?.body).then(function (response) {
        if(response?.status >= 200 && response?.status < 300){
        }
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});


export const GetSingleProperty = createAsyncThunk("GetSingleProperty", async (params) => {
    // const user=localStorage.getItem("user")
    let result = await apiInstance.post(`viewproperty`,).then(function (response) {
        console.log("Single peoprty Data",response)
        return response
    }).catch(function (error) {
        // toast.error("some thing went wrong");
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});





export const AddNewProperty = createAsyncThunk("AddNewProperty", async (params) => {
    let result = await apiInstanceV2.post(`addproperty`,params).then(function (response) {
        return response
    }).catch(function (error) {
        // toast.error("some thing went wrong");
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

export const AddUserProfile = createAsyncThunk("AddUserProfile", async (params) => {
    let result = await apiInstanceV2.post(`profiles`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});


export const GetPropertyDetailByID = createAsyncThunk("GetPropertyDetailByID", async (params) => {
    let result = await apiInstanceV2.post(`viewproperty`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error
    })
    const { data, status } = result
    return { data, status }
});


export const CheckPropertyAvailable = createAsyncThunk("CheckPropertyAvailable", async (params) => {
    let result = await apiInstanceV2.post(`checkbooking`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error
    })
    const { data, status } = result
    return { data, status }
});

export const BookProperty = createAsyncThunk("BookProperty", async (params) => {
    let result = await apiInstanceV2.post(`bookproperty`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error
    })
    const { data, status } = result
    return { data, status }
});

export const GetPackages = createAsyncThunk("GetPackages", async (params) => {
    let result = await apiInstanceV2.post(`listpackages`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error
    })
    const { data, status } = result
    return { data, status }
});


export const GetPropertiesAdmin = createAsyncThunk("GetPropertiesAdmin", async (params) => {
    let result = await apiInstanceV2.post(`listproperties`,params).then(function (response) {
        return response
    }).catch(function (error) {
        // toast.error("some thing went wrong");
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});