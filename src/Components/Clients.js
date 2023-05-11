import React from "react";

const Clients = () => {
    const clientPageIntro = 'Our valued clients include HUD Lenders, banks, financial institutions, private firms, developers, owners/operators, and buyers/sellers. Our clients demand high quality work that is presented in a timely fashion. Our service includes superior communication with our clients to offer the best possible solutions to their valuation or research needs.';
    const clientList = [
    'Cambridge Realty Capital Ltd. of Illinois', 'Alden Realty Services, Inc.', 
    'Greystone Funding Corporation', 
    'NewPoint Real Estate Capital', 'Walker & Dunlop', 'BMO Harris Bank N.A.',
    '1st Equity Bank', 'CIBC Bank USA', 'X-Caliber Capital', 'Ascension Living', 
    'Old National Bank', 'Harborview Capital Partners', 'Symphony Post Acute Network',
    'Busey Bank','MidCap Financial, LLC', 'Gershman Mortgage', 'Infinity Healthcare Management of IL',
    'Academy Bank', 'First Merit Bank', 'Fifth Third Bancorp', 'First American Capital Group Corp', 'Centennial Mortgage, Inc.'
];

return (
    <div className="flex flex-col w-full mx-auto pt-4 pb-8 px-4 sm:px-8 bg-third shadow-md text-white">
      <div className="flex flex-col mb-8">
        <div className="w-60 border-b border-white mx-auto"></div>
        <h2 className="text-4xl font-bold text-center whitespace-nowrap mt-2 mb-2"> Clients & Testimonials </h2>
        <div className="w-60 border-b border-white mx-auto"></div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md text-gray-800 mb-8">
        <p className="text-xl mb-2">{clientPageIntro}</p>
        <div className="w-3/6 border-b border-gray-300 mx-auto mt-4"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
        <p className="text-2xl text-center font-semibold mb-4">Partial List of our Valued Clients</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {clientList.map((client, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-nongreen rounded-lg shadow-md space-y-2">
              <p className="text-center text-third">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Clients;