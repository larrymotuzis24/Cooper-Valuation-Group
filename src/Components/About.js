import React, { useState } from "react";
import styles from "./About.module.css"; 
import MichaelCooper from '../bioImages/MichaelCooper.jpg';
import { MichaelLCooperBio, DavidGulleyBio, MichaelMadziarekBio, PatRileyBio } from "../Bios";
import MichaelMadziarek from '../bioImages/MichaelMadziarek.jpg';
import DavidGulley from '../bioImages/DavidGulley.jpg';
import PatRiley from '../bioImages/PatRiley.jpg';


const About = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [popupContent, setPopupContent] = useState("");

 

  const teamList = [
    {firstName:'Michael L.', lastName:'Cooper', role:'Founder and President', mobile:'773-406-5140',email:'mcooper@coopervaluationgroup.com', bioPicSrc:MichaelCooper},
    {firstName:'David P.', lastName:'Gulley', role:'Certified General Appraiser', mobile:'773-495-6388', email:'dgulley@coopervaluationgroup.com', bioPicSrc:DavidGulley},
    {firstName:'Michael E.', lastName:'Madziarek', role:'Certified General Appraiser', mobile:'773-495-6388', email:'dgulley@coopervaluationgroup.com', bioPicSrc:MichaelMadziarek},
    {firstName:'Patrick', lastName:'Riley', role:'Tech Supervisor', mobile:'630-267-4861', email:'PRiley@coopervaluationgroup.com', bioPicSrc:PatRiley},
];

  const handleImageClick = (person, content) => {
    setSelectedPerson(person);
    setPopupContent(content);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  const getCustomContent = (person) => {
    const bioContent = {
      'Michael L.': MichaelLCooperBio,
      'David P.': DavidGulleyBio,
      'Michael E.': MichaelMadziarekBio,
      'Patrick': PatRileyBio,
    };
  
    return (
      <div>
        <img src={person.bioPicSrc} alt={`${person.firstName} ${person.lastName}`} className="w-32 h-40 my-2 rounded-lg mb-4" />
        <p className="text-primary mb-2">Mobile: {person.mobile}</p>
        <a className="text-primary hover:text-green-400 transition-colors mb-4" href={`mailto:${person.email}`}>{person.email}</a>
        <p>{bioContent[person.firstName]}</p>
        {person.firstName === 'Michael L.' && (
          <a
            href="https://www.coopervaluationgroup.com/Michael%20L%20Cooper%20MAI%20Qualifications%208.25.15.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-green-400 transition-colors mt-4"
          >
            Click here to view Michael's Qualification page
          </a>
        )}
      </div>
    );
  };

  const teamListDisplay = teamList.map((person, index) => {
    const customContent = getCustomContent(person);

    return (
      <div key={index} className="border border-gray-300 flex flex-col items-center p-4 bg-white rounded-lg shadow-md space-y-2">
        <img src={person.bioPicSrc} alt={person.firstName + " " + person.lastName} className="w-32 h-40 my-2 rounded-lg cursor-pointer" onClick={() => handleImageClick(person, customContent)}/>
        <p className="text-third font-semibold text-lg"> {person.firstName} {person.lastName} </p>
           <p className="text-second font-medium"> {person.role} </p>
           <p className="text-primary"> Mobile: {person.mobile} </p>
           <a className="text-primary hover:text-green-400 transition-colors" href={`mailto:${person.email}`}> {person.email} </a>
      </div>
    )
  });

  return (
    <div className="flex flex-col w-full pb-32 mx-auto pt-4 px-4 sm:px-8 bg-third shadow-md text-white">
       <div className={popupVisible ? styles['blur-overlay'] : ''}>
      <div className="flex flex-col mb-4">
        <div className="w-60 border-b border-white mx-auto"></div>
        <h2 className="text-4xl font-bold text-center whitespace-nowrap mb-2 mt-2"> Our People </h2>
        <div className="w-60 border-b border-white mx-auto"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 mb-8 mt-4">
               <p> <span className="font-bold"> Michael L. Cooper, MAI </span> is the founder and President of the Cooper Valuation Group, which he started in 2010.
                        Mr. Cooper’s core competencies include numerous assignments involving age-restricted housing, assisted living and nursing facilities throughout Illinois, Iowa, Wisconsin, Indiana, Ohio, Missouri, and Michigan. His experience includes a broad range of operations ranging from private pay to Medicaid/Medicare facilities for projects operating successfully as well as work out deals.
                        He is familiar with <span className="font-bold"> HUD’s Lean Program </span>for insuring mortgages for Section 232’s (nursing and assisted living facilities). HUD developed the LEAN process in 2008 specifically for Section 232 applications.</p>
      
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamListDisplay}
      </div>
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={`${styles['blur-overlay']} absolute inset-0`} onClick={handleClosePopup}></div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 relative w-full max-w-md mx-auto">
            <button className="exit-popup text-red-500 hover:text-red-700 absolute top-2 right-2" onClick={handleClosePopup}>&times;</button>

            <div className="popup-content mt-2">
              <h3 className="text-xl font-semibold mb-4">{selectedPerson.firstName} {selectedPerson.lastName}</h3>
              {popupContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
