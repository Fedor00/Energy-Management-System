import { Accordion, ListGroup } from "react-bootstrap";
import styles from "./User.module.css";
function User({ user }) {
   return (
      <div>
         {user && (
            <Accordion defaultActiveKey="0">
               <Accordion.Item className={styles.device}>
                  <Accordion.Header className={styles.deviceHeader}>
                     {user.email}
                  </Accordion.Header>
                  <Accordion.Body className="d-flex">
                     <ListGroup variant="dark" horizontal>
                        <ListGroup.Item className="bg-dark text-white">
                           Id: <span className="text-success">{user.id}</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">
                           UserName:{" "}
                           <span className="text-success">{user.userName}</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">
                           PhoneNumber:{" "}
                           <span className="text-success">
                              {user.phoneNumber}
                           </span>
                        </ListGroup.Item>
                     </ListGroup>
                  </Accordion.Body>
               </Accordion.Item>
            </Accordion>
         )}
      </div>
   );
}

export default User;
