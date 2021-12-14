import { Modal, Button, Form, FormControl } from "react-bootstrap";

const ModalName = (props) => {
  const { show, setOpenModal, addName, setNameProfile } = props;

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Hola! ✋ </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Esto es importante para guardar los contactos a tu nombre</p>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <FormControl
              type="text"
              placeholder="Ingresa tu nombre completo"
              onChange={(value) => {
                setNameProfile(value.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          type="reset"
          defaultValue="Reset"
          variant="secondary"
          onClick={() => setOpenModal(false)}
        >
          Cerrar
        </Button>
        <Button
          type="reset"
          defaultValue="Reset"
          variant="primary"
          onClick={() => addName()}
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalName;
