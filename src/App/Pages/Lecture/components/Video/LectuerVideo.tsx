import React from 'react';

export default function LectuerVideo() {
  return (
    <iframe
      className="h-[604px] w-[1000px]"
      src={`https://www.youtube.com/embed/a3iDdp43avo`}
      title={'mext-example'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
