import React from "react";
import CarouselComponent from "./CarouselComponent";

const Services = () => {
  const healthcarePropertyList = [
    "SNF - Skilled Nursing Facility (geriatric and pediatric)",
    "ICF - Intermediate Care Facility",
    "DD – Developmentally Disabled",
    "ALF - Assisted Living – including dedicated dementia ALFs",
    "SLF - Supportive Living Facility",
    "ILF - Independent Living Facility",
    "SILF - Subsidized Independent Living Facility",
    "CCRC - Continuum of Care Retirement Communities",
  ];

  const housingExpertiseList = [
    "Market rate apartment complexes",
    "Age-Restricted Senior Housing",
  ];
  const healthcareProperties = healthcarePropertyList.map((property, index) => {
    return (
      <div
        key={index}
        className="w-full h-full flex items-center justify-center p-4 bg-nongreen rounded-lg shadow-md space-y-2"
      >
        <p className="text-center text-third">{property}</p>
      </div>
    );
  });

  const housingExpertise = housingExpertiseList.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center p-4 bg-nongreen rounded-lg shadow-md space-y-2"
      >
        <p className="text-center text-third">{item}</p>
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full mx-auto pt-4 pb-8 px-4 sm:px-8 bg-third shadow-md text-white">
      <div className="flex flex-col mb-8">
        <div className="w-60 border-b border-white mx-auto"></div>
        <h2 className="text-4xl font-bold text-center whitespace-nowrap mt-2 mb-2">
          Products & Services
        </h2>
        <div className="w-60 border-b border-white mx-auto"></div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md text-gray-800 mb-8">
        <p className="text-xl mb-2">
          We offer Appraisal Reports that are HUD-compliant as well as those
          that are approved for “conventional lenders” such as banks and
          other federally regulated lenders.
        </p>
        <div className="w-3/6 border-b border-gray-300 mx-auto mt-4"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
        <p className="text-2xl text-center font-semibold mb-4">
          Healthcare Property Types We Specialize In
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 w-full">
          {healthcareProperties}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 mt-8">
        <p className="text-2xl text-center font-semibold mb-4">
          Our Housing Expertise Includes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-2 justify-center gap-x-8">
          {housingExpertise}
        </div>
      </div>
      <div className="mt-8">
        <CarouselComponent />
      </div>
    </div>
  );
  
};

export default Services;
