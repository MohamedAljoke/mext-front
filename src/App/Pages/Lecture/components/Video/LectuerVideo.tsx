import { VideoSchemaType } from '@/App/services/api/schemas/Video.Schema';
import React from 'react';

export default function LectuerVideo({ video }: { video?: VideoSchemaType }) {
  return (
    <div className="flex items-center justify-center bg-white50 lg:min-h-[800px] min-h-[500px] w-[100%] rounded-2xl">
      {video?.video_url ? (
        <iframe
          className="lg:h-[700px] h-[400px] w-[90%]"
          src={`https://www.youtube.com/embed/${video.video_url}`}
          title={video.video_name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <h2>NO VIDEO WAS FOUND FOR THIS LECTURE</h2>
      )}
    </div>
  );
}
