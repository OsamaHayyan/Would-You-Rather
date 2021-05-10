import React from "react";
import "./answered.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Answered = () => {
  const questionData = useSelector((state) => state.questionData);
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.userData);
  const history = useHistory();
  const answeredQuestions = Object.values(questionData)
    .filter((question) =>
      Object.keys(user[userId].answers).includes(question.id)
    )
    .sort((a, b) => a.timestamp - b.timestamp)
    .reverse();

  const HandleClick = (question) => {
    return history.push(`/questions/${question.id}?name=result`);
  };

  return (
    <>
      {answeredQuestions.map((question) => (
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
                  to={`/questions/${question.id}`}
                  className="btn btn-primary btn-sm btn-block poll-btn"
                >
                  Results
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Answered;
