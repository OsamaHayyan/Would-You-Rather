import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/navbar.js/navbar";
import Login from "./components/login/login";
import { Redirect, Route, Switch } from "react-router";
import React, { Fragment, useEffect } from "react";
import Home from "./components/home/Home";
import CreateQuestion from "./components/create-question/create-question";
import LeaderBoard from "./components/leader-board/leader-board";
import { useState } from "react";
import UserCard from "./components/userCard/userCard";
import { useSelector, useDispatch } from "react-redux";
import handleInitialData from "./redux/actions/shared";

const App = () => {
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      {Object.values(user).length <= 0 ? (
        <Spinner
          animation="grow"
          style={{ height: "5rem", width: "5rem", margin: "auto" }}
        />
      ) : (
        <>
          <NavBar />
          <Container>
            <Row className="justify-content-md-center  mx-auto">
              <Col>
                {userId ? (
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/questions/:questionId"
                      component={UserCard}
                    />
                    <Route exact path="/create" component={CreateQuestion} />
                    <Route exact path="/leaderboard" component={LeaderBoard} />
                    <Route path="*">
                      <h1 style={{ color: "black", textAlign: "center" }}>
                        Not Found
                      </h1>
                    </Route>
                  </Switch>
                ) : (
                  <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="*">
                      <h1 style={{ color: "black", textAlign: "center" }}>
                        Not Found
                      </h1>
                    </Route>
                  </Switch>
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Fragment>
  );
};

export default App;
