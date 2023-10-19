import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import UserProfile from "./pages/UserProfile";
function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <Routes>
               <Route index element={<Homepage />}></Route>
               <Route path="login" element={<Login />} />
               <Route path="user-profile" element={<UserProfile />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;
