import AssignmentControls from "./AssignmentControls";
import { ListGroup } from "react-bootstrap";
import HeaderControlButtons from "./HeaderControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from 'react-icons/bs'
import { TfiPencilAlt } from "react-icons/tfi";

export default function Assignments() {
    return (
        <div>
        <AssignmentControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">

                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-assignment p-3 ps-1 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS<HeaderControlButtons />
                    </ListGroup.Item>

                    <ListGroup.Item className="wd-assignment p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <TfiPencilAlt className="me-2 fs-3 document-icon" />
                        <b><a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >A1 - ENV + HTML</a></b><AssignmentControlButtons /> 
                        <p className= "mb-0 ps-5 p-1">
                            <span className="text-danger ps-4">Multiple Modules</span> | 
                            <b> Not available until </b>  May 6 at 12:00am | 
                            <b> Due </b>  May 13 at 11:59pm | 100 pts
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item className="wd-assignment p-3 ps-1">
                        <BsGripVertical className=" align-items-center me-2 fs-3" />
                        <TfiPencilAlt className=" align-items-center me-2 fs-3 document-icon" />
                        <b><a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >A2 - CSS + BOOTSTRAP</a></b><AssignmentControlButtons />
                        <p className= "mb-0 ps-5 p-1">
                            <span className="text-danger ps-4">Multiple Modules</span> | 
                            <b> Not available until </b>  May 13 at 12:00am | 
                            <b> Due </b>  May 20 at 11:59pm | 100 pts
                        </p> 
                    </ListGroup.Item>

                    <ListGroup.Item className="wd-assignment p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <TfiPencilAlt className="me-2 fs-3 document-icon" />
                        <b><a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >A3 - JAVASCRIPT + REACT</a></b><AssignmentControlButtons />
                        <p className= "mb-0 ps-5 p-1">
                            <span className="text-danger ps-4">Multiple Modules</span> | 
                            <b> Not available until </b>  May 20 at 12:00am | 
                            <b> Due </b>  May 27 at 11:59pm | 100 pts
                        </p>
                    </ListGroup.Item>
                </ListGroup>
                
            </ListGroup.Item>

        </ListGroup>
      </div> 
    );
}