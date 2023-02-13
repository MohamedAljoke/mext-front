import { PdfSchemaType } from '@/App/services/api/schemas/Pdf.Schema';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

export default function LectuerMaterial({
  pdfs,
}: {
  pdfs: PdfSchemaType[] | undefined;
}) {
  return (
    <div className="w-full mt-8 min-h-[350px] bg-white50 flex justify-center rounded-2xl p-5">
      <div>
        <h6 className="text-lg font-semibold text-center">LECTUER MATERIAL</h6>
        {pdfs?.map((pdf) => {
          return (
            <Link key={pdf.id} href={`/pdf/${pdf.id}`}>
              <div className="flex flex-row px-8 min-w-[800px] rounded-xl mt-4 py-4 bg-[#E1F5FE] shadow-defaultShadow hover:bg-[#dbf3ff] cursor-pointer">
                <AiOutlineFilePdf className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                <span>{pdf.pdf_name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
