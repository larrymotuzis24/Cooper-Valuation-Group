import React from "react";


const Home = () => {
    return (
        <div className="flex flex-col w-5/6 mx-auto">
            <h2 className="text-3xl font-bold text-center"> Home Page </h2>
            <div className="w-36 border border-black place-self-center"></div>
            <div className="self-center mt-4">
                <h2 className="text-2xl" > The <span className="font-bold">Cooper Valuation Group</span> is a commercial real estate appraisal and market analysis firm specializing in healthcare and senior housing properties.</h2>
            </div>
            <div className="w-3/6 border border-black place-self-center mt-4 mb-2"></div>
            <div className="place-self-center">
                <h1 className=" text-xl text-center "> Our Philosophy </h1>
                <div className="max-w-lg mx-auto">
                    <ul className="text-center">
                     <li> Provide high quality market research </li>
                     <li> Provide superior client contact & communication </li>
                     <li> Provide detailed analysis of market transactions & trends </li>
                    </ul>
                </div>
            </div>
                <div className="w-3/6 border border-black place-self-center mt-4 mb-4"></div>
            <div>
                <p className="mb-4"> Our HUD experience includes completed assignments for HUD’s Lean Program for insuring mortgages for Section 232 (nursing and assisted living facilities).
                     We also have completed assignments for HUD’s MAP lending program for Section 223, 220, and 221.
                      We are your best choice for Appraisal Reports and Market Studies for healthcare or apartment owners considering HUD-insured financing.</p>

                <p> Our valued clients include HUD Lenders, banks, financial institutions, private firms, developers, owners/operators, and buyers/sellers. Our clients are active in Illinois, Iowa, Wisconsin, Indiana, Ohio, Missouri, and Michigan.</p>
            </div>
            
            
        </div>
    )
};

export default Home;