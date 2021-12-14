import { Row, Image, Button } from "react-bootstrap";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const CardAvatar = (props) => {
  const { deleteContact, id } = props;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 10,
        padding:10,
      }}
    >
      <Image
        src="https://www.uninorte.edu.co/documents/16170690/0/blank-profile-picture-973460_1280.png/89bbd660-749a-470b-a63f-4e5ab8d85d7d?t=1613674768939"
        roundedCircle
        style={{ width: 80, alignSelf: "center" }}
      />
      <hr></hr>
      <Row className="justify-content-md-center" sm={3}>
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
    </div>
  );
};

export default CardAvatar;
