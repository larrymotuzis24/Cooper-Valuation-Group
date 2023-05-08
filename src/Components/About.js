import React from "react";

const About = () => {
    return (
        <div className="flex flex-col w-5/6 mx-auto">
            <div className="flex flex-col">
             <div className="w-40 border border-black place-self-center mt-2 mb-1"></div>
             <h2 className="text-3xl font-bold text-center whitespace-nowrap"> Our People </h2>
             <div className="w-40 border border-black place-self-center mt-2 mb-1"></div>
            </div>
            <div>
                <p> <span className="font-bold"> Michael L. Cooper, MAI </span> is the founder and President of the Cooper Valuation Group, which he started in 2010.
                    Mr. Cooper’s core competencies include numerous assignments involving age-restricted housing, assisted living and nursing facilities throughout Illinois, Iowa, Wisconsin, Indiana, Ohio, Missouri, and Michigan. His experience includes a broad range of operations ranging from private pay to Medicaid/Medicare facilities for projects operating successfully as well as work out deals.
                    He is familiar with <span className="font-bold"> HUD’s Lean Program </span>for insuring mortgages for Section 232’s (nursing and assisted living facilities). HUD developed the LEAN process in 2008 specifically for Section 232 applications.</p>
            </div>
            <div className="flex flex-row">
                <div className="border border-black">
                    
                </div>
                <div> 
                    Another guy 
                </div>
            </div>
        </div>
    )
};

export default About;