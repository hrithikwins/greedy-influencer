import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transaction from "./pages/transaction";
import Payphi from "./pages/payphi";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/:transactionId" element={<Payphi />}></Route>
                    <Route path="/payphi" element={<Payphi />}></Route>
                    <Route
                        path="/transaction/:transactionId"
                        element={<Transaction />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
