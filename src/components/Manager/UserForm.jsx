import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function UserForm({ setShowForm, showForm, user, handleUserData }) {
   const [formData, setFormData] = useState(user);
   const [confirmPassword, setConfirmPassword] = useState("");
   const isAddAction = !user.password;

   const handleClose = () => {
      setShowForm(false);
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "confirmPassword") {
         setConfirmPassword(value);
         return;
      }
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = () => {
      if (isAddAction && formData.password !== confirmPassword) {
         alert("Passwords do not match!");
         return;
      }
      handleClose();
      handleUserData(formData);
   };

   useEffect(() => {
      setFormData(user);
   }, [user]);

   return (
      <div>
         <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>User Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3">
                     <Form.Label>Email</Form.Label>
                     <Form.Control
                        type="text"
                        name="email"
                        placeholder="User Email"
                        value={formData.email}
                        onChange={handleChange}
                        autoFocus
                     />
                     <Form.Label>User Name</Form.Label>
                     <Form.Control
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        value={formData.userName}
                        onChange={handleChange}
                     />
                     <Form.Label>PhoneNumber</Form.Label>
                     <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                     />
                     {isAddAction || formData.password ? (
                        <>
                           <Form.Label>Password</Form.Label>
                           <Form.Control
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                           />
                           {isAddAction && (
                              <>
                                 <Form.Label>Confirm Password</Form.Label>
                                 <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                 />
                              </>
                           )}
                        </>
                     ) : null}
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleSubmit}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}

export default UserForm;
