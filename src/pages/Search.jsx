// import logo from "./logo.svg";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    MenuItem,
    Button,
    Menu,
    Select,
    TextField,
    FormControl,
    InputLabel,
    Slider,
    AvatarGroup,
    Avatar,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, SetStateAction } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../home.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import instaData from "./../data.json";

function Search() {
    let { transactionId } = useParams();

    let navigate = useNavigate();
    const [category, setCategory] = useState("");
    const [sliderValue, setSliderValue] = useState([2, 4]);
    const [sliderViewsValue, setSliderViewsValue] = useState([2, 4]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(instaData);

    const marks = [
        {
            value: 10,
            label: "100K",
        },
        {
            value: 100000,
            label: "10M",
        },
    ];
    const open = Boolean(anchorEl);

    const handleThreeDotClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileClose = () => {
        setAnchorEl(null);
    };
    const handleSliderChange = (event, newValue) => {
        let firstValue, secondValue;
        setSliderValue(newValue);
        // firstValue = newValue[0]; //this is 1 to 50 and convert to 10 to 100
        // //first value here 1 to 50 and convert to 10 to 100
        // if (newValue[0] < 50) {
        //     firstValue = newValue[0] * 10;
        //     //if first value is greater than 50  then 1 to 100
        // } else if (newValue[0] > 50) firstValue = newValue[0] * 100;

        // // ---second value
        // if (newValue[1] < 50) {
        //     secondValue = newValue[1];
        //     //if first value is greater than 50  then 1 to 100
        // } else if (newValue[1] > 50) secondValue = newValue[1] - 50;

        const kFollowers = instaData.filter((item) => {
            return item.Followers.toLowerCase().endsWith("k");
            // Use the toLowerCase() method to make it case-insensitive
        });
        const mFollowers = instaData.filter((item) => {
            return item.Followers.toLowerCase().endsWith("m");
            // Use the toLowerCase() method to make it case-insensitive
        });
        // TODO: fix here
        // the slider logic
        // firstValue = newValue[0]; //this goes between 1 t0 100
        // if (newValue[0] > 100) {
        // } else if (newValue[0] < 100) {
        //     firstValue = 1000;
        // }
        // if (newValue[1] > 100) {
        // secondValue = newValue[1] / 1000; // this goes betweeen 1 to 100 again
        // } else if (newValue[1] < 100) {
        //     secondValue = 0;
        // }

        const kResults = kFollowers.filter((item) => {
            return (
                item.Followers.slice(0, item.Followers.length - 1) >=
                newValue[0]
            );
        });
        const mResults = mFollowers.filter((item) => {
            return (
                item.Followers.slice(0, item.Followers.length - 1) >=
                newValue[0]
            );
        });
        Object.assign(kResults, mResults);
        setData(kResults);

        // setData(results);
    };
    const handleSliderViewsChange = (event, newValue) => {
        setSliderViewsValue(newValue);
    };

    const updateTheGridBySearch = (e) => {
        const keyword = e.target.value;

        if (searchTerm.length > 0) {
            const results = instaData.filter((item) => {
                return item.Name.toLowerCase().startsWith(
                    keyword.toLowerCase()
                );
                // Use the toLowerCase() method to make it case-insensitive
            });
            setData(results);
        } else {
            setData(instaData);
            // If the text field is empty, show all users
        }
    };
    // const [state, setstate] = useState<type>(initialState);
    // useEffect(() => {
    //     axios.post(
    //         "https://prioritypay.herokuapp.com/search-transaction-by-transaction-id",
    //         {
    //             transactionId: "",
    //         }
    //     );
    // }, []);
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        filterCategory(event.target.value);
    };

    return (
        <>
            <div className="">
                <div className="main-container-padding w-100">
                    <div className="container-fluid card">
                        <img
                            className="img-fluid logo-image"
                            src="https://static.wixstatic.com/media/92acf5_c3752edcc580459e8d90e6634997c04a~mv2.png/v1/crop/x_0,y_1182,w_2550,h_1086/fill/w_602,h_256,al_c,q_85,usm_0.66_1.00_0.01/logo.webp"
                            alt="Opraahfx"
                        />
                    </div>
                    <div className="py-1"></div>
                    <div className="main-container-home container-fluid">
                        <div className="d-flex px-4">
                            <div className="card dashboard-container">
                                <div className="d-flex justify-content-between p-4">
                                    <div className="">
                                        <b>Filter by</b>
                                    </div>
                                    <div className="clear-all">Clear All</div>
                                </div>
                                <div className="d-flex flex-column justify-content-between px-4">
                                    <div className="d-flex px-2 justify-content-around custom-search">
                                        <input
                                            className="px-1 search-input"
                                            placeholder="Search Influencer"
                                            variant="standard"
                                            value={searchTerm}
                                            onChange={(event) => {
                                                setSearchTerm(
                                                    event.target.value
                                                );
                                                updateTheGridBySearch(event);
                                            }}
                                        />
                                        <div className="bordered-search">
                                            <SearchIcon />
                                            {/* 100000 to 100000000  */}
                                        </div>
                                        {/*  */}
                                    </div>
                                    <div className="px-2">
                                        {/* search influencer */}
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="Only influencers with email"
                                                // className="font-small-120"
                                            />
                                        </FormGroup>
                                    </div>

                                    <div className="p-2"></div>

                                    <b className="px-2">Category</b>
                                    <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120 }}
                                    >
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Category
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={category}
                                            onChange={handleCategoryChange}
                                            label="Category"
                                        >
                                            {/* <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem> */}
                                            <MenuItem value={"Actor"}>
                                                Actor
                                            </MenuItem>
                                            <MenuItem value={"Model"}>
                                                Designer
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="p-2"></div>
                                <div className="px-4">
                                    <h6>
                                        <b>Followers</b>
                                    </h6>
                                </div>

                                <div className="px-4">
                                    {/* range slder here */}
                                    <Slider
                                        getAriaLabel={() =>
                                            "Filter by followers"
                                        }
                                        value={sliderValue}
                                        onChange={handleSliderChange}
                                        valueLabelDisplay="auto"
                                        marks={marks}
                                        min={10}
                                        max={100000}
                                        // getAriaValueText={sliderValueText}
                                    />
                                </div>
                                <div className="p-2"></div>
                                <div className="px-4">
                                    <h6>
                                        <b>Views</b>
                                    </h6>
                                </div>

                                <div className="px-4">
                                    {/* range slder here */}
                                    <Slider
                                        getAriaLabel={() => "Filter by Views"}
                                        value={sliderViewsValue}
                                        onChange={handleSliderViewsChange}
                                        valueLabelDisplay="auto"
                                        // getAriaValueText={sliderValueText}
                                    />
                                </div>
                                {/* brand mentions */}
                                <div className="px-3">
                                    <div className="p-2"></div>
                                    <div className="px-2">
                                        <h6>
                                            <b>Brand Mentions</b>
                                        </h6>
                                    </div>

                                    <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120 }}
                                    >
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Brand
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            // value={category}
                                            // onChange={handleCategoryChange}
                                            label="Brand"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                Category 1
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Category 2
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Category 3
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                {/* Hashtags */}
                                <div className="px-3">
                                    <div className="p-2"></div>
                                    <div className="p-2">
                                        <h6>
                                            <b>Hashtags</b>
                                        </h6>
                                    </div>

                                    <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120 }}
                                    >
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Hashtags
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            // value={category}
                                            // onChange={handleCategoryChange}
                                            label="Hashtags"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                Category 1
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Category 2
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Category 3
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                {/*  */}
                                <div className="px-3">
                                    <div className="p-2"></div>
                                    <div className="p-2">
                                        <h6>
                                            <b>Country</b>
                                        </h6>
                                    </div>
                                </div>
                                <div className="px-3">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Australia"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Canada"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Europe"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="United Kingdom"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="United States"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="px-3">
                                    <div className="p-2"></div>
                                    <div className="p-2">
                                        <h6>
                                            <b>Verified</b>
                                        </h6>
                                    </div>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Instagram Verified"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Opraahfx Verified"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>
                                </div>
                                {/* end */}
                                <div className="p-2"></div>
                                <div className="p-2"></div>
                                <div className="p-2"></div>
                            </div>

                            <div className="vh-100 px-2"></div>
                            <div className="vh-100 w-100">
                                <div className="card d-flex flex-row-reverse justify-content-between">
                                    <div className="d-flex ">
                                        <div className="py-4">Sort By:</div>
                                        <FormControl
                                            variant="standard"
                                            className="py-2"
                                            sx={{ m: 1, minWidth: 120 }}
                                        >
                                            {/* <InputLabel id="demo-simple-select-standard-label">
                                                Price Low to High
                                            </InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                // value={category}
                                                // onChange={handleCategoryChange}
                                                // value={10}
                                                label="Sort"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Name
                                                </MenuItem>
                                                <MenuItem value={30}></MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className=""></div>
                                </div>
                                <div className="p-2"></div>
                                {/* the main grid of all influencers */}
                                <div className="px-3">
                                    <div className="row">
                                        {data.map((item, index) => {
                                            return (
                                                <div className="col-md-3 p-1">
                                                    <div className="card">
                                                        <img
                                                            className="img-fluid"
                                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eventworld.co%2Fblob%2Fimages%2Fpg%2Fnorah-jones_1ec80_1000.jpg&f=1&nofb=1"
                                                            alt=""
                                                        />
                                                        <div className="d-flex">
                                                            <div className="d-flex flex-column w-100">
                                                                <div className="item-name fw-bolder">
                                                                    <span className="px-1">
                                                                        {/* Sonakshi Sinha
                                                                         */}
                                                                        {
                                                                            item.Name
                                                                        }
                                                                    </span>
                                                                    <img
                                                                        className="img-fluid verified-icon"
                                                                        src="https://emoji.gg/assets/emoji/3460-verified.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="item-profile-link">
                                                                    {/* @insta */}
                                                                    @
                                                                    {
                                                                        item[
                                                                            "Profile Link"
                                                                        ]
                                                                    }{" "}
                                                                    <img
                                                                        className="img-fluid verified-icon"
                                                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.usbrandcolors.com%2Fimages%2Flogos%2Finstagram-logo.png&f=1&nofb=1"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Button
                                                                    id="demo-positioned-button"
                                                                    aria-controls={
                                                                        open
                                                                            ? "demo-positioned-menu"
                                                                            : undefined
                                                                    }
                                                                    aria-haspopup="true"
                                                                    aria-expanded={
                                                                        open
                                                                            ? "true"
                                                                            : undefined
                                                                    }
                                                                    onClick={
                                                                        handleThreeDotClick
                                                                    }
                                                                >
                                                                    <MoreVertIcon />
                                                                </Button>
                                                                <Menu
                                                                    id="demo-positioned-menu"
                                                                    aria-labelledby="demo-positioned-button"
                                                                    anchorEl={
                                                                        anchorEl
                                                                    }
                                                                    open={open}
                                                                    onClose={
                                                                        handleProfileClose
                                                                    }
                                                                    anchorOrigin={{
                                                                        vertical:
                                                                            "top",
                                                                        horizontal:
                                                                            "left",
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical:
                                                                            "top",
                                                                        horizontal:
                                                                            "left",
                                                                    }}
                                                                >
                                                                    <MenuItem
                                                                        onClick={
                                                                            handleProfileClose
                                                                        }
                                                                    >
                                                                        Profile
                                                                    </MenuItem>
                                                                    <MenuItem
                                                                        onClick={
                                                                            handleProfileClose
                                                                        }
                                                                    >
                                                                        My
                                                                        account
                                                                    </MenuItem>
                                                                    <MenuItem
                                                                        onClick={
                                                                            handleProfileClose
                                                                        }
                                                                    >
                                                                        Logout
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        {/* followers and eng rate */}
                                                        <div className="d-flex justify-content-around">
                                                            <div className="item-followers">
                                                                <b>
                                                                    {
                                                                        item.Followers
                                                                    }{" "}
                                                                </b>
                                                                Followers
                                                            </div>
                                                            <div className="item-engrate">
                                                                <b>
                                                                    {Math.round(
                                                                        Math.random() *
                                                                            10
                                                                    ) +
                                                                        "." +
                                                                        Math.round(
                                                                            Math.random() *
                                                                                30
                                                                        )}
                                                                    {"% "}
                                                                </b>{" "}
                                                                Eng. Rate
                                                            </div>
                                                        </div>
                                                        {/* address */}
                                                        <div className="p-1"></div>
                                                        <div className="d-flex flex-column item-address">
                                                            <div className="item-address">
                                                                Mumbai, India
                                                            </div>
                                                            <div className="item-category">
                                                                Modelling,{" "}
                                                                {item.Category}
                                                            </div>
                                                        </div>
                                                        <div className="p-2"></div>

                                                        <div className="avatar-space d-flex justify-content-between">
                                                            {/* avatar group */}
                                                            <img
                                                                src="avatar-group.png"
                                                                alt=""
                                                            />
                                                            <div className="">
                                                                {/* iconbutton with heart */}
                                                                <IconButton aria-label="add to favorites">
                                                                    {/* <FavoriteIcon /> */}
                                                                    <FavoriteBorderIcon />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
