import { Spinner, Row, Form } from "react-bootstrap";

const Loading = (_) => {
  return (
    <Row className="justify-content-md-center">
      <Spinner
        as="span"
        animation="grow"
        role="status"
        aria-hidden="true"
        variant="primary"
      ></Spinner>
      <Form.Label
        style={{
          textAlign: "center",
        }}
      >
        CARGANDO...
      </Form.Label>
    </Row>
  );
};

export default Loading;
