import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    {/* <Route path="/home" element={<Home />}></Route> */}
                    <Route path="/home" element={<Search />}></Route>
                    {/* <Route path="/:transactionId" element={<Payphi />}></Route>
                    <Route path="/payphi" element={<Payphi />}></Route> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
