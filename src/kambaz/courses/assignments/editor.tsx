import { Form, InputGroup, Col, Button, Row, Card } from "react-bootstrap";
import { Container, FormGroup, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <FormGroup className="mb-3 w-75" controlId="wd-assignment-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="assignment-name" placeholder="A1 - ENV + HTML" />
            </FormGroup>

            <FormGroup className="mb-3 w-75" controlId="wd-textarea">
                <FormControl as="textarea" rows={3} placeholder="The assignment is available online. Submit a link to the landing page of your web application running on Netlify."/>
            </FormGroup>



            <FormGroup className="mb-2 ms-5" controlId="wd-assignment-name">
                <Row className="align-items-center mb-4 ms-4">
                    <Col xs="auto"><FormLabel className="ms-5">Points</FormLabel></Col>
                    <Col><FormControl className="w-50" type="assignment-name" placeholder="100" /></Col>
                </Row>

                <Row className="align-items-center mb-4">
                    <Col xs="auto"><FormLabel className="ms-0">Assignment Group</FormLabel></Col>
                    <Col>
                        <FormSelect className="ms-0 w-50">
                            <option selected>ASSIGNMENTS</option>
                            <option value="quiz">QUIZZES</option>
                            <option value="project">PROJECT</option>
                            <option value="exam">EXAM</option>
                        </FormSelect>
                    </Col>
                </Row>

                <Row className="align-items-center mb-4">
                    <Col xs="auto"><FormLabel className="ms-1">Display Grade as</FormLabel></Col>
                    <Col>
                        <FormSelect className="w-50">
                            <option selected>Percentage</option>
                            <option value="quiz">Letter</option>
                        </FormSelect>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs="auto" ><FormLabel className="ms-2 mt-4"  >Submission Type</FormLabel></Col>
                    <Col>
                        <Card  className="w-75">
                            <FormSelect className="ms-3 w-50 mb-3 mt-3">
                                <option selected>Online</option>
                                <option value="quiz">In-person</option>
                            </FormSelect>
                            <fieldset>
                                <Form.Group as={Row} className="mb-3 ms-5">
                                <FormLabel><b>Online Entry Options </b></FormLabel>
                                    <Col sm={10}>
                                        <Form.Check label="Text Entry" name="formHorizontalRadios"/>
                                        <Form.Check label="Website URL" checked name="formHorizontalRadios"/>
                                        <Form.Check label="Media Recordings" name="formHorizontalRadios"/>
                                        <Form.Check label="Student Annotation" name="formHorizontalRadios"/>
                                        <Form.Check label="File Uploads" name="formHorizontalRadios"/>
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="auto" ><FormLabel className="ms-5 mt-4"  >Assign</FormLabel></Col>
                    <Col className="ms-4">
                        <Card className="w-75">
                            <Form.Group as={Row} className="mb-1 mt-3 ms-3">
                            <FormLabel><b>Assign to</b></FormLabel>
                                <FormSelect className="ms-3 w-75 mb-1" multiple>
                                    <option selected>Everyone</option>
                                    <option value="quiz">Tony Stark</option>
                                    <option value="quiz">Bruce Wayne</option>
                                    <option value="quiz">Steve Rogers</option>
                                    <option value="quiz">Natasha Romanoff</option>
                                </FormSelect>
                            </Form.Group>

                            <Form.Group className="mb-1 ms-3">
                                <FormLabel className="mb-1 mt-3 ms-3"><b>Due</b></FormLabel>
                                <FormControl type="date" className="ms-3 w-50" placeholder="05-10-2023"/>
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-1 ms-3">
                                        <FormLabel className="mb-1 mt-3 ms-3"><b>Available From</b></FormLabel>
                                        <FormControl type="date" className="ms-3 w-50" placeholder="05-10-2023"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-1 ms-3">
                                        <FormLabel className="mb-1 mt-3 ms-3"><b>Until</b></FormLabel>
                                        <FormControl type="date" className="ms-3 w-50" placeholder="05-10-2023"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            


                        </Card>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup>
                <Button className="ms-2 float-end" variant="danger" type="submit">Save</Button>
                <Button className="float-end" variant="secondary" type="submit">Cancel</Button>
            </FormGroup>
        </div>
        
    );
}
