import { Container, Row, Col } from "react-bootstrap";
import Device from "../Manager/Device";
import { useState } from "react";
import CustomPagination from "../CustomPagination"; // import the new component

function UserDevices({ devices }) {
   const ITEMS_PER_PAGE = 5;
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(devices?.length / ITEMS_PER_PAGE);
   const currentDevices = devices?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
   );

   return (
      <Container>
         <Row>
            <Col>
               {currentDevices?.map((device, index) => (
                  <Device key={index} device={device}></Device>
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

export default UserDevices;
