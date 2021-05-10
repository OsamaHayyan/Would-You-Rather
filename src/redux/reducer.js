import produce from "immer";

import {
  AUTH_USER,
  RECIEVE_USER,
  RECIEVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  ADD_QUESTION_TO_QUESTION,
} from "./types";
import handleInitialData from "./actions/shared";
import { saveQuestionAnswer } from "./actions/action";

export const userId = (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.id;
    default: {
      return state;
    }
  }
};
export const userData = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_USER:
      return {
        ...state,
        ...action.user,
      };
    case ADD_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;
      return produce(state, (draft) => {
        draft[authUser].answers[qid] = answer;
      });
    // case ADD_ANSWER_TO_USER:
    //   const { authUser, qid, answer } = action;

    //   return {
    //     ...state,
    //     [authUser]: {
    //       ...state[authUser],
    //       answers: {
    //         ...state[authUser].answers,
    //         [qid]: answer,
    //       },
    //     },
    //   };

    case ADD_QUESTION_TO_USER:
      const { author, id } = action;
      return produce(state, (draft) => {
        draft[author].questions.concat(id);
      });
    default: {
      return state;
    }
  }
};

export const questionData = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.question,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;
      return produce(state, (draft) => {
        draft[qid][answer].votes.push(authUser);
      });
    // return {
    //   ...state,
    //   [qid]: {
    //     ...state[qid],
    //     [answer]: {
    //       ...state[qid][answer],
    //       votes: state[qid][answer].votes.concat(authUser),
    //     },
    //   },
    // };
    case ADD_QUESTION_TO_QUESTION:
      const { question } = action;
      return produce(state, (draft) => {
        draft[question.id] = question;
      });
    default: {
      return state;
    }
  }
};
