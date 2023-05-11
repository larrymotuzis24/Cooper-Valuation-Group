import React from "react";

const Press = () => {
  const newsList = [
    {
      title: "HUD Lender Article – 10.26.2016 – Cambridge Realty Capital",
      link: "https://www.cambridgecap.com/blog/appraiser-gives-cambridge-high-marks/",
    },
    {
      title: "HUD Loan Process Article - 4.27.2015 - Cambridge Realty Capital",
      link: "",
    },
    {
      title: "Norridge SNF Sale - 7.15.2013 - Senior Housing News",
      link:
        "https://seniorhousingnews.com/2013/07/15/illinois-snf-fetches-record-per-bed-price-in-39-5-million-deal/",
    },
    {
      title: "Senior Housing Article - 2013 - Sperry Van Ness/Ramshaw Real Estate",
      link: "https://www.coopervaluationgroup.com/IAR-article-05-08-13.pdf",
    },
    {
      title: "Ballard Rehab SNF Sale - 6.15.2011 - RE Journals.com",
      link: "",
    },
  ];

  return (
    <div className="flex flex-col w-full mx-auto pt-4 pb-8 px-4 sm:px-8 bg-third rounded-lg shadow-md text-white">
      <div className="flex flex-col mb-4">
        <div className="w-60 border-b border-white mx-auto"></div>
        <h2 className="text-4xl font-bold text-center whitespace-nowrap mt-2 mb-2">
          {" "}
          CVG in the News{" "}
        </h2>
        <div className="w-60 border-b border-white mx-auto mb-4"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {newsList.map((newsArticle, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-nongreen rounded-lg shadow-md space-y-2 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => {
                if (newsArticle.link) {
                  window.open(newsArticle.link, "_blank");
                }
              }}
            >
              <a
                href={newsArticle.link}
                className="text-center text-blue-600 hover:underline hover:text-third"
                target="_blank"
                rel="noopener noreferrer"
              >
                {newsArticle.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;

