import { Table, Container, Row, Col } from "react-bootstrap";
import Device from "./Device";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function Devices({ devices }) {
   const ITEMS_PER_PAGE = 5;
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(devices.length / ITEMS_PER_PAGE);
   const currentDevices = devices.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
   );
   const prevPage = () => {
      if (currentPage > 1) setCurrentPage((c) => c - 1);
   };
   const nextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
   };

   return (
      <Container>
         <Row>
            <Col>
               <Table variant="dark" hover responsive striped>
                  <thead>
                     <tr>
                        <th>Description</th>
                        <th>Address</th>
                        <th>EnergyConsumption</th>
                     </tr>
                  </thead>
                  <tbody>
                     {currentDevices.map((device, index) => (
                        <Device key={index} device={device}></Device>
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
         <Row>
            <Col sm={{ size: "auto", offset: 5 }}>
               <Pagination>
                  <Pagination.Prev onClick={prevPage}></Pagination.Prev>
                  {[...Array(totalPages)].map((_, index) => (
                     <Pagination.Item
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                     >
                        {index + 1}
                     </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={nextPage}></Pagination.Next>
               </Pagination>
            </Col>
         </Row>
      </Container>
   );
}

export default Devices;
