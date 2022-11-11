interface announcementInterface {
  classId: string | number,
  description: string
}
interface answerInterface {
  questionId: string | number,
  classId: string | number,
  answer: string
}

interface postQuestionInterface {
  classId: string | number,
  question: string
}

export {
  answerInterface,
  announcementInterface,
  postQuestionInterface,
};
