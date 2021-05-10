import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import PollAnsweres from "../pollAnsweres/pollAnsweres";
import PollQuestions from "../pollQuestions/pollQuestions";
import "./userCard.css";
import { useSelector } from "react-redux";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const UserCard = () => {
  const { questionId } = useParams();
  const user = useSelector((state) => state.userData);
  const questionData = useSelector((state) => state.questionData);
  const questionUser = user[questionData[questionId].author];
  let query = useQuery().get("name");
  console.log(query);

  let Query;
  if (query === "question") {
    Query = <PollQuestions />;
  } else if (query === "result") {
    Query = <PollAnsweres />;
  }
  return (
    <div className="userQuestion mx-auto">
      <h4 className="userName">{questionUser.name}</h4>
      <div className="row align-items-center mx-0">
        <div className="col-5 userImg">
          <div className="image">
            <img src={questionUser.avatarURL} alt="userImage" />
          </div>
        </div>
        <div className="col userDetails">{Query}</div>
      </div>
    </div>
  );
};

export default UserCard;
