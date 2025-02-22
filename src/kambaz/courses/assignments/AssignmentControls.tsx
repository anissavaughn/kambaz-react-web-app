import {Container, InputGroup, Form, Button} from "react-bootstrap";
import {BsSearch } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
 return (
    <Container>
       <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" />
       Assignment
      </Button>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2"/>
        Group
      </Button>
    <InputGroup className="mb-3 w-50">
        <InputGroup.Text>
            <BsSearch />
        </InputGroup.Text>
        <Form.Control
            type="text"
            placeholder="Search..."
            className="border-gray"
        />
    </InputGroup>
  </Container>
);}
