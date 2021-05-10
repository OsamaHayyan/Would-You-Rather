import React, { useState } from "react";
import AnswerControl from "../answer-control/answer-control";
import Answered from "../answered/answered";
import UnAnswered from "../unanswered/unanswered";
import "./Home.css";

const Home = () => {
  const [isAnswered, setAnswere] = useState(true);

  const answer = () => {
    if (isAnswered === false) {
      console.log("eslam");
      setAnswere(true);
    }
  };
  const unanswer = () => {
    if (isAnswered === true) {
      console.log("osama");
      setAnswere(false);
    }
  };

  return (
    <div className="Box parentElmnt">
      <AnswerControl answer={answer} unanswer={unanswer} />
      {isAnswered ? <UnAnswered /> : <Answered />}
    </div>
  );
};

export default Home;
