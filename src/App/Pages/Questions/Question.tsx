import Spinner from '@/App/components/Loading/Loader';
import { popSucess } from '@/App/components/PopUp/popSuccess';
import { QuestionSchemaType } from '@/App/services/api/schemas/Question.Schema';
import { answerQuestion } from '@/App/services/mutation/question.mutation';
import { useFetchLectureQuestions } from '@/App/services/query/question.query';
import CustomButton from '@/App/shared/common/Button/Button';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

type ResponseStatusType = {
  [key: number]: boolean;
};
export default function Question() {
  const router = useRouter();
  const [responseStatus, setResponseStatus] = useState<ResponseStatusType>({});
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const lecture = router.query.lecture as string;
  const { questions, isLoading, isError, refetch } = useFetchLectureQuestions({
    lectuerId: lecture,
  });
  const { mutate: mutateAnswerQuestion } = useMutation(answerQuestion);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const selectedAlternative: number = data[`question${selectedQuestion}`];
    if (selectedQuestion) {
      const response = {
        questionId: selectedQuestion,
        answerId: selectedAlternative,
      };
      mutateAnswerQuestion(response, {
        onSuccess: (response) => {
          if (response?.is_correct) {
            setResponseStatus((prev) => {
              return {
                ...prev,
                [response.question_id]: true,
              };
            });
          } else if (response && !response.is_correct) {
            setResponseStatus((prev) => {
              return {
                ...prev,
                [response.question_id]: false,
              };
            });
          }
        },
        onError: (error: any) => {
          console.log(error);
        },
      });
    }
  };
  const getQuestionColor = (question: QuestionSchemaType) => {
    const questionColor =
      question.wasCorrect == true || responseStatus[question.id]
        ? 'text-green-600'
        : question.wasCorrect == false || responseStatus[question.id] === false
        ? 'text-red-500'
        : 'text-gray-600';
    return questionColor;
  };
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-16  justify-center items-center xl:px-28 px-16 py-28 ">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        ) : (
          questions?.map((question, idx) => {
            const questionColor = getQuestionColor(question);
            return (
              <div
                key={question.id}
                className={` w-full bg-white p-6 rounded-lg shadow-defaultShadow flex flex-wrap flex-col ${questionColor}`}
              >
                <h1 className="text-xl font-bold mb-4 ">
                  <span className="mr-2">
                    {idx + 1}
                    {')'}
                  </span>
                  {question.question_text}
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ul className=" ml-6">
                    {question.alternatives.map((alternative, index) => (
                      <li key={alternative.id} className="mb-2">
                        <label className="inline-flex items-center  hover:cursor-pointer">
                          <input
                            type="radio"
                            value={alternative.id}
                            className={`${questionColor} form-radio h-5 w-5 `}
                            defaultChecked={
                              alternative.id === question.choosenAnswerId
                            }
                            {...register(`question${question.id}`)}
                          />
                          <span className="ml-2 text-gray-700">
                            {alternative.alternative_text}
                          </span>
                        </label>
                      </li>
                    ))}
                    <CustomButton
                      onClick={() => setSelectedQuestion(question.id)}
                      isSubmit={true}
                    >
                      Send
                    </CustomButton>
                  </ul>
                </form>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
