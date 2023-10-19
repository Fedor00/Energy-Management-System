import { useAuth } from "../contexts/AuthContext";

function Login() {
   const { handleLogin, handleLogout } = useAuth();
   return (
      <div>
         <button
            onClick={() => handleLogin("admin@gmail.com", "TrashTalker00@")}
         >
            Login
         </button>
         <button onClick={handleLogout}>Logout</button>
      </div>
   );
}

export default Login;
