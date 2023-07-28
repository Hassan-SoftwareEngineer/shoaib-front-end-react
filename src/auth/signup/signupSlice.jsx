import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiInstance from "../../Api/axios";

export const signup = createAsyncThunk(
    "signup",
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiInstance.post(`users/signup/`, params);
            // localStorage.setItem("user",response?.data?.user.authentication?.name)
            console.log("error.response.data.message bottom", response);
            toast.info(response.data.response);
            return response.data;
        } catch (error) {
            console.log("error", error);
            
            if (error.response.status >= 400) {
                toast.error(error.message);
            }
            if (error.response && error.response.data.message) {
                toast.error(error.data.response);
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
};

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log("this is the action signupSlice", action);
            state.users = action.payload;
            state.loading = false;
            state.success = true;
        });
        builder.addCase(signup.rejected, (state, action) => {
            console.log("error.response.data.message third b signupSlice", action);
            state.loading = false;
            state.errorMsg = action?.error.message;
            state.error = action.payload;
        });
    },
});
export default signupSlice.reducer;
