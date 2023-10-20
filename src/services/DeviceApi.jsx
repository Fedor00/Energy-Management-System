import axios from "axios";

const API_URL = "http://localhost:5201/api/devices";

const userDevices = async (user) => {
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
export { userDevices };
