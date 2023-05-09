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
    const newslettersDisplay = newslettersList.map((newletter, index) => {
        return (
            <a key={index} href={newletter.link} className="inline-block px-4 py-2 rounded-md text-white hover:font-bold underline"> {newletter.title} </a> 
        )
    });

    return (
        <div>
             <div className="flex flex-col">
             <div className="w-80 border border-black place-self-center"></div>
             <h2  className="text-3xl font-bold text-center whitespace-nowrap"> CVG Newsletters </h2>
             <div className="w-60 border border-black place-self-center mb-1"></div>
             </div>
             <div className="relative flex flex-col mt-6">
                    {newslettersDisplay}
                    <div class="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none bg-gray-500"></div>
             </div>
        </div>
    )
};

export default Newsletters;