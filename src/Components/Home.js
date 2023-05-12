import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";



const Home = () => {
  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto py-8 px-4 lg:px-0">
      <div className="bg-gradient-to-r from-textbox via-first to-second p-8 rounded-lg shadow-md text-white mb-6">
        <h2 className="font-Garamond text-7xl font-bold text-center mb-8">
          Cooper Valuation Group
        </h2>
        <h2 className="text-2xl font-semibold text-center">
          A leading commercial real estate appraisal and market analysis firm
          specializing in senior housing and care properties.
        </h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h1 className="text-3xl font-semibold text-primary mb-6 text-center">
          Our Philosophy
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg font-medium text-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-primary p-4 rounded-full flex items-center justify-center text-white">
              <GiArchiveResearch size={32} />
            </div>
            <span className="text-center">High-quality market research</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-primary p-4 rounded-full flex items-center justify-center text-white">
              <RiContactsBook2Line size={32} />
            </div>
            <span className="text-center">Superior client contact & communication</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-primary p-4 rounded-full flex items-center justify-center text-white">
              <MdOutlineAnalytics size={32} />
            </div>
            <span className="text-center">Detailed analysis of market transactions & trends</span>
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
