import {
  receiveUSER,
  receiveQuestion,
  getData,
  saveQuestionAnswer,
} from "./action";

const handleInitialData = () => {
  return (dispatch) => {
    return getData().then(({ users, questions }) => {
      dispatch(receiveUSER(users));
      dispatch(receiveQuestion(questions));
    });
  };
};

export default handleInitialData;
