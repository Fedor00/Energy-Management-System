import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
   addUserApi,
   deleteUserApi,
   fetchUsersApi,
   updateUserApi,
} from "../../services/UserApi";
import ManageUsers from "../../components/Manager/ManageUsers";
import Loader from "../../components/Loader";

function ManagerUsers() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const { user } = useAuth();
   useEffect(() => {
      async function retrieveDevices() {
         try {
            setLoading(true);
            const data = await fetchUsersApi(user);
            setLoading(false);
            setUsers(data);
         } catch (error) {
            console.log(error.message);
         }
      }
      retrieveDevices();
   }, [user]);
   const deleteUser = async (userObj) => {
      try {
         const data = await deleteUserApi(userObj, user);
         console.log(data);
         setUsers((users) => users.filter((u) => u.id !== userObj.id));
      } catch (error) {
         console.log(error.message);
      }
   };
   const updateUser = async (userObj) => {
      try {
         const data = await updateUserApi(userObj, user);
         console.log(data);
         setUsers((users) =>
            users.map((u) => (u.id === userObj.id ? userObj : u))
         );
      } catch (error) {
         console.log(error.message);
      }
   };
   const addUser = async (userObj) => {
      try {
         const data = await addUserApi(userObj, user);
         console.log(data);
         setUsers((users) => [...users, userObj]);
      } catch (error) {
         console.log(error.message);
      }
   };
   console.log(users);
   return (
      <div>
         {loading && <Loader />}
         {users && (
            <ManageUsers
               users={users}
               updateUser={updateUser}
               deleteUser={deleteUser}
               addUser={addUser}
            />
         )}
      </div>
   );
}

export default ManagerUsers;
