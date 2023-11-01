import axios from "axios";
const API_URL = "http://localhost:8086/api/users";
const fetchUsersApi = async (user) => {
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
const deleteUserApi = async (userObj, user) => {
   try {
      const resp = await axios.delete(`${API_URL}/${userObj?.id}`, {
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
const updateUserApi = async (userObj, user) => {
   try {
      const resp = await axios.put(`${API_URL}`, userObj, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      console.log(resp);
      return resp.data;
   } catch (error) {
      console.log(error);
      throw new Error("Failed to update the user.");
   }
};
const addUserApi = async (userObj, user) => {
   try {
      const resp = await axios.post(`${API_URL}`, userObj, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
         },
      });
      console.log(resp.data);
      return resp.data;
   } catch (error) {
      console.log(error?.message);
      throw new Error("Failed to add the user.");
   }
};
export { fetchUsersApi, addUserApi, updateUserApi, deleteUserApi };
