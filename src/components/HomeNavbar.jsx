import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HomeNavbar() {
   return (
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
         <Container>
            <Navbar.Brand href="/">Smart Devices</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
               id="basic-navbar-nav"
               className="justify-content-end"
            >
               <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default HomeNavbar;
