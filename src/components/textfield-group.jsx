import { TextField } from "@material-ui/core";

const TextFieldCustom = ({ name, label }) => {
    return (
        <>
            <div className="row ">
                <div className="col-md-4">{label}</div>
                <div className="col-md-8">
                    <TextField type="text" name={name} />
                </div>
            </div>
        </>
    );
};
export default TextFieldCustom;
