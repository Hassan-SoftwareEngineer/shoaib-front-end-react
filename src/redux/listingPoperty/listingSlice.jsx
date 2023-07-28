import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
    name: "listingProperty",
    initialState: {
        NorthAmerica:[],
        cordinates:null,
        AllPackages:[],
        UserListProperties:[],

        Favriout:[],
        AllCart:[],
        SinglePropertyDetail:[],
        PackageCart:[],
        FilterData:[],
        UserCurrnacy:null,
        ProprtyID:null,

        //admin
        AllPropertiesAdmin:[],

    },
    reducers: {
        AddToFavrite: (state, action) => {
            state.Favriout = action.payload;
        },
        AddToCart: (state, action) => {
            state.AllCart = action.payload;
        },
        RemoveFromFavorite: (state, action) => {
            state.Favriout = action.payload;
        },
        CurrentCordinates: (state, action) => {
            state.cordinates = action.payload;
        },
        AddToPackageCart: (state, action) => {
            state.PackageCart = action.payload;
        },
        SetUserCurrnacy: (state, action) => {
            state.UserCurrnacy = action.payload;
        },
        SetPropertyIDToGetDetail: (state, action) => {
            state.ProprtyID = action.payload;
        },
    },
    extraReducers: {
        ["NorthAmericaProperty/fulfilled"]: (state, action) => {
            state.NorthAmerica = action.payload;
        },
        ["GetPropertyDetailByID/fulfilled"]: (state, action) => {
            state.SinglePropertyDetail = action.payload?.data?.response?.results
            ;
        },
        ["GetPackages/fulfilled"]: (state, action) => {
            state.AllPackages = action.payload?.data?.response;
        },
        ["UserListProperty/fulfilled"]: (state, action) => {
            state.UserListProperties = action.payload?.data?.response;
        },
        ["GetPropertiesAdmin/fulfilled"]: (state, action) => {
            state.AllPropertiesAdmin = action.payload?.data?.response;
        },
        ["FilterProperty/fulfilled"]: (state, action) => {
            state.FilterData = action.payload?.data?.response;
        },
       
    },
});

export const { AddToFavrite,AddToCart,RemoveFromFavorite,CurrentCordinates,AddToPackageCart,SetUserCurrnacy,SetPropertyIDToGetDetail} = listingSlice.actions;

export default listingSlice.reducer;
