import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import GuestNavbar from "./GuestNavbar";



export default function GuestLayout() {
    return(
        <div>
            < GuestNavbar />
            <Header />
            <Outlet />
        </div>
    )
}