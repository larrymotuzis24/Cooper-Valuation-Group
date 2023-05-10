import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto py-8 px-4 lg:px-0">
      <div className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 p-8 rounded-lg shadow-md text-white mb-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Cooper Valuation Group
        </h2>
        <h2 className="text-2xl font-semibold text-center">
          A leading commercial real estate appraisal and market analysis firm
          specializing in healthcare and senior housing properties.
        </h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h1 className="text-3xl font-semibold text-green-600 mb-6 text-center">
          Our Philosophy
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg font-medium text-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-green-600 p-4 rounded-full flex items-center justify-center text-white">
              <BsArrowRight size={32} />
            </div>
            <span>Provide high-quality market research</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-green-600 p-4 rounded-full flex items-center justify-center text-white">
              <BsArrowRight size={32} />
            </div>
            <span>Provide superior client contact & communication</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-green-600 p-4 rounded-full flex items-center justify-center text-white">
              <BsArrowRight size={32} />
            </div>
            <span>Provide detailed analysis of market transactions & trends</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md text-gray-800 leading-relaxed">
        <p className="mb-4">
          Our HUD experience includes completed assignments for HUD’s Lean
          Program for insuring mortgages for Section 232 (nursing and assisted
          living facilities). We also have completed assignments for HUD’s MAP
          lending program for Section 223, 220, and 221. We are your best choice
          for Appraisal Reports and Market Studies for healthcare or apartment
          owners considering HUD-insured financing.
        </p>
        <p>
          Our valued clients include HUD Lenders, banks, financial
          institutions, private firms, developers, owners/operators, and
          buyers/sellers. Our clients are active in Illinois, Iowa, Wisconsin,
          Indiana, Ohio, Missouri, and Michigan.
        </p>
      </div>
    </div>
  );
};

export default Home;
