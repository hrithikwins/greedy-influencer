// import logo from "./logo.svg";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import button from mui
import Button from "@mui/material/Button";

function Login() {
    let { transactionId } = useParams();

    let navigate = useNavigate();

    // useEffect(() => {
    //     axios.post(
    //         "https://prioritypay.herokuapp.com/search-transaction-by-transaction-id",
    //         {
    //             transactionId: "",
    //         }
    //     );
    // }, []);
    return (
        <>
            <div className="header-background">
                {/* the navbar */}

                <div className="container-fluid">
                    <nav className="d-flex justify-content-between">
                        <img
                            className="img-fluid logo-image"
                            src="https://static.wixstatic.com/media/92acf5_c3752edcc580459e8d90e6634997c04a~mv2.png/v1/crop/x_0,y_1182,w_2550,h_1086/fill/w_602,h_256,al_c,q_85,usm_0.66_1.00_0.01/logo.webp"
                            alt="Opraahfx"
                        />
                        <div className="pt-md-3 pb-md-2">
                            {/* <div className="d-flex justify-content-center">
                                <div className="py-1 px-3 text-primary fw-bold">
                                    Platform
                                    <ArrowDropDownIcon />
                                </div>
                                <div className="py-1 px-3 text-primary fw-bold">
                                    Services
                                    <ArrowDropDownIcon />
                                </div>
                                <div className="py-1 px-3 text-primary fw-bold">
                                    Pricing
                                </div>
                                <div className="py-1 px-3 text-primary fw-bold">
                                    Why Opraahfx
                                    <ArrowDropDownIcon />
                                </div>
                                <div className="py-1 px-3 text-primary fw-bold">
                                    Resources
                                    <ArrowDropDownIcon />
                                </div>
                            </div> */}
                        </div>
                        <div className="py-1 px-3 d-flex">
                            <div className=" p-2">
                                <div className="get-started-button">
                                    Get Started
                                </div>
                            </div>
                            <div className=" p-3">or Log In</div>
                            <div className=" p-3">
                                EN
                                <ArrowDropDownIcon />
                            </div>
                        </div>
                    </nav>
                </div>
                <div className=" container d-flex justify-content-center align-content-center vh-100 vw-100">
                    <div className="row p-md-5">
                        <div className="col-md-6">
                            <div className="px-4 d-flex flex-column align-items-start">
                                <h1 className="bold-super px-md-3">
                                    Power your business with influencer
                                    marketing
                                </h1>
                                <p className="login-container px-md-3 py-2 lh-lg">
                                    <div className="extra-padding-right">
                                        Find creators for your brand, nurture
                                        influencer relationships, manage your
                                        affiliate network, and drive more sales
                                        with the leading influencer marketing
                                        platform.
                                    </div>
                                </p>
                                <div className="email-box d-flex px-3 py-2">
                                    <input
                                        className="email-input"
                                        type="email"
                                        placeholder="Work Email"
                                    />
                                    {/* email button */}
                                    <div className="email-button">Login</div>
                                </div>
                                {/* <div className="p-md-2">
                                <div className="d-flex justify-content-around py-2">
                                    <label htmlFor="email">Your Username</label>
                                    <TextField placeholder="username"></TextField>
                                </div>
                                <div className="d-flex justify-content-around py-2">
                                    <label htmlFor="email">Your Password</label>
                                    <TextField
                                        placeholder="password"
                                        type="password"
                                    ></TextField>
                                </div>
                                <div className="py-4">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => {
                                            navigate(`/home`);
                                        }}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </div> */}
                            </div>
                        </div>

                        <div className="col-md-4  ">
                            <img src="landing.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
