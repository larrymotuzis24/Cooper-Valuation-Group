import React from "react";
import CarouselComponent from "./CarouselComponent";

const Services = () => {
  const healthcarePropertyList = [
    'SNF - Skilled Nursing Facility (geriatric and pediatric)', 'ICF - Intermediate Care Facility',
    'DD – Developmentally Disabled', 'ALF - Assisted Living – including dedicated dementia ALFs',
    'SLF - Supportive Living Facility', 'ILF - Independent Living Facility', 
    'SILF - Subsidized Independent Living Facility', 'CCRC - Continuum of Care Retirement Communities'
    ];

    const housingExpertiseList = ['Market rate apartment complexes', 'Age-Restricted Senior Housing'];

    const healthcareProperties = healthcarePropertyList.map((property, index) => {
        return (
          <li key={index} className="list-disc text-gray-800 ml-4"> {property} </li>
        )
      });
    
     
    
      const housingExpertise = housingExpertiseList.map((item, index) => {
        return (
          <li key={index} className="list-disc text-gray-800 ml-4"> {item} </li>
        )
      });

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto pt-4 pb-8 sm:px-8 bg-gradient-to-br from-green-300 via-green-400 to-green-500 rounded-lg shadow-md text-white">
      <div className="flex flex-col mb-8">
      <div className="w-80 border-b border-white mx-auto"></div>
            <h2 className="text-4xl font-bold text-center whitespace-nowrap mb-1"> Products & Services </h2>
            <div className="w-60 border-b border-white mx-auto mb-4"></div>
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 mb-8">
        <h2 className="text-2xl mb-4">We offer Appraisal Reports that are HUD-compliant as well as those that are approved for “conventional lenders” such as banks and other federally regulated lenders.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-200 p-4 rounded-lg shadow-md space-y-2">
              <ul className="space-y-2 text-lg">
                {healthcareProperties}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 mb-8">
        <p className="mb-4">Our housing expertise includes valuation and consulting for apartment complexes including:</p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="bg-green-200 p-4 rounded-lg shadow-md space-y-2">
              <ul className="space-y-2 text-lg">
                {housingExpertise}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default Services;
