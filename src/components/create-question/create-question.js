import React, { useRef, useState } from "react";
import "./create-question.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleSaveQuestion } from "../../redux/actions/action";
import { useHistory } from "react-router";
import { Spinner } from "react-bootstrap";

const CreateQuestion = () => {
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const history = useHistory();
  const optionOne = useRef("");
  const optionTwo = useRef("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let optionOneText = optionOne.current.value;
    let optionTwoText = optionTwo.current.value;

    console.log();
    console.log(optionOneText, optionTwoText);
    new Promise((res, rej) => {
      setLoading(true);
      dispatch(handleSaveQuestion(userId, optionOneText, optionTwoText));
      setTimeout(() => res("success"), 1000);
    }).then(() => {
      return history.replace("/");
    });
  };

  if (isLoading) {
    return (
      <div className="spinnerClass">
        <Spinner
          animation="grow"
          style={{ height: "5rem", width: "5rem", margin: "auto" }}
        />
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="Box">
          <h2 className="title">New Question</h2>
          <h5>Complete Question</h5>
          <form
            className="createQuestionForm"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="form-control"
              type="text"
              placeholder="First Question"
              ref={optionOne}
              required
            />
            <div className="separator">Next section</div>
            <input
              className="form-control"
              type="text"
              placeholder="Second Question"
              ref={optionTwo}
              required
            />
            <button
              style={{ marginTop: "20px" }}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Block level button
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateQuestion;
