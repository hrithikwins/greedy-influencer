import { TextField, Button } from "@material-ui/core";
import Header from "../components/header";
import TextFieldCustom from "../components/textfield-group";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Image1 from "../images/rupee.jpeg";

function Payphi() {
    let { transactionId } = useParams();
    let navigate = useNavigate();
    //get transaction success or failure

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Image1} alt="rupee" className="w-100" />
                    </div>

                    <div className="col-md-8">
                        <div className="px-5 py-4">
                            {/* {list.map((item, index) => {
                                return (
                                    <TextFieldCustom name="name" label={item} />
                                );
                            })} */}
                            {transactionId && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        navigate(`transaction/${transactionId}`)
                                    }
                                >
                                    download the payment receipt
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payphi;
