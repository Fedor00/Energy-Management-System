import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import UserProfile from "./pages/UserProfile";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Unauthorized from "./pages/Unauthorized";
import ManagerProfile from "./pages/Manager/ManagerProfile";
import "./App.css";
import ManagerUsers from "./pages/Manager/ManagerUsers";
import ManagerDevices from "./pages/Manager/ManagerDevices";
function App() {
   return (
      <div className="app">
         <AuthProvider>
            <BrowserRouter>
               <Routes>
                  <Route index element={<Homepage />}></Route>
                  <Route path="login" element={<Login />} />
                  <Route path="unauthorized" element={<Unauthorized />} />
                  <Route element={<ProtectedRoutes allowedRoles={["User"]} />}>
                     <Route path="user-profile" element={<UserProfile />} />
                  </Route>
                  <Route
                     element={<ProtectedRoutes allowedRoles={["Manager"]} />}
                  >
                     <Route path="manager-profile" element={<ManagerProfile />}>
                        <Route
                           path="manage-users"
                           element={<ManagerUsers />}
                        ></Route>
                        <Route
                           path="manage-devices"
                           element={<ManagerDevices />}
                        ></Route>
                     </Route>
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </BrowserRouter>{" "}
         </AuthProvider>
      </div>
   );
}

export default App;
