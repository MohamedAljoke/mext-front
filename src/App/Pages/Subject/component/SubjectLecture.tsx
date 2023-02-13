import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FiChevronUp } from 'react-icons/fi';
import { ChapterSchemaType } from '@/App/services/api/schemas/Chapter.Schema';
import Link from 'next/link';

export default function SubjectLecture({
  chapter,
}: {
  chapter: ChapterSchemaType;
}) {
  return (
    <div className="w-full lg:w-[70%]  lg:px-16 ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-[#E1F5FE] lg:px-16 px-8 py-8 text-left text-base font-bold  hover:bg-[#d3ebf7] focus:outline-none  ">
              <span>{chapter.chapter_name}</span>
              <FiChevronUp
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="bg-[#F5F5DC] lg:px-16 px-8 pt-4 pb-2 text-base text-gray-500 rounded-b-lg underline ">
              <ul className="list-disc">
                {chapter.lectuers.map((lectuer) => {
                  return (
                    <Link key={lectuer.id} href={`/lectuer/${lectuer.id}`}>
                      <li className="py-2 cursor-pointer">
                        {lectuer.lecture_name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
