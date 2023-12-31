import axios from "axios";

const API_URL = "http://localhost:8085/api/devices";

const userDevicesApi = async (user) => {
   try {
      const resp = await axios.get(`${API_URL}/user`, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      return resp.data;
   } catch (error) {
      throw new Error("Failed to retrieve devices for current user.");
   }
};
const fetchDevicesApi = async (user) => {
   try {
      const resp = await axios.get(`${API_URL}`, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      return resp.data;
   } catch (error) {
      throw new Error("Failed to retrieve devices .");
   }
};
const deleteDeviceApi = async (device, user) => {
   try {
      const resp = await axios.delete(`${API_URL}/${device?.id}`, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      console.log(resp);
      return resp.data;
   } catch (error) {
      console.log(error);
      throw new Error("Failed to delete the device.");
   }
};
const updateDeviceApi = async (device, user) => {
   try {
      const resp = await axios.put(`${API_URL}`, device, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      console.log(resp);
      return resp.data;
   } catch (error) {
      console.log(error);
      throw new Error("Failed to update the device.");
   }
};
const addDeviceApi = async (device, user) => {
   try {
      const resp = await axios.post(`${API_URL}`, device, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      console.log(resp);
      return resp.data;
   } catch (error) {
      console.log(error);
      throw new Error("Failed to add the device.");
   }
};
export {
   userDevicesApi,
   fetchDevicesApi,
   deleteDeviceApi,
   updateDeviceApi,
   addDeviceApi,
};
