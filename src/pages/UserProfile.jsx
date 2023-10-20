import { useState, useEffect } from "react";
import { userDevices } from "../services/DeviceApi";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import Devices from "../components/Devices";
function UserProfile() {
   const [devices, setDevices] = useState([]);
   const [loading, setLoading] = useState(false);
   const { user } = useAuth();
   useEffect(() => {
      async function retrieveDevices() {
         try {
            setLoading(true);
            const data = await userDevices(user);
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
         {devices && <Devices devices={devices}></Devices>}
      </div>
   );
}

export default UserProfile;
