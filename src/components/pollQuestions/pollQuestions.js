import React, { useState, useEffect } from "react";
import "./pollQuestions.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { handleSaveQuestionAnswer } from "./../../redux/actions/action";
const PollQuestions = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const questionData = useSelector((state) => state.questionData)[questionId];
  const userId = useSelector((state) => state.userId);

  console.log(questionData.optionOne.text);
  console.log(questionData.optionTwo.text);
  const [answer, setAnswer] = useState("");
  const handleChange = (value) => {
    console.log(value);
    setAnswer(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSaveQuestionAnswer(userId, questionId, answer));
    return history.replace(`/questions/${questionId}?name=result`);
  };

  return (
    <>
      <h5>Question</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value={"optionOne"}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {questionData.optionOne.text}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value={"optionTwo"}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {questionData.optionTwo.text}
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-sm btn-block poll-btn"
        >
          Answer
        </button>
      </form>
    </>
  );
};

export default PollQuestions;
