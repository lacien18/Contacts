import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

const FormContact = (props) => {
  const { onAcept, contact } = props;

  return (
    <Col>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <FormControl
            type="text"
            placeholder="Nombres"
            onChange={(value) => {
              contact.name = value.target.value;
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Apellidos"
            onChange={(value) => {
              contact.lastname = value.target.value;
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Control
            type="text"
            placeholder="Numero de telefono"
            onChange={(value) => {
              contact.phone = value.target.value;
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddresStreet">
          <Form.Control
            type="text"
            placeholder="Dirección"
            onChange={(value) => {
              contact.address = value.target.value;
            }}
          />
        </Form.Group>

        <Row>
          <Col>
            <Button
              type="reset"
              defaultValue="Reset"
              variant="primary"
              onClick={onAcept}
              style={{ width: "100%" }}
            >
              Agregar
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              type="reset"
              defaultValue="Reset"
              style={{ width: "100%" }}
            >
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default FormContact;
