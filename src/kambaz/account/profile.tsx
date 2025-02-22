import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <Form.Control id="wd-username"
             placeholder="username"
             defaultValue="alice"
             className="mb-2"/>

      <Form.Control id="wd-password"
             placeholder="password"
             type="password"
             className="mb-2"/>

      <Form.Control id="wd-firstname"
             placeholder="first name"
             defaultValue="Alice"
             className="mb-2"/>

      <Form.Control id="wd-lastname"
             placeholder="last name"
             defaultValue="Wonderland"
             className="mb-2"/>
      
      <Form.Control id="wd-dob"
             type="date"
             placeholder="2000-01-01"
             className="mb-2"/>

      <Form.Control id="wd-email"
             type="email"
             placeholder="alice@wonderland"
             className="mb-2"/>

      <Form.Select id="wd-role" className="ms-0 w-75 mb-3 ">
              <option selected>Faculty</option>
              <option value='user'>User</option>
              <option value="admin">Admin</option>
              <option value="student">Studet</option>
          </Form.Select>

        <Link id="wd-signup-btn"
            to="/Kambaz/Account/Signin"
            className="danger btn btn-danger w-100 mb-2">
            Signout </Link><br />
    </div>
  );
}
