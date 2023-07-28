import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiInstance from "../../Api/axios";

export const login = createAsyncThunk(
    "login",
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiInstance.post(`users/signin/`, params);
            if(response?.data?.response?.success== true){
                localStorage.setItem("bearerToken", response?.data?.response?.user_detail?.token);
            }
            return response.data;
        } catch (error) {
            if (error.response.status >= 400) {
                toast.error(error.message);
            }
            if (error.response && error.response.data.message) {
                toast.error(error.response.data);
                return rejectWithValue(error.response.data);
            } else {
                console.log("error.response.data.message bottom", error.message);
                return rejectWithValue(error.message);
            }
        }
    }
);

export const ForGotPassword = createAsyncThunk(
    "ForGotPassword",
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiInstance.post(`users/initiateResetPassword`, params);
            return response.data;
        } catch (error) {
            if (error.response.status >= 400) {
                toast.error(error.message);
            }
            if (error.response && error.response.data.message) {
                toast.error(error.response.data);
                return rejectWithValue(error.response.data);
            } else {
                console.log("error.response.data.message bottom", error.message);
                return rejectWithValue(error.message);
            }
        }
    }
);

export const ResetPasswordFun = createAsyncThunk(
    "ResetPasswordFun",
    async (params, { rejectWithValue }) => {
        try {
            // const response = await apiInstance.post(`users/resetpassword`, params);
            // return response.data;
        } catch (error) {
            if (error.response.status >= 400) {
                toast.error(error.message);
            }
            if (error.response && error.response.data.message) {
                toast.error(error.response.data);
                return rejectWithValue(error.response.data);
            } else {
                console.log("error.response.data.message bottom", error.message);
                return rejectWithValue(error.message);
            }
        }
    }
);

const initialState = {
    loading: false,
    userInfo: {}, 
    error: null,
    errorMsg: "",
    success: false, 

    wishlist:[],
    MyBag:[],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        AddToWishListFun: (state, action) => {
            state.wishlist = []
        },
        AddToBagFun: (state, action) => {
            state.MyBag = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.success = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.errorMsg = action?.error.message;
            state.error = action.payload;
        });
    },
});
export const {ClearGetEmployeeData} = authSlice.actions;

export default authSlice.reducer;
