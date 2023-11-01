import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function DeviceForm({ setShowForm, showForm, device, handleDeviceData }) {
   const [formData, setFormData] = useState(device);
   const handleClose = () => {
      setShowForm(false);
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };
   const handleSubmit = () => {
      handleClose();
      handleDeviceData(formData);
   };
   useEffect(() => {
      setFormData(device);
   }, [device]);
   return (
      <div>
         <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Device Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3">
                     <Form.Label>User Id</Form.Label>
                     <Form.Control
                        type="number"
                        name="userId"
                        placeholder="User id"
                        value={formData.userId}
                        onChange={handleChange}
                        autoFocus
                     />
                     <Form.Label>Address</Form.Label>
                     <Form.Control
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                     />
                     <Form.Label>Description</Form.Label>
                     <Form.Control
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                     />
                     <Form.Label>Energy Consumption</Form.Label>
                     <Form.Control
                        type="number"
                        name="energyConsumption"
                        placeholder="Energy Consumption"
                        value={formData.energyConsumption}
                        onChange={handleChange}
                     />
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

export default DeviceForm;
