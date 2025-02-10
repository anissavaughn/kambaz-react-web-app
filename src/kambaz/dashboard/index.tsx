import { Link } from "react-router-dom";
import {Row, Card, Col, Button} from "react-bootstrap"

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">

                    {/*course one*/}
                    <Col className="wd-dashboard-course-link text-decoration-none text-dark"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/ai-ml.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 6140 Machine Learning</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    AI Engineer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/*course two*/}
                    <Col className="wd-dashboard-course"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/devops.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 6620 Cloud Computing</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    DevOps Engineer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/*course three*/}
                    <Col className="wd-dashboard-course"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/game.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 3540 Game Programming</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Video Game Developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/*course four*/}
                    <Col className="wd-dashboard-course"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/mobile.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 4520 Mobile App Development</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    iOS Engineer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/*course five*/}
                    <Col className="wd-dashboard-course"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/stats.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 2810 Mathematics of Data Models</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Quant Trader</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/*course six*/}
                    <Col className="wd-dashboard-course"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/ux-research.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 7300 Human Computer Interaction</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    UX Researcher</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/*course seven*/}
                    <Col className="wd-dashboard-course"  style={{ width: "250px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/write-docs.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 1234 Advanced Writing in the Technical Professions</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Technical Writer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
);}