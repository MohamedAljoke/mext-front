import MathJax from '@/App/hook/mathJsx';
import CustomButton from '@/App/shared/common/Button/Button';
import React, { useEffect } from 'react'
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface IQuestionCompnentProps {
  question: {
    id: number;
    question_text: string;
    alternatives: {
      id: number;
      question_id: number;
      alternative_text: string;
      is_correct: boolean;
      created_at: Date;
      updated_at: Date;
    }[];
    created_at: Date;
    updated_at: Date;
    wasCorrect: boolean | null;
    choosenAnswerId: number | null;
  }
  questionColor: "text-green-600" | "text-red-500" | "text-gray-600"
  idx: number
  handleSubmit: UseFormHandleSubmit<FieldValues>
  register: UseFormRegister<FieldValues>
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number | null>>
  onSubmit: (data: any) => void
}
export default function QuestionCompnent({ question, questionColor, idx, handleSubmit, register, setSelectedQuestion, onSubmit }: IQuestionCompnentProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.MathJax) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, 'content']); // Queue typesetting for 'content' element
    }
  }, [question.question_text]);
  return (
    <div
      className={` w-full bg-white p-6 rounded-lg shadow-defaultShadow flex flex-wrap flex-col ${questionColor}`}
    >
      <h1 className="text-xl font-bold mb-4 ">
        <span className="mr-2">
          {idx + 1}
          {')'}
        </span>
        <span id='content'>{question.question_text}</span>
        <MathJax />
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
  )
}
