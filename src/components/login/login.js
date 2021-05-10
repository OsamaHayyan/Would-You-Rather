import React, { useEffect } from "react";
import "./login.css";
import { Fragment } from "react";
import logo from "./logo512.png";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import handleInitialData from "./../../redux/actions/shared";
import { UserId } from "./../../redux/actions/action";
import { useHistory } from "react-router";

const Login = (props) => {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  let userData = Object.values(user);
  const handleChange = (value) => {
    console.log(value);
    dispatch(UserId(value));
    history.replace("/");
  };
  return (
    <Fragment>
      <div className="Box">
        <h3 style={{ margin: "0" }}>Welcome To Would Rather Game</h3>
        <div>
          <img src={logo} alt="userImage" />
        </div>
        <h5 style={{ margin: "0" }}>Sign In</h5>
        <div className="signIn">
          <Form.Group>
            <Form.Control
              as="select"
              onChange={(e) => handleChange(e.target.value)}
              defaultValue="signin"
            >
              <option disabled value="signin">
                Sign In
              </option>
              {userData.map((users) => (
                <option key={users.id} value={users.id}>
                  {users.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
