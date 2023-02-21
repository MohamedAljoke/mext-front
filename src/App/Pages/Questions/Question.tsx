import Spinner from '@/App/components/Loading/Loader';
import { useFetchLectureQuestions } from '@/App/services/query/question.query';
import { useRouter } from 'next/router';
import React from 'react';

export default function Question() {
  const router = useRouter();
  const lecture = router.query.lecture as string;
  const { questions, isLoading, isError, refetch } = useFetchLectureQuestions({
    lectuerId: lecture,
  });
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-6  justify-center items-center xl:px-28 px-16 py-28 ">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        ) : (
          questions?.map((question) => {
            return (
              <div
                key={question.id}
                className="w-full bg-white p-6 rounded-lg shadow-md flex flex-wrap flex-col items-center "
              >
                <h1 className="text-xl font-bold mb-4 ">
                  {question.question_text}
                </h1>
                <ul className=" ml-6">
                  {question.alternatives.map((alternative, index) => (
                    <li key={index} className="mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="alternatives"
                          value={alternative.alternative_text}
                          className="form-radio h-5 w-5 text-gray-600"
                        />
                        <span className="ml-2 text-gray-700">
                          {alternative.alternative_text}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
