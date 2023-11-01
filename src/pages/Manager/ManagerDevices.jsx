import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Loader from "../../components/Loader";
import ManageDevices from "../../components/Manager/ManageDevices";
import {
   addDeviceApi,
   deleteDeviceApi,
   fetchDevicesApi,
   updateDeviceApi,
} from "../../services/DeviceApi";

function ManagerDevices() {
   const [devices, setDevices] = useState([]);
   const [loading, setLoading] = useState(false);
   const { user } = useAuth();
   useEffect(() => {
      async function retrieveDevices() {
         try {
            setLoading(true);
            const data = await fetchDevicesApi(user);
            setLoading(false);
            setDevices(data);
         } catch (error) {
            console.log(error.message);
         }
      }
      retrieveDevices();
   }, [user]);
   const deleteDevice = async (device) => {
      try {
         const data = await deleteDeviceApi(device, user);
         console.log(data);
         setDevices((devices) => devices.filter((dev) => dev.id !== device.id));
      } catch (error) {
         console.log(error.message);
      }
   };
   const updateDevice = async (device) => {
      try {
         const data = await updateDeviceApi(device, user);
         console.log(data);
         setDevices((devices) =>
            devices.map((dev) => (dev.id === device.id ? device : dev))
         );
      } catch (error) {
         console.log(error.message);
      }
   };
   const addDevice = async (device) => {
      try {
         const data = await addDeviceApi(device, user);
         console.log(data);
         setDevices((devices) => [...devices, device]);
      } catch (error) {
         console.log(error.message);
      }
   };
   return (
      <div>
         {loading && <Loader />}
         {devices && (
            <ManageDevices
               devices={devices}
               updateDevice={updateDevice}
               deleteDevice={deleteDevice}
               addDevice={addDevice}
            />
         )}
      </div>
   );
}

export default ManagerDevices;
