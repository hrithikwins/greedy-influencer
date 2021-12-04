import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsSHA from "jssha";

// import Example from "../components/example";

function Transaction() {
    let { transactionId } = useParams();
    const [secureHash, setSecureHash] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [result, setResult] = useState<string>("");
    function getHMACResult() {
        var hashInput = "";
        hashInput =
            "J_99923" + //aggregatorId
            data[0].billAmount +
            "356" + //currencyCode
            "T_99922" + // merchantID
            // merchantTxnNo has to be transactionId
            data[0].transactionId + //merchantTxnNo
            "https://qa.phicommerce.com/pg/api/merchant" + //returnUrl
            "20211201175959"; //this iss txnDate

        // ----------------------------------------------------------------------------
        //for ebs : 55dfbde55886fc7ac6275b6b
        //for fd : 66aabde55886fc7ac627edde
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        setSecureHash(() => hashInput);
        // var shaObj = new jsSHA("SHA-256", "TEXT");
        const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
        shaObj.setHMACKey("abc", "TEXT"); // use the key shared with the merchant
        shaObj.update(hashInput);
        setResult(() => shaObj.getHMAC("HEX"));
        alert(result);

        // shaObj.update(hashInput);
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------

        // var result = shaObj.getHMAC("HEX");
        // document.forms.myForm.secureHash.value = result;
    }
    function postPayment() {
        axios
            .post("https://qa.phicommerce.com/pg/api/sale?=v2", {
                //send form data to server
            })
            .then((res) => {
                //result transaction
            });
    }
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
                setData(() => res.data);
                var tempData = JSON.parse(res.data);
                alert(res.data);
                setAmount(() => tempData["billAmount"]);
            });
    }, []);

    return (
        <>
            <div className="text-center">
                {/* <Example /> */}
                {/* http://localhost:3000/4f38ef83-99cd-4aca-a341-8f1e1c674043 */}
                <div className="py-4"></div>
                <h3 className="text-center">PRIORITY PAY</h3>
                {data.map((item) => (
                    <div>
                        <h3 className="p-4">Hello {item.personName}</h3>
                        Thank you for shopping with <h3>{item.merchantName}</h3>
                        <hr />
                        <h3 className="py-4 welcome-text">
                            Your Transaction Details are as follows
                        </h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Transaction ID</h5>
                                    <p>{item.transactionId}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Merchant Name</h5>
                                    <p>{item.merchantName}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Date</h5>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Time</h5>
                                    <p>{item.time}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Entry Type</h5>
                                    <p>{item.entryType}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Bill Amount</h5>
                                    <p>{item.billAmount}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Description</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Payment Mode</h5>
                                    <p>{item.paymentMode}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Paid Amount</h5>
                                    <p>{item.paidAmount}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Link Amount</h5>
                                    <p>{item.linkAmount}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Person Name</h5>
                                    <p>{item.personName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Phone Number</h5>
                                    <p>{item.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                        <form
                            id="myForm"
                            name="myForm"
                            action="https://qa.phicommerce.com/pg/api/sale?=v2"
                            method="post"
                            encType="application/x-www-form-urlencoded"
                        >
                            <input
                                type="text"
                                name="merchantID"
                                value="T_99922"
                            />
                            <input
                                type="text"
                                name="merchantTxnNo"
                                value="923892aa"
                            />
                            <input
                                type="text"
                                name="amount"
                                value={data[0].billAmount}
                            />
                            <input
                                type="text"
                                name="currencyCode"
                                value="356"
                            />
                            <input type="text" name="payType" value="" />
                            <input type="text" name="paymentMode" value="" />
                            <input
                                type="text"
                                name="customerEmailID"
                                value=""
                            />
                            <input
                                type="text"
                                name="transactionType"
                                value=""
                            />
                            <input
                                type="text"
                                name="txnDate"
                                value="20211201175959"
                            />
                            <input
                                type="text"
                                name="aggregatorID"
                                value="J_99923"
                            />
                            <input
                                type="text"
                                name="returnURL"
                                value="https://qa.phicommerce.com/pg/api/merchant"
                            />
                            <input
                                type="text"
                                name="secureHash" //alphanumeric
                                value={result}
                                onChange={(e) => setResult(e.target.value)}
                            />
                            <input
                                type="text"
                                name="hashText"
                                value={secureHash}
                                onChange={(e) => setSecureHash(e.target.value)}
                            />

                            {/* done */}
                            {item.paymentMode === "cash" ? (
                                <h3>
                                    You have already paid your amount in Cash{" "}
                                    <br />
                                    <a href="https://prioritypay.in/">
                                        Download your receipt for{" "}
                                        {item.billAmount}
                                    </a>
                                </h3>
                            ) : item.paymentMode === "online" ? (
                                <h4>
                                    {" "}
                                    You have to pay &#8377; {item.paidAmount} of
                                    &#8377; {item.billAmount}
                                    <br />
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => getHMACResult()}
                                    >
                                        Pay &#8377;{item.linkAmount} Now
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        // onClick={() => postPayment()}
                                    >
                                        Confirm
                                    </Button>
                                    {/* )} */}
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
                                        onClick={() =>
                                            console.log("in progress")
                                        }
                                    >
                                        Pay {item.linkAmount}
                                    </Button>
                                </h4>
                            )}
                            {secureHash + "value"}
                        </form>
                    </div>
                ))}
                {/* //end of map */}
            </div>
        </>
    );
}

export default Transaction;
