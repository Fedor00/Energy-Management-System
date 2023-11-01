import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import UserDevices from "../components/User/UserDevices";
import { userDevicesApi } from "../services/DeviceApi";
function UserProfile() {
   const [devices, setDevices] = useState(null);
   const [loading, setLoading] = useState(false);
   const { user } = useAuth();
   useEffect(() => {
      async function retrieveDevices() {
         try {
            setLoading(true);
            const data = await userDevicesApi(user);
            setLoading(false);
            setDevices(data);
         } catch (error) {
            console.log(error.message);
         }
      }
      retrieveDevices();
   }, [user]);
   return (
      <div>
         {loading && <Loader />}
         {devices && <UserDevices devices={devices}></UserDevices>}
      </div>
   );
}

export default UserProfile;
