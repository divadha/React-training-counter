import { Badge } from "react-bootstrap";

export interface Props {
  value: number;
}
function Display(props: Props) {
  return (
    <Badge bg="primary" style={{ fontSize: "5em" }}>
      {props.value}
    </Badge>
  );
}

export default Display;
