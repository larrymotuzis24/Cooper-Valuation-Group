import React from "react";
import MichaelCooper from '../bioImages/MichaelCooper.jpg';
import MichaelMadziarek from '../bioImages/MichaelMadziarek.jpg';
import DavidGulley from '../bioImages/DavidGulley.jpg';
import PatRiley from '../bioImages/PatRiley.jpg';


const About = () => {
    const teamList = [
        {firstName:'Michael L.', lastName:'Cooper', role:'Founder and President', mobile:'773-406-5140', emailHref:'mcooper@coopervaluationgroup.com', bioPicSrc:MichaelCooper},
        {firstName:'David P.', lastName:'Gulley', role:'Certified General Appraiser', mobile:'773-495-6388', emailHref:'dgulley@coopervaluationgroup.com', bioPicSrc:DavidGulley},
        {firstName:'Michael E.', lastName:'Madziarek', role:'Certified General Appraiser', mobile:'773-495-6388', emailHref:'dgulley@coopervaluationgroup.com', bioPicSrc:MichaelMadziarek},
        {firstName:'Patrick', lastName:'Riley', role:'Tech Supervisor', mobile:'630-267-4861', email:'mailto:PRiley@coopervaluationgroup.com', bioPicSrc:PatRiley},
    ];

    const teamListDisplay = teamList.map((person, index) => {
        return (
            <div className="border border-black flex flex-col items-center mx-2 bg-darkGreenBG">
                    <img src={person.bioPicSrc} alt="Michael Cooper" className="w-32 h-40 my-2"/>
                    <p> {person.firstName} {person.lastName} </p>
                    <p> {person.role} </p>
                    <p> Mobile:{person.mobile} </p>
                    <a className="mb-2 mx-2" href={`mailto:${person.email}`}> {person.email} </a>
                </div>
        )
    });

    return (
        <div className="flex flex-col w-5/6 mx-auto pb-4">
            <div className="flex flex-col">
             <div className="w-60 border border-black place-self-center"></div>
             <h2 className="text-3xl font-bold text-center whitespace-nowrap"> Our People </h2>
             <div className="w-40 border border-black place-self-center mb-1"></div>
            </div>
            <div>
                <p> <span className="font-bold"> Michael L. Cooper, MAI </span> is the founder and President of the Cooper Valuation Group, which he started in 2010.
                    Mr. Cooper’s core competencies include numerous assignments involving age-restricted housing, assisted living and nursing facilities throughout Illinois, Iowa, Wisconsin, Indiana, Ohio, Missouri, and Michigan. His experience includes a broad range of operations ranging from private pay to Medicaid/Medicare facilities for projects operating successfully as well as work out deals.
                    He is familiar with <span className="font-bold"> HUD’s Lean Program </span>for insuring mortgages for Section 232’s (nursing and assisted living facilities). HUD developed the LEAN process in 2008 specifically for Section 232 applications.</p>
            </div>
            <div className="flex flex-row justify-around mt-2 ">
               {teamListDisplay}
                  
            </div>
        </div>
    )
};

export default About;