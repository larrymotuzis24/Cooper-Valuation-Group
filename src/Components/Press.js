import React from "react";

const Press = () => {
    const newsList = [
        {title:'HUD Lender Article – 10.26.2016 – Cambridge Realty Capital', link:'https://www.cambridgecap.com/blog/appraiser-gives-cambridge-high-marks/'},
        {title:'HUD Loan Process Article - 4.27.2015 - Cambridge Realty Capital', link:''},
        {title:'Norridge SNF Sale - 7.15.2013 - Senior Housing News', link:'https://seniorhousingnews.com/2013/07/15/illinois-snf-fetches-record-per-bed-price-in-39-5-million-deal/'},
        {title:'Senior Housing Article - 2013 - Sperry Van Ness/Ramshaw Real Estate', link:'https://www.coopervaluationgroup.com/IAR-article-05-08-13.pdf'},
        {title:'Ballard Rehab SNF Sale - 6.15.2011 - RE Journals.com', link:''}
    ];
    const newsListDisplay = newsList.map((newsArticle, index) => {
        return (
            <a key={index} href={newsArticle.link} className="inline-block px-4 py-2 rounded-md text-white hover:font-bold underline" > 
                { newsArticle.title } 
            </a>
        )
    });

    return (
        <div>
            <div className="flex flex-col">
             <div className="w-80 border border-black place-self-center"></div>
             <h2  className="text-3xl font-bold text-center whitespace-nowrap"> CVG in the News </h2>
             <div className="w-60 border border-black place-self-center mb-1"></div>
             </div>
             <div className="relative flex flex-col mt-6">
                    {newsListDisplay}
                    <div class="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none bg-gray-500"></div>
             </div>
        </div>
    )
};

export default Press;