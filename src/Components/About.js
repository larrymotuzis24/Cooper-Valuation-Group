import React from "react";
import MichaelCooper from '../bioImages/MichaelCooper.jpg';
import MichaelMadziarek from '../bioImages/MichaelMadziarek.jpg';
import DavidGulley from '../bioImages/DavidGulley.jpg';
import PatRiley from '../bioImages/PatRiley.jpg';


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
            <div className="flex flex-row justify-around mt-2 ">
                <div className="border border-black flex flex-col items-center mx-2 bg-darkGreenBG">
                    <img src={MichaelCooper} alt="Michael Cooper" className="w-32 h-44 my-2"/>
                    <p> Michael L. Cooper </p>
                    <p> Founder and President </p>
                    <p> Mobile: 773-406-5140 </p>
                    <p> mcooper@coopervaluationgroup.com </p>
                </div>
                <div className="border border-black flex flex-col items-center mx-2 bg-darkGreenBG"> 
                    <img src={DavidGulley} alt="David Gulley" className="w-32 h-44 my-2"/>  
                    <p> David P. Gulley </p>
                    <p> Certified General Appraiser </p>
                    <p> Mobile: 773-495-6388 </p>
                    <p> dgulley@coopervaluationgroup.com </p>  
                </div>
                <div className="border border-black flex flex-col items-center mx-2 bg-darkGreenBG">
                    <img src={MichaelMadziarek} alt="Michael Madziarek" className="w-32 h-44 my-2"/>
                    <p> Michael E. Madziarek </p>
                    <p> Certified General Appraiser </p>
                    <p> Mobile: 224-227-7045 </p>
                    <p> dgulley@coopervaluationgroup.com </p>     
                </div>
                <div className="border border-black flex flex-col items-center mx-2 bg-darkGreenBG">
                <img src={PatRiley} alt="Pat Riley" className="w-32 h-44 my-2"/>
                    <p> Patrick Riley </p>
                    <p> Tech Supervisor </p>
                    <p> Mobile: 630-267-4861 </p>
                    <p> PRiley@coopervaluationgroup.com </p>     
                </div>
            </div>
        </div>
    )
};

export default About;