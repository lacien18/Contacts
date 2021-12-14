import { Row } from "react-bootstrap";

const ItemData = (props) => {
 const { header, data } = props;

  return (
    <Row>
      <p>
        <b>{header}: </b>
        {data}
      </p>
    </Row>
  );
};

export default ItemData;
