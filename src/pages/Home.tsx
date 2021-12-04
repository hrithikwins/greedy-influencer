// import logo from "./logo.svg";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function Home() {
    const { router } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.post(
            "https://prioritypay.herokuapp.com/search-transaction-by-transaction-id",
            {
                transactionId: "",
            }
        );
    }, []);
    return (
        <>
            <div className="vh-100 vw-100 d-flex justify-content-center justify-items-center align-items-center bg-dark">
                <div className="text-primary d-flex flex-column justify-content-center align-content-center">
                    <img src="./logo512.png" alt="" />
                    <br />
                    <h3> Priority Pay Payment Settlement Platform</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="text-center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                navigate(
                                    "transaction/4f38ef83-99cd-4aca-a341-8f1e1c674043"
                                )
                            }
                        >
                            Explore demo Transaction
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
