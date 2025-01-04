import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Mainlaiout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlaiout;