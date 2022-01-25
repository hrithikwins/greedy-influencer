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
function Home() {
    let { transactionId } = useParams();

    let navigate = useNavigate();
    const [category, setCategory] = useState<String>("");
    const [sliderValue, setSliderValue] = useState<[number, number]>([2, 4]);
    const [sliderViewsValue, setSliderViewsValue] = useState<[number, number]>([
        2, 4,
    ]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleThreeDotClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileClose = () => {
        setAnchorEl(null);
    };
    const handleSliderChange = (event: any, newValue: any) => {
        setSliderValue(newValue);
    };
    const handleSliderViewsChange = (event: any, newValue: any) => {
        setSliderViewsValue(newValue);
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
    const handleCategoryChange = (event: {
        target: { value: SetStateAction<String> };
    }) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <div className="">
                <div className="main-container-padding w-100">
                    <div className="container-fluid card py-4"></div>
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
                                <div className="d-flex flex-column justify-content-between p-4">
                                    <div className="d-flex">
                                        <TextField
                                            placeholder="Search Influencer"
                                            variant="standard"
                                        />
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                        {/*  */}
                                    </div>
                                    {/* search influencer */}
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Only influencers with email"
                                            // className="font-small-120"
                                        />
                                    </FormGroup>

                                    <div className="p-2"></div>
                                    <div className="p-2">
                                        <h6>
                                            <b>Category</b>
                                        </h6>
                                    </div>

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
                                            label="Age"
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
                                            Category
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={category}
                                            onChange={handleCategoryChange}
                                            label="Age"
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
                                            Category
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={category}
                                            onChange={handleCategoryChange}
                                            label="Age"
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
                                                value={category}
                                                onChange={handleCategoryChange}
                                                label="Sort"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Price: Low to High
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    Price: High to Low
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
                                        <div className="col-md-3 card">
                                            <img
                                                className="img-fluid"
                                                src="https://phlanx.com/phx-image?url=https%3A%2F%2Fphlanx-images.s3.amazonaws.com%2Fhandle%2Finstagram%2F872572254.jpg"
                                                alt=""
                                            />
                                            <div className="d-flex">
                                                <div className="d-flex flex-column w-100">
                                                    <div className="">Name</div>
                                                    <div className="">
                                                        @insta
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
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={
                                                            handleProfileClose
                                                        }
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "left",
                                                        }}
                                                        transformOrigin={{
                                                            vertical: "top",
                                                            horizontal: "left",
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
                                                            My account
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
                                                <div className="">
                                                    10m Followers
                                                </div>
                                                <div className="">
                                                    10m Followers
                                                </div>
                                            </div>
                                            {/* address */}
                                            <div className="d-flex flex-column">
                                                <div className="">
                                                    Mumbai, India
                                                </div>
                                                <div className="">
                                                    Fitness, Modelling
                                                </div>
                                            </div>
                                            {/* avatar group */}
                                            <div className="d-flex">
                                                <div className="">
                                                    <AvatarGroup max={4}>
                                                        <Avatar
                                                            alt="Remy Sharp"
                                                            src="/static/images/avatar/1.jpg"
                                                        />
                                                        <Avatar
                                                            alt="Travis Howard"
                                                            src="/static/images/avatar/2.jpg"
                                                        />
                                                        <Avatar
                                                            alt="Cindy Baker"
                                                            src="/static/images/avatar/3.jpg"
                                                        />
                                                        <Avatar
                                                            alt="Agnes Walker"
                                                            src="/static/images/avatar/4.jpg"
                                                        />
                                                        <Avatar
                                                            alt="Trevor Henderson"
                                                            src="/static/images/avatar/5.jpg"
                                                        />
                                                    </AvatarGroup>
                                                </div>
                                                <div className="">
                                                    {/* iconbutton with heart */}
                                                </div>
                                            </div>
                                        </div>
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

export default Home;
