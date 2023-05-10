import React from "react";
import MichaelCooper from '../bioImages/MichaelCooper.jpg';
import MichaelMadziarek from '../bioImages/MichaelMadziarek.jpg';
import DavidGulley from '../bioImages/DavidGulley.jpg';
import PatRiley from '../bioImages/PatRiley.jpg';


const About = () => {
    const teamList = [
        {firstName:'Michael L.', lastName:'Cooper', role:'Founder and President', mobile:'773-406-5140',email:'coopervaluationgroup.com', bioPicSrc:MichaelCooper},
        {firstName:'David P.', lastName:'Gulley', role:'Certified General Appraiser', mobile:'773-495-6388', email:'dgulley@coopervaluationgroup.com', bioPicSrc:DavidGulley},
        {firstName:'Michael E.', lastName:'Madziarek', role:'Certified General Appraiser', mobile:'773-495-6388', email:'dgulley@coopervaluationgroup.com', bioPicSrc:MichaelMadziarek},
        {firstName:'Patrick', lastName:'Riley', role:'Tech Supervisor', mobile:'630-267-4861', email:'PRiley@coopervaluationgroup.com', bioPicSrc:PatRiley},
    ];

    
const teamListDisplay = teamList.map((person, index) => {
    return (
      <div className="border border-gray-300 flex flex-col items-center p-4 bg-white rounded-lg shadow-md space-y-2">
        <img src={person.bioPicSrc} alt="Michael Cooper" className="w-32 h-40 my-2 rounded-lg"/>
        <p className="text-blue-600 font-semibold text-lg"> {person.firstName} {person.lastName} </p>
        <p className="text-blue-500 font-medium"> {person.role} </p>
        <p className="text-gray-700"> Mobile: {person.mobile} </p>
        <a className="text-blue-600 hover:text-blue-400 transition-colors" href={`mailto:${person.email}`}> {person.email} </a>
      </div>
    )
  });

  return (
    <div className="flex flex-col w-full mx-auto pt-4 pb-8 sm:px-8 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-lg shadow-md text-white">
      <div className="flex flex-col mb-4">
        <div className="w-60 border-b border-white mx-auto"></div>
        <h2 className="text-3xl font-bold text-center whitespace-nowrap mt-2"> Our People </h2>
        <div className="w-40 border-b border-white mx-auto mt-1"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 mb-8">
               <p> <span className="font-bold"> Michael L. Cooper, MAI </span> is the founder and President of the Cooper Valuation Group, which he started in 2010.
                        Mr. Cooper’s core competencies include numerous assignments involving age-restricted housing, assisted living and nursing facilities throughout Illinois, Iowa, Wisconsin, Indiana, Ohio, Missouri, and Michigan. His experience includes a broad range of operations ranging from private pay to Medicaid/Medicare facilities for projects operating successfully as well as work out deals.
                        He is familiar with <span className="font-bold"> HUD’s Lean Program </span>for insuring mortgages for Section 232’s (nursing and assisted living facilities). HUD developed the LEAN process in 2008 specifically for Section 232 applications.</p>
      
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamListDisplay}
      </div>
    </div>
  )
      
};

export default About;

