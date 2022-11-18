import Navbar from "./components/Navbar/Navbar.js";
import { HashRouter,Router } from "react-router-dom";

function AllRoutes() {
    return(
        <>
        <HashRouter>
        <Navbar></Navbar>
        </HashRouter>
        </>
    )
}

export default AllRoutes;