import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Listingcard from "../NorthListingPage/listingcard";
import Map from "../NorthListingPage/MapLeaflet";
import Footer from "../Footer";
import lisitingBG from "../../assets/images/listingBG.png";
import TVHeading from "../../components/TVHeading";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import TVTextField from "../../components/TVTextField";
import TVSelect from "../../components/TVSelect";
import MDButtonPrimary from "../../components/MDButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { NorthAmericaProperty } from "../../redux/listingPoperty/listingAPi";
import Navbar from "../../layouts/Navbar";
import ReactPaginate from "react-paginate";
import { AllFakeData } from "../../data/RawData";
import { SearchBox } from "@mapbox/search-js-react";
import { MapApiKey } from "../../context/Constant";
import Filters from "../Filters";

const SouthListing = () => {
	let itemsPerPage = 5;
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
	const dispatch = useDispatch();

	const { NorthAmerica } = useSelector((state) => state.listing);
	const AllData = NorthAmerica?.data?.response?.data || [];
	const TotalLength = NorthAmerica?.data?.response?.total_count[0].total;
	const [category, setCategory] = useState(0);
	const [keyWord, setKeyWord] = useState();
	const [location, setLocation] = useState();

	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);

	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(AllData.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(TotalLength / itemsPerPage));
	}, [itemOffset, itemsPerPage, AllData]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % TotalLength;
		setItemOffset(newOffset);
	};

	const CallApi = () => {
		dispatch(
			NorthAmericaProperty({
				body: {
					skip: itemOffset,
					top: 5,
					location: location,
					// type:"", 
					// bedrooms:"",
					// bathrooms:"",
					// wifi:"",
					// pool:"",
					// price_max:"",
					// price_min:"",
					// pets:"",
					tage: keyWord,
					continent: "South America",
				},
			})
		);
	}

	useEffect(() => {
		CallApi()
		return (() => {
			setCategory(0)
		})
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
							<TVHeading sx={{ color: "#fff" }}>South America</TVHeading>
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
										value="South America"
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
											value={0}
											sx={{
												fontWeight: 500,
												fontSize: "16px",
												color: "#93959E",
												fontFamily: "Rubik",
											}}
										>
											All Categories
										</MenuItem>
										{AllMenu?.map((item) => (
											[
												<ListSubheader
													key={item.MenuName + "Header"}
													sx={{
														fontWeight: 500,
														fontSize: "20px",
														color: "#93959E",
														fontFamily: "Rubik",
													}}
												>
													{item.MenuName}
												</ListSubheader>,
												item.subMenu.map((subItem) => (
													<MenuItem
														key={subItem.val}
														value={subItem.val}
														sx={{
															fontWeight: 500,
															fontSize: "16px",
															color: "#93959E",
															fontFamily: "Rubik",
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
					</span>
				</Box>
				<Box sx={{ width: "90%", mx: "auto" }}>

					<Grid container spacing={5}>
						<Grid item xs={12} sm={12} md={8} lg={7}>
							<Box
								sx={{
									border: "1px solid #FE4080",
									borderRadius: "8px",
									px: 2,
									py: 1,
									mb: 3,
								}}
							>
								<Filters />
							</Box>
						</Grid>
					</Grid>
					{AllData?.length !== 0 ?
						<>
							<Grid container spacing={5}>
								<Grid item xs={12} sm={12} md={8} lg={7}>
									{AllData &&
										AllData?.length !== 0 &&
										AllData?.map((item) => {
											return <Listingcard Data={item} />;
										})}
								</Grid>
								<Grid item xs={12} sm={12} md={4} lg={5}>
									<Map Data={AllData} />;
								</Grid>
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
						</> :
						<TVHeading sx={{ color: "#000", textAlign: "center" }}>No Data Found</TVHeading>

					}
				</Box>
			</Box>

			<Footer />
		</>
	);
};

export default SouthListing;
