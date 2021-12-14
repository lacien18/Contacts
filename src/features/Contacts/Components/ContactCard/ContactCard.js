import { Row, Col, Card } from "react-bootstrap";
import CardAvatar from "./CardAvatar";
import ItemData from "./CardData";

const ContactCard = (props) => {
  const { deleteContact, contact, id } = props;

  return (
    <Card style={{ borderRadius: 100, padding: 0, marginTop: 20 }}>
      <Card.Body>
        <Row>
          <Col sm={3}>
            <CardAvatar deleteContact={deleteContact} id={id} />
          </Col>
          <Col sm={9}>
            <ItemData header="NAME" data={contact.name} />
            <ItemData header="LASTNAME" data={contact.lastname} />
            <ItemData header="PHONE" data={contact.phone} />
            <ItemData header="ADDRESS" data={contact.address} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
