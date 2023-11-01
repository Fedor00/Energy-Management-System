import { useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import CustomPagination from "../CustomPagination";
import User from "../User/User";
import UserForm from "./UserForm";
import Search from "../Search";

function ManageUsers({ users, deleteUser, updateUser, addUser }) {
   const ITEMS_PER_PAGE = 5;
   const [currentPage, setCurrentPage] = useState(1);
   const [showForm, setShowForm] = useState(false);
   const [operation, setOperation] = useState("");
   const defaultUser = {
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
   };
   const [userSelected, setUserSelected] = useState(defaultUser);
   const [searchQuery, setSearchQuery] = useState("");
   const totalPages = Math.ceil(users?.length / ITEMS_PER_PAGE);

   const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const currentUsers = filteredUsers.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
   );

   const chosenMethod = operation === "add" ? addUser : updateUser;

   const handleUpdate = (user) => {
      setUserSelected(user);
      setOperation("update");
      setShowForm(true);
   };

   const handleAdd = () => {
      setUserSelected(defaultUser);
      setOperation("add");
      setShowForm(true);
   };

   const onSearch = (input) => {
      setSearchQuery(input);
   };

   return (
      <Container>
         <UserForm
            showForm={showForm}
            setShowForm={setShowForm}
            user={userSelected}
            handleUserData={chosenMethod}
         ></UserForm>
         <Row>
            <Col>
               <Button className="mb-3" onClick={handleAdd}>
                  Add
               </Button>
            </Col>
            <Col sm={{ offset: 6 }}>
               <Search onSearch={onSearch}></Search>
            </Col>
         </Row>
         <Row>
            <Col>
               {currentUsers?.map((user, index) => (
                  <div key={index} className="d-flex  mb-3">
                     <div className="ml-3  flex-grow-1">
                        <User key={user?.id} user={user}></User>
                     </div>

                     <Dropdown className="d-flex align-items-start m-2">
                        <Dropdown.Toggle
                           variant="dark"
                           id="dropdown-basic"
                        ></Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => deleteUser(user)}>
                              Delete
                           </Dropdown.Item>
                           <Dropdown.Item onClick={() => handleUpdate(user)}>
                              Update
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
               ))}
            </Col>
         </Row>
         <Row>
            <Col className="d-flex justify-content-center">
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

export default ManageUsers;
