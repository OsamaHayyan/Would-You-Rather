import {
  AUTH_USER,
  RECIEVE_USER,
  RECIEVE_QUESTIONS,
  ADD_ANSWER_TO_USER,
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION_TO_USER,
} from "../types";
import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../../_DATA";
import { _saveQuestion } from "./../../_DATA";
import handleInitialData from "./shared";
import { ADD_QUESTION_TO_QUESTION } from "./../types";
export const UserId = (id) => {
  return {
    type: AUTH_USER,
    id,
  };
};
export const receiveUSER = (user) => {
  return {
    type: RECIEVE_USER,
    user,
  };
};
export const receiveQuestion = (question) => {
  return {
    type: RECIEVE_QUESTIONS,
    question,
  };
};

const addQuestionToUser = ({ author, id }) => {
  return {
    type: ADD_QUESTION_TO_USER,
    author,
    id,
  };
};

const addQuestionToQuestion = (question) => {
  return {
    type: ADD_QUESTION_TO_QUESTION,
    question,
  };
};

const addAnswerToQuestion = (authUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer,
  };
};

const addAnswerToUser = (authUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
  };
};

export const handleSaveQuestion = (author, optionOneText, optionTwoText) => {
  return (dispatch) => {
    return saveQuestion(author, optionOneText, optionTwoText)
      .then((question) => {
        dispatch(addQuestionToUser(question));
        dispatch(addQuestionToQuestion(question));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const handleSaveQuestionAnswer = (authUser, qid, answer) => {
  return (dispatch) => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));
    return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    });
  };
};

export const getData = () => {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({ users, questions }));
};

export const saveQuestion = (author, optionOneText, optionTwoText) => {
  return _saveQuestion({ author, optionOneText, optionTwoText });
};

export const saveQuestionAnswer = (authedUser, qid, answer) => {
  return _saveQuestionAnswer({ authedUser, qid, answer });
};
