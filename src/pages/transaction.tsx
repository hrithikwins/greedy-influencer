import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Example from "../components/example";

function Transaction() {
    let { transactionId } = useParams();
    const [data, setData] = useState([
        {
            transactionId: "",
            transactionType: "",
            merchantName: "",
            date: "",
            time: "",
            entryType: "",
            billAmount: "",
            description: "",
            paymentMode: "",
            paidAmount: "",
            linkAmount: "",
            personName: "",
            phoneNumber: "",
        },
    ]);
    useEffect(() => {
        axios
            .post(
                "https://prioritypay.herokuapp.com/search-transaction-by-transaction-id",
                {
                    transactionId: transactionId,
                }
            )
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }, []);

    return (
        <>
            <div className="text-center">
                {/* <Example /> */}
                {/* http://localhost:3000/4f38ef83-99cd-4aca-a341-8f1e1c674043 */}
                <div className="py-4"></div>
                <h1 className="text-center">PRIORITY PAY</h1>
                {data.map((item) => (
                    <div>
                        <h1 className="p-4">Hello {item.personName}</h1>
                        Thank you for shopping with <h1>{item.merchantName}</h1>
                        <hr />
                        <h1 className="py-4 welcome-text">
                            Your Transaction Details are as follows
                        </h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Transaction ID</h3>
                                    <p>{item.transactionId}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Merchant Name</h3>
                                    <p>{item.merchantName}</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Date</h3>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Time</h3>
                                    <p>{item.time}</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Entry Type</h3>
                                    <p>{item.entryType}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Bill Amount</h3>
                                    <p>{item.billAmount}</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Description</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Payment Mode</h3>
                                    <p>{item.paymentMode}</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Paid Amount</h3>
                                    <p>{item.paidAmount}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Link Amount</h3>
                                    <p>{item.linkAmount}</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Person Name</h3>
                                    <p>{item.personName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Phone Number</h3>
                                    <p>{item.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                        {item.paymentMode === "cash" ? (
                            <h1>
                                You have already paid your amount in Cash <br />
                                <a href="https://prioritypay.in/">
                                    Download your receipt for {item.billAmount}
                                </a>
                            </h1>
                        ) : item.paymentMode === "online" ? (
                            <h4>
                                {" "}
                                You have to pay {item.paidAmount} of{" "}
                                {item.billAmount}
                                <br />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => console.log("in progress")}
                                >
                                    Pay {item.linkAmount} Now
                                </Button>
                            </h4>
                        ) : (
                            <h4>
                                {" "}
                                You have opted for split payment and paid{" "}
                                {item.paidAmount} and have to pay{" "}
                                {item.linkAmount} of your total bill of{" "}
                                {item.billAmount}
                                <br />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => console.log("in progress")}
                                >
                                    Pay {item.linkAmount}
                                </Button>
                            </h4>
                        )}
                    </div>
                ))}
                {/* //end of map */}
            </div>
        </>
    );
}

export default Transaction;
