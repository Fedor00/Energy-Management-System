import axios from "axios";

const API_URL = "http://localhost:5195/api/account";

const login = async (email, password) => {
   try {
      const resp = await axios.post(
         `${API_URL}/login`,
         { email, password },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
      return resp.data;
   } catch (error) {
      console.error(error.response.data);
      throw new Error("Failed to login.");
   }
};
export { login };
