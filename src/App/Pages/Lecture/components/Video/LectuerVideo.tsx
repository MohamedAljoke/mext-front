import React from 'react';

export default function LectuerVideo() {
  return (
    <div className="flex items-center justify-center bg-white50 lg:min-h-[800px] min-h-[500px] w-[100%] rounded-2xl">
      <iframe
        className="lg:h-[700px] h-[400px] w-[90%]"
        src={`https://www.youtube.com/embed/a3iDdp43avo`}
        title={'mext-example'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
