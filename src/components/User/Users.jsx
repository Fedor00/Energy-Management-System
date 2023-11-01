import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomPagination from "../CustomPagination";
import User from "./User";

function Users({ users }) {
   const ITEMS_PER_PAGE = 5;
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(users?.length / ITEMS_PER_PAGE);
   const currentUsers = users?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
   );
   return (
      <Container>
         <Row>
            <Col>
               {currentUsers?.map((user, index) => (
                  <User key={index} user={user}></User>
               ))}
            </Col>
         </Row>
         <Row>
            <Col sm={{ offset: 5 }}>
               <CustomPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
               />
            </Col>
         </Row>
      </Container>
   );
}

export default Users;
