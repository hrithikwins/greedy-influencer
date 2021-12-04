import { TextField } from "@material-ui/core";
import Header from "../components/header";
import TextFieldCustom from "../components/textfield-group";

function Payphi() {
    var list = [
        "merchantID",
        "merchantTxnID",
        "txnAmount",
        "currencyCode",
        "Pay Type",
        "paymentMode",
        "customerEmailID",
        "transactionType",
        "paymentOptionCodes",
        "txnDate",
        "cardNo",
        "cardExp",
        "nameOnCard",
        "cvv",
        "customerUPIAlias",
        "aggregatorID",
        "remarks",
        "customerName",
        "customerMobileNo",
        "invoiceNo",
        "returnURL",
        "addlParam1",
        "allowDisablePaymentMode",
        "addlParam2",
        "secureHash",
        "hashtext",
    ];
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="px-5 py-4">
                            {list.map((item, index) => {
                                return (
                                    <TextFieldCustom name="name" label={item} />
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-md-4">Logo</div>
                </div>
            </div>
        </>
    );
}

export default Payphi;
