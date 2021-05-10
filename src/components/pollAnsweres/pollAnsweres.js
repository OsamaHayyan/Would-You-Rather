import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./pollAnsweres.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

const PollAnsweres = () => {
  const { questionId } = useParams();
  const userId = useSelector((state) => state.userId);
  const questionData = useSelector((state) => state.questionData);
  const user = useSelector((state) => state.userData);
  const userAnswer = user[userId]["answers"][questionId];
  const optionOneVotesLength = questionData[questionId].optionOne.votes.length;
  const optionTwoVotesLength = questionData[questionId].optionTwo.votes.length;
  const totalVotes = optionOneVotesLength + optionTwoVotesLength;
  console.log("totalVotes " + totalVotes);
  const percentageOne = ((optionOneVotesLength / totalVotes) * 100).toFixed(2);
  const percentageTwo = ((optionTwoVotesLength / totalVotes) * 100).toFixed(2);

  console.log(percentageOne);
  console.log(percentageTwo);
  console.log(userAnswer);
  return (
    <>
      <h5>Answeres</h5>
      <div>
        <h6>
          {questionData[questionId].optionOne.text}{" "}
          {userAnswer === "optionOne" ? "Is Your Answer" : null}
        </h6>
        <ProgressBar
          now={percentageOne > 0 ? percentageOne : 100}
          label={percentageOne > 0 ? `${percentageOne}%` : "0%"}
          className={percentageOne === 0 ? "progressColor" : ""}
        />
        <hr />
        <h6>
          {questionData[questionId].optionTwo.text}{" "}
          {userAnswer === "optionTwo" ? "Is Your Answer" : null}
        </h6>
        <ProgressBar
          now={percentageTwo > 0 ? percentageTwo : 100}
          label={percentageTwo > 0 ? `${percentageTwo}%` : "0%"}
          className={percentageTwo === 0 ? "progressColor" : ""}
        />
      </div>
    </>
  );
};

export default PollAnsweres;
