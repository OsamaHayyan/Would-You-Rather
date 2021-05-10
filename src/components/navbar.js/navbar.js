import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { UserId } from "./../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
  const authId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const certainUser = user[authId];

  const logout = () => {
    dispatch(UserId(null));
    history.replace("/login");
  };

  return (
    <>
      <Nav variant="tabs" className="navWouldRather">
        <div className="d-flex align-items-center">
          <Nav.Item>
            <Nav.Link exact as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link exact as={NavLink} to="/create">
              New Question
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link exact as={NavLink} to="/leaderboard">
              Leader Board
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="d-flex align-items-center">
          {certainUser ? (
            <Nav.Item>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "30px", marginInlineEnd: "10px" }}
                  src={certainUser.avatarURL}
                  alt="userImage"
                />
                <p style={{ margin: "0" }}>{certainUser.name}</p>
              </div>
            </Nav.Item>
          ) : (
            ""
          )}
          {authId ? (
            <Nav.Item>
              <Nav.Link style={{ marginInlineStart: "10px" }} onClick={logout}>
                LogOut
              </Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Nav.Link exact as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
          )}
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
