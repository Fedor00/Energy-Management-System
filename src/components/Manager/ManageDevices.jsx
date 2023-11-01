import { useState } from "react";
import { Button, Col, Container, Dropdown, Row, Stack } from "react-bootstrap";
import CustomPagination from "../CustomPagination";
import Device from "./Device";

import DeviceForm from "./DeviceForm";
import Search from "../Search";

function ManageDevices({ devices, deleteDevice, updateDevice, addDevice }) {
   const ITEMS_PER_PAGE = 5;
   const [currentPage, setCurrentPage] = useState(1);
   const [showForm, setShowForm] = useState(false);
   const [operation, setOperation] = useState("");
   const defaultDevice = {
      userId: "",
      description: "",
      address: "",
      energyConsumption: "",
   };
   const [deviceSelected, setDeviceSelected] = useState(defaultDevice);
   const [searchQuery, setSearchQuery] = useState(""); // State to store search query

   const totalPages = Math.ceil(devices?.length / ITEMS_PER_PAGE);

   const filteredDevices = devices.filter((device) =>
      device.description.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const currentDevices = filteredDevices.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
   );

   const chosenMethod = operation === "add" ? addDevice : updateDevice;

   const handleUpdate = (device) => {
      setDeviceSelected(device);
      setOperation("update");
      setShowForm(true);
   };

   const handleAdd = () => {
      setDeviceSelected(defaultDevice);
      setOperation("add");
      setShowForm(true);
   };

   const onSearch = (input) => {
      setSearchQuery(input);
   };

   return (
      <Container>
         <DeviceForm
            setShowForm={setShowForm}
            showForm={showForm}
            device={deviceSelected}
            handleDeviceData={chosenMethod}
         ></DeviceForm>
         <Row>
            <Col>
               <Button className="mb-3" onClick={handleAdd}>
                  Add
               </Button>
            </Col>
            <Col>
               <Search onSearch={onSearch}></Search>
            </Col>
         </Row>
         <Stack direction="horizontal" gap={5} className="d-flex"></Stack>

         <Row>
            <Col>
               {currentDevices?.map((device, index) => (
                  <div key={index} className="d-flex  mb-3">
                     <div className="ml-3  flex-grow-1">
                        <Device key={device?.id} device={device}></Device>
                     </div>

                     <Dropdown className="d-flex align-items-start m-2">
                        <Dropdown.Toggle
                           variant="dark"
                           id="dropdown-basic"
                        ></Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => deleteDevice(device)}>
                              Delete
                           </Dropdown.Item>
                           <Dropdown.Item onClick={() => handleUpdate(device)}>
                              Update
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
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

export default ManageDevices;
