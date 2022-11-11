import CustomError from './CustomError';
import {
  UserRequestInterface,
  CustomRequest,
  PayloadInterface,
  UserTableInterface,
  announcementInterface,
  answerInterface,
  postQuestionInterface,
} from './interfaces';
import {
  addNewAssignmentValidation,
  addNewFeedbackValidation,
  deleteStudentFromClassValidation,
  userValidation,
  parentValidation,
  loginValidate,
  addAnnouncementValidate,
  putAnswerQuestionValidate,
  testValidation,
  postQuestionValidate,
  recommendationValidation,
} from './validation';
import { signToken, verifyToken } from './jwt';

export {
  CustomError,
  CustomRequest,
  UserRequestInterface,
  PayloadInterface,
  UserTableInterface,
  userValidation,
  parentValidation,
  addNewAssignmentValidation,
  addNewFeedbackValidation,
  signToken,
  verifyToken,
  loginValidate,
  testValidation,
  recommendationValidation,
  deleteStudentFromClassValidation,
  announcementInterface,
  addAnnouncementValidate,
  answerInterface,
  putAnswerQuestionValidate,
  postQuestionValidate,
  postQuestionInterface,
};
