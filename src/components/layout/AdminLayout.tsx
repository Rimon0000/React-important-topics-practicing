import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () =>{
    return (
        <div className="flex">
            <div className="flex-[1]">
            <SideBar></SideBar>
            </div>
            <div className="flex-[4]">
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AdminLayout;