import React from "react";
import "./answer-control.css";

const AnswerControl = (props) => {
  const { answer, unanswer } = props;
  return (
    <div className="row parent">
      <div className="col btn btn1">
        <h6 onClick={answer}>unanswered question</h6>
      </div>
      <div className="col btn">
        <h6 onClick={unanswer}>answered question</h6>
      </div>
    </div>
  );
};

export default AnswerControl;
