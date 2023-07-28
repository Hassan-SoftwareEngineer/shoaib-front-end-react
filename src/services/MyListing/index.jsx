import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import lisitingBG from "../../assets/images/listingBG.png";
import TVHeading from "../../components/TVHeading";
import { useDispatch, useSelector } from "react-redux";
import { NorthAmericaProperty, UserListProperty } from "../../redux/listingPoperty/listingAPi";
import Navbar from "../../layouts/Navbar";
import ReactPaginate from "react-paginate";
import Propertycard from "../Home/propertycard";
import MyPropertyCard from "./MyPropertyCard";

const MyListings = () => {
    let itemsPerPage = 5;
    const dispatch = useDispatch();

    const { UserListProperties } = useSelector((state) => state.listing);
    const AllData = UserListProperties?.data || [];
    const TotalLength = UserListProperties?.total_count?.[0]?.total ?? 0;
    
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(AllData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(TotalLength / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % TotalLength;
        setItemOffset(newOffset);
    };

    const CallApi = () => {
        dispatch(
            UserListProperty({
                body: {
                    skip: itemOffset,
                    top: 6,
                },
            })
        );
    };

    useEffect(() => {
        CallApi();
    }, [itemOffset]);

    return (
        <>
            <Navbar />
            <Box sx={{ width: "100%", mx: "auto", mt: { md: "60px" } }}>
                <Box
                    sx={{
                        height: "270px",
                        position: "relative",
                        mb: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={lisitingBG}
                        alt="media"
                        style={{ width: "100%", height: "100%", objectFit: "fill" }}
                    />
                    <span className="become-host">
                        <Box
                            sx={{
                                my: 10,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                maxWidth: "900px",
                                width: { xs: "85%", md: "100%" },
                            }}
                        >
                            <TVHeading sx={{ color: "#fff" }}>User All Properties List</TVHeading>
                        </Box>
                    </span>
                </Box>
                <Box sx={{ width: "90%", mx: "auto" }}>

                    <Box sx={{ mb: { xs: 2, md: 8 } }}>
                        <h4 className="heading-third" style={{ textAlign: "start" }}>
                            Properties List
                        </h4>
                    </Box>
                    {AllData?.length !== 0 ? (
                        <>
                            <Grid container spacing={6}>
                                {AllData &&
                                    AllData?.length !== 0 &&
                                    AllData?.map((item) => {
                                        return (
                                            <Grid item xs={12} md={6} lg={4}>
                                                <MyPropertyCard Data={item} />;
                                            </Grid>)
                                    })}
                            </Grid>
                            <div className="pagination-container">
                                <ReactPaginate
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={1}
                                    marginPagesDisplayed={2}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </>
                    ) : (
                        <TVHeading sx={{ color: "#000", textAlign: "center" }}>
                            No Data Found
                        </TVHeading>
                    )}
                </Box>
            </Box>

            <Footer />
        </>
    );
};

export default MyListings;
