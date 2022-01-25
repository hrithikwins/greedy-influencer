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
                                <div
                                    className="get-started-button"
                                    onClick={() => navigate("/home")}
                                >
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
                <div className=" container d-flex justify-content-center align-content-center vw-100">
                    <div className="row p-md-5">
                        <div className="col-md-6">
                            <div className="px-4 d-flex flex-column align-items-start">
                                <h1 className="bold-super px-md-3">
                                    Power your business with influencer
                                    marketing
                                </h1>
                                <p className="login-container px-md-3 py-2 lh-lg">
                                    <div className="extra-padding-right fw-bold">
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
                                        placeholder="shalini@opraahfx.com"
                                    />
                                    {/* email button */}
                                    <div
                                        className="email-button"
                                        onClick={() => navigate("/home")}
                                    >
                                        Login
                                    </div>
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
            {/* other clietn */}

            <div className="container w-100 ">
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <h6 className="primary-red-text py-1">
                        1600+ Brands Trust Us
                    </h6>
                    <img src="clients.png" alt="" />
                </div>
            </div>
            <div className="p-4"></div>
            {/* second */}
            <div className="container w-100 ">
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <h6 className="primary-red-text py-1">
                        OPRAAHFX IN ACTION
                    </h6>
                    <h1 className="fw-bolder">See how Opraahfx Works</h1>
                    {/* yotuube embed */}
                    <div className="col-md-8">
                        <iframe
                            className="p-5"
                            width="100%"
                            height="515"
                            src="https://www.youtube.com/embed/ZJ5neU9_ysQ"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            title="video"
                        />
                    </div>
                </div>
            </div>
            <div className="p-5"></div>
            <div className="p-1"></div>
            {/* brand story */}
            <div className="container w-100 ">
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <h1 className="fw-bolder  lh-base">
                        Tell a better brand story & drive more revenue from
                        <br />
                        influencers
                    </h1>
                    <p className="col-md-9 py-4 fw-bold text-gray  lh-lg">
                        Your customers and fans look to creators to discover new
                        products and make their purchase decisions. OpraahFx
                        provides you with all the tools to build and nurture
                        meaningful creator partnerships that drive revenue.
                    </p>
                </div>
            </div>
            <div className="p-4"></div>
            <div className="p-4"></div>
            <div className="container w-100 ">
                <div className="row">
                    <div className=" col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="primary-red-text py-1">
                                    INFLUENCER DISCOVERY
                                </h6>
                                <h1 className="fw-bolder">
                                    Work with right influencers
                                </h1>
                                <p className="col-md-9 py-4 text-gray lh-lg">
                                    _Find and recruit creators who are a good
                                    fit for your brand and your audience.
                                    Identify customers with a strong social
                                    media following to activate them for your
                                    affiliate programs and turn content creators
                                    into legitimate brand ambassadors.
                                </p>
                            </div>
                            <img src="landing2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>

            {/* clls */}
            <div className="container w-100 ">
                <div className="row">
                    <div className=" col-md-12 ">
                        <div className="d-flex justify-content-center">
                            <img src="landing3.png" alt="" />
                            <div className="d-flex flex-column">
                                <h6 className="primary-red-text py-1">
                                    RELATIONSHIP MANAGEMENT
                                </h6>
                                <h1 className="fw-bolder">
                                    Manage your influencers in one place
                                </h1>
                                <p className="col-md-9 py-4 text-gray lh-lg">
                                    _Manage all of your influencer relationships
                                    in one place and follow each stage of your
                                    collaborations. Build long-term partnerships
                                    and create your more authentic content to
                                    win your audience’s trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            {/* sldkfjs */}
            <div className="container w-100 ">
                <div className="row">
                    <div className=" col-md-12 ">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="primary-red-text py-1">
                                    AUTOMATED CAMPAIGNS
                                </h6>
                                <h1 className="fw-bolder">
                                    Streamline your campaigns
                                </h1>
                                <p className="col-md-9 py-4 text-gray lh-lg">
                                    _Stay on top of your creator content game
                                    with automated campaign management. Build
                                    custom workflows, generate individual
                                    affiliate links, issue custom coupon codes,
                                    manage product seeding, and simplify creator
                                    payouts.
                                </p>
                            </div>
                            <img src="landing4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
