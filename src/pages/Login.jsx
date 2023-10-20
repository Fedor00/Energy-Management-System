import { Form, Container, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
   const { handleLogin, user } = useAuth();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   useEffect(() => {
      if (user) {
         navigate(`/${user?.roles[0]}-profile`, { replace: true });
      }
   }, [user, navigate]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setError("");
         await handleLogin(email, password);
      } catch (err) {
         console.log(err?.message);
         setError(err?.message);
      }
   };

   return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
         <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
               <Form.Label>Email Address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               ></Form.Control>
            </Form.Group>
            <Form.Group>
               <Form.Label>Password</Form.Label>
               <Form.Control
                  size="lg"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               ></Form.Control>
            </Form.Group>
            <br />
            <Button size="lg" type="submit" style={{ width: "100%" }}>
               Login
            </Button>
         </Form>
      </Container>
   );
}

export default Login;
