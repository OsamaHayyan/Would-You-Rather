import React from "react";
import { NavLink } from "react-router-dom";
import "./unanswered.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const UnAnswered = () => {
  const questionData = useSelector((state) => state.questionData);
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.userData);
  const history = useHistory();
  const unAnsweredQuestions = Object.values(questionData)
    .filter(
      (question) => !Object.keys(user[userId].answers).includes(question.id)
    )
    .sort((a, b) => a.timestamp - b.timestamp)
    .reverse();

  const HandleClick = (question) => {
    return history.push(`/questions/${question.id}?name=question`);
  };

  console.log(Object.keys(user[userId].answers));

  return (
    <>
      {unAnsweredQuestions.map((question) => (
        <div key={question.id} className="unAnswered">
          <h4 className="userName">{user[question.author].name}</h4>
          <div className="row align-items-center mx-0">
            <div className="col-5 userImg">
              <div className="image">
                <img src={user[question.author].avatarURL} alt="unanswered" />
              </div>
            </div>
            <div className="col userDetails">
              <h6>Would you rather</h6>
              <p style={{ textAlign: "center" }}>{question.optionOne.text}</p>
              <p style={{ textAlign: "center" }}>or...</p>
              <div style={{ textAlign: "center" }} className="mx-auto">
                <button
                  onClick={() => HandleClick(question)}
                  className="btn btn-primary btn-sm btn-block poll-btn"
                >
                  Poll question
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UnAnswered;
