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
const clientDisplay = clientList.map((client, index) => {
    return (
        <li key={index} className="list-disc"> { client } </li>
    )
});
    
    return (
        <div className='flex flex-col mx-auto w-5/6'>
             <div className="flex flex-col">
             <div className="w-80 border border-black place-self-center"></div>
             <h2  className="text-3xl font-bold text-center whitespace-nowrap"> Products & Services </h2>
             <div className="w-60 border border-black place-self-center mb-1"></div>
             <div className="self-center mt-4">
                <p className="text-xl" > {clientPageIntro} </p>
            </div>
            <div className="w-3/6 border border-black place-self-center mt-4 mb-2"></div>
            </div>
            <div>
                <p className="text-xl text-center underline mb-2"> Partial List of our Valued Clients </p>
                <div>
                    <ul className="grid grid-cols-3 gap-2"> 
                        {clientDisplay}
                    </ul>
                        
                </div>
            </div>
        </div>
    )
};

export default Clients;