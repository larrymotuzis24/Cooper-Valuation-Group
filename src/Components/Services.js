import React from "react";

const Services = () => {
    const healthcarePropertyList = [
    'SNF - Skilled Nursing Facility (geriatric and pediatric)', 'ICF - Intermediate Care Facility',
    'DD – Developmentally Disabled', 'ALF - Assisted Living – including dedicated dementia ALFs',
    'SLF - Supportive Living Facility', 'ILF - Independent Living Facility', 
    'SILF - Subsidized Independent Living Facility', 'CCRC - Continuum of Care Retirement Communities'
    ];

    const healthcareProperties = healthcarePropertyList.map((property, index) => {
        return (
            <li key={index} className="list-disc"> {property} </li>
        )
    });

    const housingExpertiseList = ['Market rate apartment complexes', 'Age-Restricted Senior Housing'];

    const housingExpertise = housingExpertiseList.map((item, index) => {
        return (
            <li key={index} className="list-disc" > {item} </li>
        )
    });


    return (
        <div className='flex flex-col mx-auto w-5/6' >
             <div className="flex flex-col">
             <div className="w-80 border border-black place-self-center"></div>
             <h2  className="text-3xl font-bold text-center whitespace-nowrap"> Products & Services </h2>
             <div className="w-60 border border-black place-self-center mb-1"></div>
             <div className="self-center mt-4">
                <h2 className="text-2xl" > We offer Appraisal Reports that are HUD-compliant as well as those that are approved for “conventional lenders” such as banks and other federally regulated lenders. </h2>
            </div>
            <div className="w-3/6 border border-black place-self-center mt-4 mb-2"></div>
            <div>
                <p> We offer Market Studies that are HUD-compliant and also perform feasibility analyses or consulting for investors, operators, and owners. Our healthcare expertise includes valuation and consulting for the following healthcare properties:</p>
                <div>
                <ul className="grid grid-cols-2 gap-2">
                    {healthcareProperties}
                    </ul>
                </div>
            </div>
            </div>
            <div className="w-3/6 border border-black place-self-center mt-4 mb-2"></div>
            <p className="self-center"> Our housing expertise includes valuation and consulting for apartment complexes including: </p>
            <div className="flex self-center">
                <ul className="grid grid-cols-1">
                    {housingExpertise}
                </ul>

            </div>
        </div>
    )
};

export default Services;