import { Table, CardHeader, Row, Col } from "reactstrap";
import Device from "./Device";

function Devices({ devices }) {
   return (
      <>
         <CardHeader>
            <strong> My Devices </strong>
         </CardHeader>
         <Row>
            <Col sm={{ size: "8", offset: 2 }}>
               <Table dark hover responsive striped>
                  <thead>
                     <tr>
                        <th>Description</th>
                        <th>Address</th>
                        <th>EnergyConsumption</th>
                     </tr>
                  </thead>
                  <tbody>
                     {devices.map((device, index) => (
                        <Device key={index} device={device}></Device>
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </>
   );
}

export default Devices;
