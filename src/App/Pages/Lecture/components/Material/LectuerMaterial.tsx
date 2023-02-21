import { PdfSchemaType } from '@/App/services/api/schemas/Pdf.Schema';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';

export default function LectuerMaterial({
  pdfs,
  lectureId,
}: {
  pdfs: PdfSchemaType[] | undefined;
  lectureId: number;
}) {
  const router = useRouter();
  function handleClick(lectureId: number) {
    router.push({
      pathname: '/questions',
      query: { lecture: lectureId },
    });
  }
  return (
    <div className="w-full mt-8 min-h-[350px] bg-white50 flex flex-col justify-center rounded-2xl p-5 px-16">
      <div>
        <h6 className="text-lg font-semibold text-center">LECTUER MATERIAL</h6>
        {pdfs?.map((pdf) => {
          return (
            <a key={pdf.id} href={pdf.pdf_url} target="_blank">
              <div className="flex flex-row    rounded-xl mt-4 py-4 bg-[#E1F5FE] shadow-defaultShadow hover:bg-[#dbf3ff] cursor-pointer px-2">
                <AiOutlineFilePdf className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                <span>{pdf.pdf_name}</span>
              </div>
            </a>
          );
        })}
      </div>
      <div
        onClick={() => handleClick(lectureId)}
        className="mt-auto flex flex-row justify-center items-center underline hover:cursor-pointer"
      >
        <h6 className="text-lg font-semibold text-center ">QUESTIONS</h6>
        <MdNavigateNext
          className="text-gray-400 group-hover:text-gray-500"
          size={30}
        />
      </div>
    </div>
  );
}
