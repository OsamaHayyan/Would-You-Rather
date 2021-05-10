import "./leader-board.css";
import React from "react";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const users = useSelector((state) => state.userData);
  const leaderboardData = Object.values(users)
    .map((user) => {
      const id = user.id;
      const name = user.name;
      const avatarURL = user.avatarURL;
      const answerCount = Object.values(user.answers).length;
      const questionCount = user.questions.length;
      const total = answerCount + questionCount;
      return { id, name, avatarURL, answerCount, questionCount, total };
    })
    .sort((a, b) => {
      return a.total - b.total;
    })
    .reverse()
    .slice(0, 3);

  console.log(leaderboardData);

  return (
    <>
      {leaderboardData.map((user) => (
        <div key={user.id}>
          <div className="LeaderBox mx-auto">
            <h4 className="userName">{user.name}</h4>
            <div className="row align-items-center mx-0">
              <div className="col-4 userImg">
                <div className="image">
                  <img src={user.avatarURL} alt="userImage" />
                </div>
              </div>
              <span className="col hr"></span>
              <div className="col">
                <h5>Name</h5>
                <div className="row">
                  <div className="col">
                    <p>Answered questions</p>
                  </div>
                  <div className="col-1" style={{ marginRight: "5px" }}>
                    <p>{user.answerCount}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>Created questions</p>
                  </div>
                  <div className="col-1" style={{ marginRight: "5px" }}>
                    <p>{user.questionCount}</p>
                  </div>
                </div>
              </div>
              <span className="col hr"></span>
              <div className="col scoreParent">
                <div className="score mx-auto">
                  <h6 className="titleScore">Score</h6>
                  <h6 className="numScore mx-auto">{user.total}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeaderBoard;
