import React from "react";

const videos = [
  "3FIZwdzxNB4",
  "zE-T-CzPnXs",
  "B9VRvOKKwfs",
  "NSAOrGb9orM",
  "nNS0fmg8D0g",
];

function Carusel() {
  return (
    <div className="bg-black container mx-auto py-16">
      <div className=" px-4">
      
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-900">
          {videos.map((id) => (
            <div
              key={id}
              className="flex-shrink-0 w-[250px] h-[380px] bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-red-500/30"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Carusel);