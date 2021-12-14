import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const ItemCard = (props) => {
  const { deleteContact, contact, id } = props;

  return (
    <Card style={{ borderRadius: 100, padding: 0, marginTop: 20 }}>
      <Card.Body>
        <Row>
          <Col sm={2} style={{ alignSelf: "center" }}>
            <Image
              src="https://www.uninorte.edu.co/documents/16170690/0/blank-profile-picture-973460_1280.png/89bbd660-749a-470b-a63f-4e5ab8d85d7d?t=1613674768939"
              roundedCircle
              style={{ width: 80 }}
            />
          </Col>
          <Col>
            <Row>
              <b>
                <p>NAME:</p>
              </b>
              <p>{contact.name}</p>
            </Row>
            <Row>
              <b>
                <p>LASTNAME:</p>
              </b>
              <p>{contact.lastname}</p>
            </Row>
            <Row>
              <b>
                <p>PHONE:</p>
              </b>
              <p>{contact.phone}</p>
            </Row>
            <Row>
              <b>
                <p>ADDRESS:</p>
              </b>
              <p>{contact.address}</p>
            </Row>
          </Col>
          <Col>
            <Row sm={3}>
              <Button
                variant="danger"
                style={{ borderRadius: 100 }}
                onClick={() => deleteContact(id)}
              >
                <MdDelete />
              </Button>
              <Button variant="warning" style={{ borderRadius: 100 }}>
                <MdModeEditOutline />
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
