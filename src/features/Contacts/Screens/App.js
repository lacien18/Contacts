import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import ContactCard from "../Components/ContactCard/ContactCard";
import FormContact from "../Components/FormContact";
import useContacts from "../hook/useContact";
import Loading from "../../../core/components/Loading";
import Empty from "../../../core/components/Empty";
import UseModalName from "../hook/useModalName";
import ModalName from "../../../core/components/Modal";
import NavBar from "../../../core/components/NavBar";

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
      <NavBar nameProfile={nameProfile} count={listContacts.length} />
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
                <ContactCard
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
