import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Display from "../components/Display";

function Counter() {
  const [value, setValue] = useState(0);
  const MAX_VALUE = 10;

  function onClickHandle(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target) console.log(target.value);
    const countUp = target.id === "countUp";
    if (countUp && value < MAX_VALUE) {
      setValue(value + 1);
    } else if (!countUp && value > 0) {
      setValue(value - 1);
    }
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <Display value={value} />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <Button id="countDown" variant="danger" onClick={onClickHandle}>
            -
          </Button>
        </Col>
        <Col xs lg="5">
          <Button id="countUp" variant="success" onClick={onClickHandle}>
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
