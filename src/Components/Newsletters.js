import React from "react";

const Newsletters = () => {
    const newslettersList = [
        {title:'NIC Fall Conference Highlights – October 2016',link:'https://www.coopervaluationgroup.com/2016%20NIC%20Fall%20Conference%20Highlights%20-%20Cooper%20Valuation%20Group.pdf'},
        {title:'NIC National Conference Highlights - October 2015', link:'https://www.coopervaluationgroup.com/2015%20NIC%20Highlights%20-%20Cooper%20Valuation%20Group%20-%20October%202015%20Newsletter.pdf'},
        {title:'NIC National Conference Highlights - October 2013', link:'https://www.coopervaluationgroup.com/2013%20NIC%20National%20Highlights%20-%20Fall%202013%20Newsletter.pdf'},
        {title:'HUD Lean Seminar – Philadelphia - March 2013', link:'https://www.coopervaluationgroup.com/HUD%20Lean%20Update%20-%20Cooper%20Valuation%20Group%20-%20Spring%202013%20Newsletter.pdf'},
        {title:'HUD Lean Seminar – Chicago September 2011', link:'https://www.coopervaluationgroup.com/HUD%20Lean%20Update%20-%20Cooper%20Valuation%20Group%20-%20Fall%202011%20Newsletter.pdf'},
        {title:'Summer 2011 – Midwest Market Update', link:'https://www.coopervaluationgroup.com/Midwest%20Economy%20&%20Skilled%20Nursing%20Facility%20Trends%20-%20Cooper%20Valuation%20Group%20-%20Summer%202011%20Newsletter.pdf'}
    ];

    return (
        <div className="flex flex-col w-full mx-auto pt-4 pb-8 px-4 sm:px-8 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-lg shadow-md text-white">
            <div className="flex flex-col mb-8">
                <div className="w-80 border-b border-white mx-auto"></div>
                <h2 className="text-4xl font-bold text-center whitespace-nowrap mb-1"> CVG Newsletters </h2>
                <div className="w-60 border-b border-white mx-auto mb-4"></div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                    {newslettersList.map((newsletter, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md space-y-2">
                            <a href={newsletter.link} className="text-center text-blue-600 hover:underline">{newsletter.title}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Newsletters;




