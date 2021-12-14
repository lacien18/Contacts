import { MdOutlineList } from "react-icons/md";
import { Col } from "react-bootstrap";

const Empty = () => {
  return (
    <Col>
      <MdOutlineList
        style={{
          color: "#AFB6BD",
          width: "100%",
        }}
      />
      <p
        style={{
          color: "#AFB6BD",
          textAlign: "center",
        }}
      >
        LISTA DE CONTACTOS VACIA
      </p>
    </Col>
  );
};

export default Empty;
