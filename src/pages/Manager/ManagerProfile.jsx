import { Outlet } from "react-router-dom";
import ManagerNavbar from "../../components/Manager/ManagerNavbar";

function ManagerProfile() {
   return (
      <div>
         <ManagerNavbar />
         <Outlet />
      </div>
   );
}

export default ManagerProfile;
