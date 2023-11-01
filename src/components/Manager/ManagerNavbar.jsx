import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function ManagerNavbar() {
   return (
      <div>
         <Navbar bg="dark" expand="lg" data-bs-theme="dark">
            <Container>
               <Navbar.Brand href="/">Smart Devices</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
               >
                  <Nav>
                     <Nav.Link as={Link} to="manage-users">
                        Users
                     </Nav.Link>

                     <Nav.Link as={Link} to="manage-devices">
                        Devices
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
}

export default ManagerNavbar;
