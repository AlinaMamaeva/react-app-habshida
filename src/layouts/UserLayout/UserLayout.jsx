import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import UserNavbar from "./UserNavbar";



export default function UserLayout() {
    return(
        <div >
            < UserNavbar />
            <Header />
            <Outlet />
        </div>
    )
}