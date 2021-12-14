import { Container, Row, Col, Navbar, Badge } from "react-bootstrap";
import React from "react";
import ItemCard from "./components/ItemCard";
import FormContact from "./components/FormContact";
import useContacts from "./hook/useContact";
import Loading from "./components/Loading";
import Empty from "./components/Empty";
import UseModalName from "./hook/useModalName";
import ModalName from "./components/Modal";

const App = () => {
  const { contact, listContacts, addContact, deleteContact, loading } =
    useContacts();

  const { addName, openModal, setOpenModal, nameProfile, setNameProfile } =
    UseModalName();

  return (
    <div>
      <ModalName
        show={openModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setNameProfile={setNameProfile}
        addName={addName}
      />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#">WELLCOME {nameProfile}</Navbar.Brand>
        </Container>

        <Navbar.Brand href="#">
          Contactos{" "}
          <Badge bg={listContacts.length !== 0 ? "primary" : "secondary"}>
            {listContacts.length}
          </Badge>
        </Navbar.Brand>
      </Navbar>
      <Container style={{ padding: 40 }}>
        <Row>
          <Col
            style={{
              alignSelf: "center",
            }}
          >
            {loading ? (
              <Loading />
            ) : listContacts.length !== 0 ? (
              listContacts.map((e, index) => (
                <ItemCard
                  contact={e}
                  id={index}
                  key={index}
                  deleteContact={deleteContact}
                />
              ))
            ) : (
              <Empty />
            )}
          </Col>
          <FormContact onAcept={addContact} contact={contact} />
        </Row>
      </Container>
    </div>
  );
};

export default App;
