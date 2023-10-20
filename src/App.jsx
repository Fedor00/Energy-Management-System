import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import UserProfile from "./pages/UserProfile";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Unauthorized from "./pages/Unauthorized";
import ManagerProfile from "./pages/ManagerProfile";
import "./App.css";
function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <AuthProvider>
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
                     <Route
                        path="manager-profile"
                        element={<ManagerProfile />}
                     />
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </AuthProvider>
         </BrowserRouter>
      </div>
   );
}

export default App;
