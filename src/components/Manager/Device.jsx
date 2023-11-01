import { Accordion, ListGroup } from "react-bootstrap";
import styles from "./Device.module.css";
function Device({ device }) {
   return (
      device && (
         <Accordion defaultActiveKey="0">
            <Accordion.Item className={styles.device}>
               <Accordion.Header className={styles.deviceHeader}>
                  {device.description}
               </Accordion.Header>
               <Accordion.Body className="d-flex">
                  <ListGroup variant="dark" horizontal>
                     <ListGroup.Item className="bg-dark text-white">
                        Address:{" "}
                        <span className="text-success">{device.address}</span>
                     </ListGroup.Item>
                     <ListGroup.Item className="bg-dark text-white">
                        Intake:{" "}
                        <span className="text-success">
                           {device.energyConsumption}/h
                        </span>
                     </ListGroup.Item>
                     {device?.userId && (
                        <ListGroup.Item className="bg-dark text-white">
                           User Id:{" "}
                           <span className="text-success">{device.userId}</span>
                        </ListGroup.Item>
                     )}
                  </ListGroup>
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      )
   );
}

export default Device;
